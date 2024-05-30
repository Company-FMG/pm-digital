import logomike from '../../assets/mikelogo.svg'

export default function NavbarMike () {
    return (
        <>
            <header className="p-0 bg-bluemike">
                <div className="container flex justify-between sm:h-16 md:h-24 lg:h-32 mx-auto px-4">
                    <a href="/" className="flex items-center p-2">
                        <img className="h-8 sm:h-8 md:h-16 lg:h-20" src={logomike} />
                    </a>
                    <div className="flex flex-row gap-6 items-center justify-center">
                        <a href="">
                            <img alt="" className="w-4 sm:w-6 md:w-12 lg:w-12 rounded-full ring-4 ring-white ring-offset-4 ring-offset-bluemike" src="https://source.unsplash.com/40x40/?portrait?4" />
                        </a>
                        <div className="font-poppins text-xs sm:text-base md:text-xl lg:text-2xl text-white">
                            <p>Rafael Martins</p>
                            <p>COPOM</p>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}