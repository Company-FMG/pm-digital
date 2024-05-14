import RightArrow from "../../assets/RightArrow.svg";

export default function ComplaintCTA() {
  return (
    <>
      <button className="bg-bluemike flex items-center px-12 sm:px-32 md:px-32 lg:px-64 h-16 text-white sm:text-md md:text-md lg:text-xl font-bold font-poppins rounded">
        <span className="mr-2">Encaminhar para viatura</span>
        <img src={RightArrow} className="w-12" />
      </button>    
    </>
  );
}
