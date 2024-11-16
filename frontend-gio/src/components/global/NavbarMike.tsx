import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logomike from '../../assets/PM Digital Logo.svg';

export default function NavbarMike({ selectedImage }) {
    const navigate = useNavigate();
    const [showProfilePopup, setShowProfilePopup] = useState(false);

    return (
        <header className="p-0 bg-bluemike">
            <div className="container flex justify-between sm:h-16 md:h-20 mx-auto px-4">
                <a href="/home" className="flex items-center p-2">
                    <img className="h-8 sm:h-8 md:h-16 pl-10" src={logomike} alt="Logo PM Digital" />
                </a>
                <div className="flex flex-row gap-6 items-center justify-center relative pr-14">
                    <button
                        onClick={() => navigate('/perfil')}
                        onMouseEnter={() => setShowProfilePopup(true)}
                        onMouseLeave={() => setShowProfilePopup(false)}
                        className="p-2 rounded-md"
                    >
                        {/* Contêiner da imagem de perfil com overflow-hidden para manter a imagem dentro do círculo */}
                        <div className="w-12 h-12 rounded-full overflow-hidden ring-4 ring-white ring-offset-4 ring-offset-bluemike">
                            <img
                                className="w-full h-full object-cover rounded-full" // Definido w-full e h-full para ajustar ao contêiner circular
                                src={selectedImage || "https://source.unsplash.com/40x40/?portrait?"}
                                alt="Perfil"
                            />
                        </div>
                    </button>

                    {showProfilePopup && (
                        <div
                            className="absolute top-14 right-0 bg-white shadow-lg rounded-lg w-72 p-6 border border-gray-200 text-center"
                            onMouseEnter={() => setShowProfilePopup(true)}
                            onMouseLeave={() => setShowProfilePopup(false)}
                        >
                            <div className="flex flex-col items-center mb-4">
                                {/* Contêiner para manter a imagem dentro do círculo no popup */}
                                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                                    {selectedImage ? (
                                        <img src={selectedImage} alt="Foto de Perfil" className="object-cover w-full h-full rounded-full" />
                                    ) : (
                                        <div className="w-full h-full bg-gray-300 rounded-full"></div>
                                    )}
                                </div>

                                <p className="font-semibold text-lg text-bluemike">Olá {localStorage.getItem('nome')}</p>
                                <p className="text-sm text-gray-500">Atendente do compom M901476</p>
                            </div>

                            <div className="flex flex-col gap-2 mt-4">
                                <button
                                    onClick={() => navigate('/perfil')}
                                    className="w-full py-2 text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100 text-sm font-medium"
                                >
                                    Minha conta
                                </button>
                                <button
                                    onClick={() => navigate('/configuracoes')}
                                    className="w-full py-2 text-gray-800 border border-gray-300 rounded-md hover:bg-gray-100 text-sm font-medium"
                                >
                                    Configurações
                                </button>
                                <button
                                    onClick={() => navigate('/')}
                                    className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 text-sm font-medium mt-2 flex justify-center items-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z" clipRule="evenodd" />
                                    </svg>
                                    Sair
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
