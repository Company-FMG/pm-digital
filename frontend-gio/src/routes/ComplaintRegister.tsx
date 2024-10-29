import axios from "axios";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import ComplaintAdress from "../components/complaint/ComplaintAdress";
import { useForm } from "../contexts/ComplaintFormContext";

export default function ComplaintRegister() {
    const { formData, setFormData } = useForm();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8080/denuncias', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                console.log('Dados enviados com sucesso!');
                // Limpar o formulário após o envio bem-sucedido, se necessário
                setFormData({
                    tipo: "",
                    local: "",
                    cep: undefined,
                    relato: "",
                    referencia: "",
                    geolocation: null,
                    vitima: null,
                    suspeito: null
                });
            } else {
                console.error('Erro ao enviar os dados');
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <AuthenticatedLayout>
            <div className="mx-4 md:mx-20 lg:mx-40 my-10 md:my-20 px-4 md:px-10 lg:px-16 py-8 md:py-11 space-y-8 md:space-y-12 border-black border-2 rounded-lg">
                <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">Cadastro de Nova Denúncia</h2>

                <form onSubmit={handleSubmit} className="grid gap-4 md:gap-8 text-xl md:text-2xl">
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="w-full">
                            <div className="flex flex-row">
                                <label className="mb-4 block">Endereço</label><span className="text-rose-600 font-bold">*</span>
                            </div>
                            <ComplaintAdress />
                        </div>
                        <div className="w-full">
                            <label className="mb-4 block">CEP</label>
                            <input
                                onChange={handleChange}
                                name="cep"
                                value={formData.cep || ""}
                                type="text"
                                placeholder="Ex: 50000-000"
                                className="border-black bg-grey-custom border-2 rounded-lg px-7 py-3 w-full placeholder:italic"
                            />
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="flex flex-row">
                            <label className="mb-4 block">Relato</label><span className="text-rose-600 font-bold">*</span>
                        </div>
                        <textarea
                            onChange={handleChange}
                            required
                            name="relato"
                            placeholder="Digite aqui..."
                            className="w-full text-justify bg-grey-custom border-black border-2 rounded-lg px-7 py-6 pb-20 placeholder:italic"
                        />
                    </div>

                    <div className="w-full">
                        <div className="flex flex-row">
                            <label className="mb-4 block">Tipo de violência</label><span className="text-rose-600 font-bold">*</span>
                        </div>
                        <select
                            onChange={handleChange}
                            name="tipo"
                            defaultValue=""
                            className="none border-black bg-grey-custom border-2 rounded-lg px-7 py-3 w-full"
                            required
                        >
                            <option value="" disabled>Selecione</option>
                            <option value="CVLI">CVLI</option>
                            <option value="MVI">MVI</option>
                            <option value="VFDCM">VDFCM</option>
                            <option value="Estupro">Estupro</option>
                            <option value="CVP">CVP</option>
                            <option value="Outros">Outros</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label className="mb-4 block">Ponto de referência</label>
                        <input
                            name="referencia"
                            onChange={handleChange}
                            type="text"
                            placeholder="Ex: Próximo ao posto de saúde"
                            className="border-black bg-grey-custom border-2 rounded-lg px-7 py-3 w-full placeholder:italic"
                        />
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="w-full">
                            <label className="mb-4 block">Nome da vítima</label>
                            <input
                                onChange={handleChange}
                                name="vitima.nome"
                                type="text"
                                placeholder="Ex: Maria Bezerra"
                                className="border-black bg-grey-custom border-2 rounded-lg px-7 py-3 w-full placeholder:italic"
                            />
                        </div>
                        <div className="w-full">
                            <label className="mb-4 block">Sexo</label>
                            <select
                                onChange={handleChange}
                                name="vitima.sexo"
                                defaultValue=""
                                className="border-black bg-grey-custom border-2 rounded-lg px-7 py-3 w-full"
                            >
                                <option value="" disabled>Selecione</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                                <option value="Não Informado">Não informado</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="mb-4 block">Idade</label>
                            <input
                                onChange={handleChange}
                                name="vitima.idade"
                                type="number"
                                placeholder="Ex: 32"
                                className="border-black bg-grey-custom border-2 rounded-lg px-7 py-3 w-full"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="w-full">
                            <label className="mb-4 block">Pessoa suspeita</label>
                            <input
                                onChange={handleChange}
                                name="suspeito.nome"
                                type="text"
                                placeholder="Ex: João Silva"
                                className="border-black bg-grey-custom border-2 rounded-lg px-7 py-3 w-full placeholder:italic"
                            />
                        </div>
                        <div className="w-full">
                            <label className="mb-4 block">Sexo</label>
                            <select
                                onChange={handleChange}
                                name="suspeito.sexo"
                                defaultValue=""
                                className="border-black bg-grey-custom border-2 rounded-lg px-7 py-3 w-full"
                            >
                                <option value="" disabled>Selecione</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                                <option value="Não Informado">Não informado</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="mb-4 block">Idade</label>
                            <input
                                onChange={handleChange}
                                name="suspeito.idade"
                                type="number"
                                placeholder="Ex: 32"
                                className="border-black bg-grey-custom border-2 rounded-lg px-7 py-3 w-full"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-4 block">Descrição da pessoa suspeita</label>
                        <textarea
                            onChange={handleChange}
                            name="suspeito.descricao"
                            placeholder="Digite aqui..."
                            className="w-full text-justify bg-grey-custom border-black border-2 rounded-lg px-7 py-6 pb-20 placeholder:italic"
                        />
                    </div>

                    <button
                        type="submit"
                        className="font-bold text-white bg-bluemike h-16 rounded-lg px-10">
                        Cadastrar denúncia
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}