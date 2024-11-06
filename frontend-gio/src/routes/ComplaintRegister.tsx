import AuthenticatedLayout from "../layouts/AuthenticatedLayout";
import ComplaintAdress from "../components/complaint/ComplaintAdress";
import { useForm } from "../contexts/ComplaintFormContext";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useState } from "react";

const complaintSchema = z.object({
    tipo: z.string().min(1, "Selecione o tipo de violência"),
    local: z.string(),
    cep: z
        .string()
        .regex(/^\d{5}-\d{3}$/, "CEP inválido, formato esperado: 00000-000")
        .optional(),
    relato: z.string().min(1, "O relato é obrigatório"),
    referencia: z.string().optional(),
    nomeVitima: z.string().optional(),
    sexoVitima: z.string().optional(),
    idadeVitima: z.number().min(0, "Idade inválida"),
    nomeSuspeito: z.string().optional(),
    sexoSuspeito: z.string().optional(),
    idadeSuspeito: z.number().min(0, "Idade inválida"),
    descricaoSuspeito: z.string().optional(),
    status: z.string(),
    lat: z.number(),
    lng: z.number()
});

export default function ComplaintRegister() {
    const { formData, setFormData } = useForm();
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const parsedValue = name === "idadeVitima" || name === "idadeSuspeito" ? Number(value) : value;

        setFormData(prevState => ({
            ...prevState,
            [name]: parsedValue
        }));

        const fieldSchema = complaintSchema.shape[name as keyof typeof complaintSchema.shape];
        if (fieldSchema) {
            const result = fieldSchema.safeParse(parsedValue);
            if (result.success) {
                setErrors(prevErrors => ({ ...prevErrors, [name]: "" })); // Limpar o erro se o valor for válido
            } else {
                setErrors(prevErrors => ({ ...prevErrors, [name]: result.error.errors[0].message })); // Definir erro se o valor for inválido
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            complaintSchema.safeParse(formData);
            navigate("/denuncia");
        } catch (err: unknown) {
            if (err instanceof z.ZodError) {
                const formErrors: { [key: string]: string } = {};
                err.errors.forEach(error => {
                    formErrors[error.path[0]] = error.message;
                });
                setErrors(formErrors); 
            }
        }
    };

    return (
        <AuthenticatedLayout>
            <div className="mx-4 md:mx-20 lg:mx-40 mb-8 px-4 md:px-10 lg:px-16 py-8 md:py-11 space-y-8 md:space-y-8 border-black border-2 rounded-lg">
                <h2 className="font-bold text-xl md:text-4xl lg:text-3xl">Cadastro de Nova Denúncia</h2>

                <form onSubmit={handleSubmit} className="grid gap-4 md:gap-6 text-xl md:text-lg">
                    <div className="grid md:grid-cols-2 gap-2">
                        <div className="w-full">
                            <div className="flex flex-row">
                                <label className="mb-2 block">Endereço</label><span className="text-rose-600 font-bold">*</span>
                            </div>
                            <ComplaintAdress />
                        </div>
                        <div className="w-full">
                            <label className="mb-2 block">CEP</label>
                            <input
                                onChange={handleChange}
                                name="cep"
                                value={formData.cep || ""}
                                type="text"
                                placeholder="Ex: 50000-000"
                                className={`border-2 rounded-lg bg-grey-custom px-5 py-2 w-full placeholder:italic ${
                                    errors.cep ? "border-rose-600 focus:border-rose-600 outline-none" : "border-black"
                                }`}                            />
                            {errors.cep && <span className="text-rose-600">{errors.cep}</span>}
                        </div>
                    </div>

                    <div className="w-full">
                        <div className="flex flex-row">
                            <label className="mb-2 block">Relato</label><span className="text-rose-600 font-bold">*</span>
                        </div>
                        <textarea
                            onChange={handleChange}
                            required
                            name="relato"
                            placeholder="Digite aqui..."
                            className="w-full text-justify resize-none bg-grey-custom border-black border-2 rounded-lg px-5 py-4 pb-6 placeholder:italic"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-2">
                        <div className="w-full">
                            <div className="flex flex-row">
                                <label className="mb-2 block">Tipo de violência</label><span className="text-rose-600 font-bold">*</span>
                            </div>
                            <select
                                onChange={handleChange}
                                name="tipo"
                                defaultValue=""
                                className="none border-black bg-grey-custom border-2 rounded-lg px-5 py-2 w-full"
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
                            <label className="mb-2 block">Ponto de referência</label>
                            <input
                                name="referencia"
                                onChange={handleChange}
                                type="text"
                                placeholder="Ex: Próximo ao posto de saúde"
                                className="border-black bg-grey-custom border-2 rounded-lg px-5 py-2 w-full placeholder:italic"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-2">
                        <div className="w-full">
                            <label className="mb-2 block">Nome da vítima</label>
                            <input
                                onChange={handleChange}
                                name="nomeVitima"
                                type="text"
                                placeholder="Ex: Maria Bezerra"
                                className="border-black bg-grey-custom border-2 rounded-lg px-5 py-2 w-full placeholder:italic"
                            />
                        </div>
                        <div className="w-full">
                            <label className="mb-2 block">Sexo</label>
                            <select
                                onChange={handleChange}
                                name="sexoVitima"
                                defaultValue=""
                                className="border-black bg-grey-custom border-2 rounded-lg px-5 py-2 w-full"
                            >
                                <option value="" disabled>Selecione</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                                <option value="Não Informado">Não informado</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="mb-2 block">Idade</label>
                            <input
                                onChange={handleChange}
                                name="idadeVitima"
                                type="number"
                                placeholder="Ex: 32"
                                className={`border-2 rounded-lg bg-grey-custom px-5 py-2 w-full placeholder:italic ${
                                    errors.idadeVitima ? "border-rose-600 focus:border-rose-600 outline-none" : "border-black"
                                }`}                             />
                            {errors.idadeVitima && <span className="text-rose-600">{errors.idadeVitima}</span>}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-2">
                        <div className="w-full">
                            <label className="mb-2 block">Pessoa suspeita</label>
                            <input
                                onChange={handleChange}
                                name="nomeSuspeito"
                                type="text"
                                placeholder="Ex: João Silva"
                                className="border-black bg-grey-custom border-2 rounded-lg px-5 py-2 w-full placeholder:italic"
                            />
                        </div>
                        <div className="w-full">
                            <label className="mb-2 block">Sexo</label>
                            <select
                                onChange={handleChange}
                                name="sexoSuspeito"
                                defaultValue=""
                                className="border-black bg-grey-custom border-2 rounded-lg px-5 py-2 w-full"
                            >
                                <option value="" disabled>Selecione</option>
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                                <option value="Outro">Outro</option>
                                <option value="Não Informado">Não informado</option>
                            </select>
                        </div>
                        <div className="w-full">
                            <label className="mb-2 block">Idade</label>
                            <input
                                onChange={handleChange}
                                name="idadeSuspeito"
                                type="number"
                                placeholder="Ex: 32"
                                className={`border-2 rounded-lg bg-grey-custom px-5 py-2 w-full placeholder:italic ${
                                    errors.idadeSuspeito ? "border-rose-600 focus:border-rose-600 outline-none" : "border-black"
                                }`}                               />
                            {errors.idadeSuspeito && <span className="text-rose-600">{errors.idadeSuspeito}</span>}
                        </div>
                    </div>

                    <div>
                        <label className="mb-2 block">Descrição da pessoa suspeita</label>
                        <textarea
                            onChange={handleChange}
                            name="descricaoSuspeito"
                            placeholder="Digite aqui..."
                            className="w-full text-justify resize-none bg-grey-custom border-black border-2 rounded-lg px-5 py-4 pb-6 placeholder:italic"
                        />
                    </div>

                    <button
                        type="submit"
                        className="font-bold text-white bg-bluemike h-14 rounded-lg px-10">
                        Cadastrar denúncia
                    </button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}