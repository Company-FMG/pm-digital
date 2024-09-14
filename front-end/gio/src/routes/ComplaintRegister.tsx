import axios from "axios";
import { useState } from "react";
import AuthenticatedLayout from "../layouts/AuthenticatedLayout";

interface FormData {
    situacaoInformada: string;
    endereco: string;
    mapa: string;
    status: string,
    infoCena: string;
}

export default function ComplaintRegister(){
    const [formData, setFormData] = useState<FormData>({
        situacaoInformada: '',
        endereco: '',
        mapa: '',
        status: '',
        infoCena: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    {/*const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        if (checked) {
            setFormData(prevState => ({
                ...prevState,
                violenceTypes: [...prevState.violenceTypes, name]
            }));
        } else {
            setFormData(prevState => ({
                ...prevState,
                violenceTypes: prevState.violenceTypes.filter(type => type !== name)
            }));
        }
    };*/}

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:8080/api/denuncias', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 200) {
                console.log('Dados enviados com sucesso!');
                // Limpar o formulário após o envio bem-sucedido, se necessário
                setFormData({
                    situacaoInformada: '',
                    endereco: '',
                    mapa: '',
                    status: '',
                    infoCena: ''
                });
            } else {
                console.error('Erro ao enviar os dados');
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return(
        <AuthenticatedLayout>
            <div className="mx-40 my-20 px-16 py-11 space-y-20 border-black border-2 rounded-lg">
                <h2 className="font-bold text-5xl">Cadastro de Nova Denúncia</h2>

                <form onSubmit={handleSubmit} action="" className="text-2xl grid gap-10 *:space-x-12 *:*:*:block">
                    <div className="flex">
                        <div className="w-2/3">
                            <label htmlFor="">Endereço</label>
                            <input onChange={handleChange} name="endereco" type="text" placeholder="Ex: Avenida Dois Rios 359, Ibura, Recife - PE" className="border-black border-2 rounded-lg px-7 py-3 w-full"/>
                        </div>
                        <div className="w-1/3"> 
                            <label htmlFor="">Mapa (CEP)</label>
                            <input onChange={handleChange} name="mapa" type="text" placeholder="Ex: 50000-000" className="border-black border-2 rounded-lg px-7 py-3"/>
                        </div>
                    </div>
                    <div className="flex">
                        {/*<div className="w-3/5">
                            <label htmlFor="">Nome da vítima</label>
                            <input name="vitima" type="text" placeholder="Ex: Joana Bezerra da Silva" className="border-black border-2 rounded-lg px-7 py-3 w-full"/>
                        </div>
                        <div className="w-2/5">
                            <label htmlFor="">Sexo</label>
                            <select name="victimGender" id="" className="border-black border-2 rounded-lg px-7 py-3 appearance-none bg-dropdown-icon bg-right bg-no-repeat bg-[length:1em_1em] w-full">
                                <option value="">Feminino</option>
                                <option value="">Masculino</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Idade</label>
                            <input name="victimAge" type="number" placeholder="Ex: 45" className="border-black border-2 rounded-lg px-7 py-3  w-full"/>
                        </div>*/}
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Situação informada</label>
                            <textarea onChange={handleChange} name="situacaoInformada" placeholder="Digite aqui..." className="w-full h-40 border-black border-2 rounded-lg px-7 py-3"/>
                        </div>
                    </div>
                    {/*<div>
                        <label htmlFor="">Tipo de violência</label>
                        <div className="flex mt-6 space-x-10">
                            <div>
                                <input type="checkbox" name="violenceTypes" id="" className="w-6 h-6 rounded-lg mr-3"/>
                                <label htmlFor="">CVLI</label>
                            </div>
                            <div>
                                <input type="checkbox" name="violenceTypes" id="" className="w-6 h-6 rounded-lg mr-3"/>
                                <label htmlFor="">MVI</label>
                            </div>
                            <div>
                                <input type="checkbox" name="violenceTypes" id="" className="w-6 h-6 rounded-lg mr-3"/>
                                <label htmlFor="">VDFCM</label>
                            </div>
                            <div>
                                <input type="checkbox" name="violenceTypes" id="" className="w-6 h-6 rounded-lg mr-3"/>
                                <label htmlFor="">ESTUPRO</label>
                            </div>
                            <div>
                                <input type="checkbox" name="violenceTypes" id="" className="w-6 h-6 rounded-lg mr-3"/>
                                <label htmlFor="">CVP</label>
                            </div>
                            <div>
                                <input type="checkbox" name="violenceTypes" id="" className="w-6 h-6 rounded-lg mr-3"/>
                                <label htmlFor="">OUTROS</label>
                            </div>
                        </div>
                    </div>*/}
                    <div className="flex">
                        {/*Era pessoa suspeita mas vai ficar status previsoriamente*/}
                        <div className="w-3/5">
                            <label htmlFor="">Status</label>
                            <input name="status" onChange={handleChange} type="text" placeholder="Ex: Keven Leone Barros" className="border-black border-2 rounded-lg px-7 py-3 w-full"/>
                        </div>
                        {/*<div className="w-2/5">
                            <label htmlFor="">Sexo</label>
                            <select name="suspectGender" id="" className="border-black border-2 rounded-lg px-7 py-3 appearance-none bg-dropdown-icon bg-right bg-no-repeat bg-[length:1em_1em] w-full">
                                <option value="">Masculino</option>
                                <option value="">Feminino</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Idade</label>
                            <input name="suspectAge" type="number" placeholder="Ex: 54" className="border-black border-2 rounded-lg px-7 py-3 w-full"/>
                        </div>*/}
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Descrição</label>
                            <textarea onChange={handleChange} name="infoCena" placeholder="Digite aqui..." className="w-full h-40 border-black border-2 rounded-lg px-7 py-3 "/>
                        </div>
                    </div>
                    <button type="submit" className="font-bold text-white bg-bluemike h-16 rounded-lg font-poppins">Cadastrar denúncia</button>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}