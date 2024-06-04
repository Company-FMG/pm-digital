import logomike from '../../assets/mikelogo.svg'
import { useCredentials } from '../../contexts/CredentialsContext'
import { useModal } from '../../contexts/ModalContext';

export default function NavbarMike () {
    const { nome, pfp } = useCredentials();
    const { handleShow } = useModal();
    
    return (
        <>
            <header className="p-0 bg-bluemike">
                <div className="container flex justify-between sm:h-16 md:h-20 mx-auto px-4">
                    <a href="/" className="flex items-center p-2">
                        <img className="h-8 sm:h-8 md:h-12" src={logomike} />
                    </a>
                    <div className="flex flex-row gap-4 sm:gap-6 items-center justify-center">
                        <button onClick={() => handleShow("opcoes")} className='flex space-x-3 items-center'>
                            <img alt="" className="w-6 h-6 object-cover sm:w-8 md:w-12 lg:w-12 rounded-full ring-2 md:ring-4 ring-white ring-offset-4 ring-offset-bluemike" src={pfp.webviewPath} />
                            <div className="font-poppins text-xs sm:text-base md:text-xl lg:text-2xl text-white">
                                <p>{nome}</p>
                            </div>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}