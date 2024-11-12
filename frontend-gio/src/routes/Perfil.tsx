import { useState } from "react";
import NavbarMike from "../components/global/NavbarMike";

export default function Perfil() {
    const [selectedImage, setSelectedImage] = useState(null);

    // Função de seleção de imagem
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    // Função para excluir a imagem
    const handleRemoveImage = () => {
        setSelectedImage(null);
    };

    return (
        <div>
            <NavbarMike />

            <main className="flex flex-col items-center px-8 py-11 w-full bg-white rounded-lg max-md:px-5 max-md:max-w-full pl-20">

               

                <div className="relative h-[103px] w-[103px]">
                    <label className="relative flex items-center justify-center h-full w-full bg-blue-700 rounded-full cursor-pointer overflow-hidden group">
                        {selectedImage ? (
                            <img src={selectedImage} alt="Foto de Perfil" className="h-full w-full rounded-full object-cover" />
                        ) : <p></p>}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />


                       
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mb-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                            </svg>
                            <span className="text-white text-sm font-semibold">Editar Foto</span>

                            
                            {selectedImage && (
                                <button
                                    onClick={handleRemoveImage}
                                    className="mt-1 flex flex-col items-center text-white"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                    </svg>
                                    
                                </button>
                            )}
                        </div>

                    </label>
                </div>


                <p className="text-3xl font-semibold text-bluemike pt-10">
                    Olá, {localStorage.getItem('nome')}
                </p>
                <p className="mt-4 text-base text-black">
                    Atendente do compom M901476
                </p>




                <div className="mt-6 w-full max-w-md space-y-3">
                    <button className="w-full py-3 px-4 text-left bg-gray-100 rounded-lg text-gray-700 font-medium focus:outline-none">
                        Tempo de atividade
                    </button>
                    <button className="w-full py-3 px-4 text-left bg-gray-100 rounded-lg text-gray-700 font-medium focus:outline-none">
                        Escala de trabalho
                    </button>
                    <button className="w-full py-3 px-4 text-left bg-gray-100 rounded-lg text-gray-700 font-medium focus:outline-none">
                        Bonificações
                    </button>
                    <button className="w-full py-3 px-4 text-left bg-gray-100 rounded-lg text-gray-700 font-medium focus:outline-none">
                        Histórico de ocorrências
                    </button>
                </div>
            </main>
        </div>
    );
}
