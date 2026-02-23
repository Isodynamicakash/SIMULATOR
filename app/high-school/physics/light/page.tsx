import LazyPhysicsSimulationLoader from "@/components/LazyPhysicsSimulationLoader";
import SeniorSecondaryTopicLayout from "@/app/components/SeniorSecondaryTopicLayout";

export const dynamic = "force-dynamic";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Physics", href: "/high-school/physics" },
  { label: "Light", href: "/high-school/physics/light" },
];

export default function HighSchoolPhysicsLightPage() {
  return (
    <SeniorSecondaryTopicLayout
      level="high-school"
      subject="physics"
      breadcrumbs={breadcrumbs}
      title="Light and Optics"
      fullWidth
    >
      {/* Hero: intro (compact) so simulator dominates first viewport */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-0 mb-2 lg:mb-3 lg:items-center">
        <div className="lg:col-span-7 lg:pr-6">
          <p className="text-sm text-neutral-300 max-w-xl leading-relaxed">
            Learn reflection and refraction, Snell&apos;s law, and total internal reflection.
            Use the simulator below, adjust the incident angle and media to see how light bends at interfaces.
          </p>
        </div>

        <LazyPhysicsSimulationLoader topic="light-optics" />
      </section>
    </SeniorSecondaryTopicLayout>
  );
}
