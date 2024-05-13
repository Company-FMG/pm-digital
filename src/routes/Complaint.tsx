import ComplaintData from "../components/complaint/ComplaintData";
import ComplaintMap from "../components/complaint/ComplaintMap";
import ComplaintTitle from "../components/complaint/ComplaintTitle";
import SceneData from "../components/complaint/SceneData";
import NavbarMike from "../components/global/NavbarMike";
import ComplaintCTA from "../components/complaint/ComplaintCTA";

export default function Test() {
  return (
    <>
      <NavbarMike />
      <section>
        <div className="container max-w-xl py-20 mx-auto space-y-8 px-25 ml-32 lg:px-2 lg:ml-32 xl:ml-56 lg:max-w-6xl 2xl:ml-custom">
          <ComplaintTitle />
          <div className="grid gap-8 sm:gap-2 md:gap-4 lg:gap-16 xl:gap-8 2xl:gap-0 lg:grid-cols-2 lg:items-start">
            <ComplaintMap />
            <div className="flex-col">
              <ComplaintData />
              <SceneData />
            </div>
          </div>
          <ComplaintCTA />
        </div>
      </section>
    </>
  );
}
