import NavbarMike from "../components/NavbarMike";

export default function Test() {
    const endereco = 'Rua General Viriato de Medeiros'
    return (
        <>
            <NavbarMike />
            <section className="">
                <div className="container max-w-xl py-12 mx-auto space-y-24 lg:px-8 pl-32 lg:max-w-7xl">
                    <div className="flex flex-row gap-4">
                        <div className="bg-red w-12 h-12 rounded-full"></div>
                        <h1 className="font-bold text-5xl">VBG</h1>
                    </div>
                    <div className="grid gap-8 md:gap-4 lg:gap-2 xl:gap-80 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h1 className="text-sm md:text-md lg:text-xl font-bold">Localização: {endereco}</h1>
                            <iframe className="md:w-mapW md:h-mapH rounded border-4 mt-4" src="https://www.openstreetmap.org/export/embed.html?bbox=-34.88803982734681%2C-8.055325701983197%2C-34.8861113190651%2C-8.05380661342411&amp;layer=mapnik" />
                            {/*        <div className="mt-12 space-y-12">
                            <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-gray-900">Cu imperdiet posidonium sed</h4>
                                        <p className="mt-2 dark:text-gray-600">Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.</p>
                                    </div>
                                </div> 
                            </div> */}
                        </div>
                        <div className="lg:-mt-10">
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
                        
                    </div>
                    
                </div>
            </section>
        </>
    )
}