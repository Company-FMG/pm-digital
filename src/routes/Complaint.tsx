import NavbarMike from "../components/NavbarMike";

export default function Complaint () {
    const endereco = 'Rua General Viriato de Medeiros'

    return (
        <>
            <NavbarMike/>
                       
            <div className="font-inter">
                <div className="container flex justify-start mx-auto gap-4 px-56 mt-24">
                    <div className="bg-red w-12 h-12 rounded-full"></div>
                    <h1 className="font-bold text-5xl">VBG</h1> 
                </div>
            
            <div className="container flex justify-start mx-auto gap-16 px-56 mt-12 text-lg">
                <div className="flex-col">
                    <h1 className="font-bold">Localização: {endereco}</h1>
                    <iframe className="w-mapW h-mapH rounded border-4 mt-4" src="https://www.openstreetmap.org/export/embed.html?bbox=-34.88803982734681%2C-8.055325701983197%2C-34.8861113190651%2C-8.05380661342411&amp;layer=mapnik"/>
                </div>
                <div className="flex-col">
                    <div className="grid gap-4">
                        <h1 className="font-bold">Ocorrência N°: </h1>
                        <p>Nome da vítima: </p>
                        <p>Sexo: </p>
                        <p>Idade: </p>
                        <p>Situação informada: </p>
                        <p>Tipo de caso: </p>
                    </div>
                    <div className="grid gap-4 mt-16">
                        <h1 className="font-bold">Informações da cena</h1>
                        <p>Pessoa suspeita: </p>
                        <p>Sexo: </p>
                        <p>Idade: </p>
                        <p>Descrição: </p>
                    </div>
                </div>
                </div>
                <div className="container flex justify-start mx-auto gap-16 px-56 mt-12 mb-32">
                    <div className="flex-col">
                    <button className="object-fill bg-bluemike w-custom h-16 text-white text-xl font-bold font-poppins rounded ">Encaminhar para viatura</button>
                </div>
                </div>
            </div>
        
            
        </>
    )
}