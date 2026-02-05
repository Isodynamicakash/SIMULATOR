# Architecture: SEO + Vercel Build Safety

## 1. Validation of the Proposed Architecture

### 1.1 Routing & build safety — **Valid**

| Requirement | Approach | Why it works |
|------------|----------|--------------|
| URLs unchanged | Keep same path segments; use **dynamic** segments (e.g. `[topic]`, `[chapterId]/[topicId]`) instead of one folder per topic | Same URLs (e.g. `/subjects/physics/gravity`) are served by one dynamic route. No need for thousands of physical `page.tsx` files. |
| Build succeeds on Vercel | Remove `output: "export"`; use **server** or **Node** runtime so only requested paths are rendered | No full static export → no single build that pre-renders thousands of pages → no OOM. |
| Simulations not run at build time | Put simulation UI in `components/simulations/` and load with `next/dynamic(..., { ssr: false })` in the **route** page | Route page stays thin; heavy code is in separate chunks and never executed during SSG/SSR. |

### 1.2 SEO — **Valid**

| Requirement | Approach | Why it works |
|------------|----------|--------------|
| Server-rendered HTML on first response | Route `page.tsx` is a **Server Component** (default). It renders `<h1>`, theory text, and a **placeholder or wrapper** for the sim; the actual sim is a client-only dynamic component | Crawlers get full HTML with title, description, h1, and body text. No dependency on client JS for indexable content. |
| Metadata (title, description) | Use `generateMetadata({ params })` in the same route file and return `title` / `description` (and optionally `openGraph`) | Next.js emits these in `<head>` on the server response. |
| Simulations client-only & lazy | Render the simulation via `next/dynamic` with `ssr: false` | Sim bundle loads after first paint; no sim code in initial server HTML. |

**Conclusion:** The architecture is **sound** for both SEO and build stability. Proceed with dynamic routes, thin route files, and lazy-loaded simulations.

---

## 2. Improvements (Without Increasing Build Memory)

### 2.1 Centralize “topic → component” mapping

- **Registry per subject** (e.g. `lib/registries/class11Physics.ts` or `lib/registries/physics.ts`) that maps `topic` (or `chapterId/topicId`) to a dynamic import.
- Route page imports the registry and does `const Simulation = registry[params.topic]` (or lookup by chapter/topic). If missing, `notFound()`.
- **Benefit:** One place to add new sims; route stays tiny and stable.

### 2.2 Prefer a single dynamic segment for “topic” where possible

- For **physics** (or similar): use `app/subjects/physics/[topic]/page.tsx` so `/subjects/physics/gravity` and `/subjects/physics/rutherford-gold-foil` are the same route. No need for `physics/gravity/page.tsx` and `physics/rutherford-gold-foil/page.tsx`.
- For **chemistry / biology / maths** with chapter → topic → subtopic: use **one** dynamic route, e.g. `[chapterId]/[topicId]/[subtopicId]/page.tsx`, and a **data source** (JSON, serverless DB, or CMS) to resolve titles and descriptions. Avoid thousands of static folders.

### 2.3 `generateMetadata` and Next 15

- In Next 15, `params` in `generateMetadata` and in the page are **Promises**. Use `await params` (or `Promise.resolve(params)`) before reading `params.topic` (or `params.chapterId`, etc.).
- Example:
  ```ts
  export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }) {
    const { topic } = await params;
    return { title: `... ${topic} ...`, description: `...` };
  }
  ```

### 2.4 Listing pages (e.g. `/subjects`, `/subjects/class-11/physics`)

- Keep these as **Server Components** with **static or ISR** if they only list links and light content (no heavy sims).
- Use `export const revalidate = 3600` (or similar) if you want ISR; otherwise they stay static and cheap.

### 2.5 Optional: `dynamic = "force-dynamic"` only where needed

- Use `export const dynamic = "force-dynamic"` **only** on route pages that must be computed on every request (e.g. topic pages that resolve from params).
- Listing pages can omit it so they can be cached/ISR.

---

## 3. Remaining Build-Time Risks

| Risk | Mitigation |
|------|------------|
| **Large number of static route files** | Migrate to dynamic segments and delete per-topic folders. One route file per “shape” (e.g. one for physics topic, one for chemistry chapter/topic/subtopic). |
| **generateStaticParams returning thousands of entries** | Remove or shrink it for topic-level routes so those pages are **not** pre-rendered at build. Use it only for a small set of paths you want cached at build (e.g. top-level listings). |
| **Heavy dependencies in app directory** | Keep all simulation code and heavy libs under `components/` or `lib/` and load via `next/dynamic` with `ssr: false` in the route. Route file should only import the registry and lightweight helpers. |
| **Vercel serverless function size** | Dynamic routes run as serverless functions. Keep route modules small so cold starts stay fast. Put sim code only in client bundles. |
| **Crawlers that don’t execute JS** | Your design already satisfies this: h1, theory text, and metadata are server-rendered. The sim is an enhancement; core content is in the initial HTML. |

---

## 4. Expected Folder Structure (Aligned With Your Repo)

```
app/
  subjects/
    physics/
      [topic]/
        page.tsx          # Thin: metadata + SEO content + <Simulation />
    class-11/
      chemistry/
        [chapterId]/
          [topicId]/
            page.tsx      # Topic listing / theory
          [topicId]/
            [subtopicId]/
              page.tsx    # Subtopic: theory + optional sim placeholder
  page.tsx
  ...

components/
  simulations/
    physics/
      GravitySimulation.tsx
      RutherfordSimulation.tsx
    class11/
      physics/
        ...

lib/
  registries/
    physics.ts            # topic → dynamic(() => import(...))
  data/
    class11Chemistry.ts   # Chapter/topic/subtopic titles & slugs for SEO
```

- **URLs:** Existing paths like `/subjects/physics/gravity` and `/subjects/class-11/chemistry/chapter-2/atomic-structure` stay the same; they are served by the dynamic route and params.

---

## 5. SEO Checklist (Per Topic Page)

- [ ] **generateMetadata** returns `title` and `description` (and optionally `openGraph`).
- [ ] Page is a **Server Component** that renders at least:
  - One **`<h1>`** with the topic/title.
  - **Text block** (theory/explanation) in the initial HTML.
- [ ] Simulation is rendered as a **client-only** component (e.g. via `next/dynamic` with `ssr: false`).
- [ ] No critical indexable content inside the simulation component (crawlers can ignore it).

---

## 6. Migration Order (Practical)

1. **Remove `output: "export"`** from `next.config.ts` so the build is no longer a full static export.
2. **Introduce one dynamic route** (e.g. `app/subjects/physics/[topic]/page.tsx`) and a small **registry** mapping `topic` → dynamic simulation component. Move the two existing physics sims (Gravity, Rutherford) into `components/simulations/physics/` and remove `app/subjects/physics/gravity/page.tsx` and `app/subjects/physics/rutherford-gold-foil/page.tsx` so the new route handles those paths.
3. **Verify** `/subjects/physics/gravity` and `/subjects/physics/rutherford-gold-foil` still work and that view-source shows correct `<h1>`, title, and description.
4. **Chemistry / biology / maths:** Replace thousands of static `page.tsx` files with one (or a few) dynamic route(s) and a data source; remove `generateStaticParams` for topic-level pages or limit it to a small set. Add `generateMetadata` that uses the resolved topic/chapter title and description from data.

This keeps the solution **scalable**, **production-ready**, and **safe** for Vercel memory limits while preserving URLs and SEO.
