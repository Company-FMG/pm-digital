import logomike from '../../assets/mikelogo.svg'
import pmDigitalLogo from '../../assets/PM Digital Logo.svg'
import { useCredentials } from '../../contexts/CredentialsContext'
import { useModal } from '../../contexts/ModalContext';

export default function NavbarMike () {
    const { nome, pfp } = useCredentials();
    const { handleShow } = useModal();
    
    return (
        <>
            <header className="p-2 sm:p-4 2xl:p-5 bg-bluemike">
                <div className="container flex justify-between h-12 sm:h-16 mx-auto px-6 sm:px-12">
                    <a href="/home" className="flex items-center">
                        <img className="h-10 md:h-14" src={pmDigitalLogo} />
                    </a>
                    <div className="flex flex-row gap-4 sm:gap-6 items-center justify-center">
                        {/*<button onClick={() => handleShow("alertaOcorrencia")} className='text-white'>alerta</button> */}
                        <button onClick={() => handleShow("opcoes")} className='flex space-x-2 items-center'>
                        <div className="h-8 w-8 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 sm:ring-4 ring-white ring-offset-4 ring-offset-bluemike">
                            <img
                                className="w-full h-full object-cover rounded-full"
                                src={pfp}
                                alt="Perfil"
                            />
                        </div>
                        {/*<div className="font-poppins text-sm sm:text-base md:text-xl lg:text-2xl text-white">
                                <p>{localStorage.getItem("nome")}</p>
                            </div>*/}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}