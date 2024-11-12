export default function InfoViatura() {
    return(
        <div className="text-center">{localStorage.getItem("placaViatura")}</div>
    );
}