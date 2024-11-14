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
            {/* Passa selectedImage como prop para o NavbarMike */}
            <NavbarMike selectedImage={selectedImage} />

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
                            <span className="text-white text-sm font-semibold">Editar Foto</span>
                            {selectedImage && (
                                <button
                                    onClick={handleRemoveImage}
                                    className="mt-1 flex flex-col items-center text-white"
                                >
                                    Remover
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
