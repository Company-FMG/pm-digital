export default function ComplaintMap () {
    const endereco = 'Rua General Viriato de Medeiros';
    return (
        <>
        <div>
              <h1 className="text-sm md:text-xl lg:text-2xl font-bold">
                Localização: {endereco}
              </h1>
              <iframe
                className="w-64 sm:w-100 md:w-map-mdW md:h-map-mdH rounded border-8 mt-4"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-34.88803982734681%2C-8.055325701983197%2C-34.8861113190651%2C-8.05380661342411&amp;layer=mapnik"
              />
              </div>
        </>
    )
}