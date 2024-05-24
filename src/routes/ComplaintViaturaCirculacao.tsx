import NavbarMike from "../components/global/NavbarMike";
import ProvisoryNavigationBreadcrumb from "../components/global/ProvisoryNavigationBreadcrumb";
import Viatura from "../components/Viatura";
export default function ComplaintViaturaCirculacao() {
  return (
    <>
      <NavbarMike />
      <ProvisoryNavigationBreadcrumb/>
      <div className="px-48 py-2">
        <h1 className="font-bold text-5xl">Viaturas em Circulação</h1>
        <div className="pt-6">
          <p className="font-bold text-2xl pb-6">Mais próxima</p>
          <Viatura
            idViatura={"2378"}
            placa={"48621EJF"}
            responsavel={"Sgt Alencar"}
            efetivo={"Sgt. Alencar, Sld Marreira, Sld Correia"}
            areaAtuacao={"Recife"}
          />
        </div>

        <p className="font-bold text-2xl pt-6 pb-6">Outras viaturas</p>
        <div className="">
          <Viatura 
            idViatura={"0000"}
            placa={"aaaaaa"}
            responsavel={"Sgt Alencar"}
            efetivo={"Sgt. Alencar, Sld Marreira, Sld Correia"}
            areaAtuacao={"Recife"}
            
          />
          <Viatura
            idViatura={"0000"}
            placa={"aaaaaa"}
            responsavel={"Sgt Alencar"}
            efetivo={"Sgt. Alencar, Sld Marreira, Sld Correia"}
            areaAtuacao={"Recife"}
          />
          <Viatura
            idViatura={"0000"}
            placa={"aaaaaa"}
            responsavel={"Sgt Alencar"}
            efetivo={"Sgt. Alencar, Sld Marreira, Sld Correia"}
            areaAtuacao={"Recife"}
          />
        </div>
      </div>
    </>
  );
}
