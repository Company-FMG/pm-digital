import RightArrow from "../../assets/RightArrow.svg";

export default function ComplaintCTA() {
  return (
    <>
      <button className="bg-bluemike flex items-center px-64 h-16 text-white text-xl font-bold font-poppins rounded">
        <span className="mr-2">Encaminhar para viatura</span>
        <img src={RightArrow} className="w-12" />
      </button>
    </>
  );
}
