import NavbarMike from "../components/global/NavbarMike";
import { useProfile } from "../contexts/ProfileContext" // Certifique-se de ajustar o caminho conforme sua estrutura de pastas

export default function Perfil() {
    const { selectedImage, setSelectedImage } = useProfile();

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();

            reader.onload = () => {
                const imageUrl = reader.result as string;
                setSelectedImage(imageUrl); // Salva a imagem no contexto e no localStorage
            };

            reader.readAsDataURL(file); // Converte a imagem para base64
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null); // Remove a imagem do estado e do localStorage
    };

    return (
        <div>
            {/* Navbar com a imagem selecionada */}
            <NavbarMike />

            <main className="flex flex-col items-center px-8 py-11 w-full bg-white rounded-lg max-md:px-5 max-md:max-w-full pl-20">
                <div className="relative h-[103px] w-[103px]">
                    <label className="relative flex items-center justify-center h-full w-full bg-blue-700 border-white border-4 ring-bluemike ring-4 rounded-full cursor-pointer overflow-hidden group">
                        {selectedImage ? (
                            <img src={selectedImage} alt="Foto de Perfil" className="h-full w-full rounded-full object-cover" />
                        ) : (
                            <p className="text-white">Adicione uma foto</p>
                        )}
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
                <p className="text-3xl font-semibold text-bluemike mt-4">
                    Olá, {localStorage.getItem("nome")}!
                </p>
                <p className="mt-2 text-base text-black">
                    Despachante #M901476
                </p>

                {/* Botões de Ações */}
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
