import ComplaintData from "../components/complaint/ComplaintData";
import ComplaintMap from "../components/complaint/ComplaintMap";
import ComplaintTitle from "../components/complaint/ComplaintTitle";
import SceneData from "../components/complaint/SceneData";
import ComplaintCTA from "../components/complaint/ComplaintCTA";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";

export default function Test() {
  return (
    <AuthenticatedLayout>
      <section>
        <div className="container max-w-sm sm:max-w-lg md:max-w-xl py-20 mx-auto space-y-8 px-25 ml-16 sm:ml-24 md:ml-30 lg:px-2 lg:ml-32 xl:ml-56 lg:max-w-4xl 2xl:ml-custom">
          <ComplaintTitle />
          <div className="grid gap-8 sm:gap-2 md:gap-4 lg:gap-32 xl:gap-72 2xl:gap-64 lg:grid-cols-2 lg:items-start">
            <ComplaintMap />
            <div className="flex-col">
              <ComplaintData />
              <SceneData />
            </div>
          </div>
          <ComplaintCTA />
        </div>
      </section>
    </AuthenticatedLayout>
  );
}
