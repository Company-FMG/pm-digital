import NavbarMike from "../components/global/NavbarMike";
import ProvisoryNavigationBreadcrumb from "../components/global/ProvisoryNavigationBreadcrumb";

export default function ComplaintRegister(){
    return(
        <>
            <NavbarMike/>
            <ProvisoryNavigationBreadcrumb/>
            <div className="mx-40 my-20 px-16 py-11 space-y-20 border border-black border-2 rounded-lg">
                <h2 className="font-bold text-5xl">Cadastro de Nova Denúncia</h2>

                <form action="" className="text-2xl grid gap-10 *:space-x-12 *:*:*:block">
                    <div className="flex">
                        <div className="w-2/3">
                            <label htmlFor="">Localização</label>
                            <input type="text" placeholder="Ex: Avenida Dois Rios 359, Ibura, Recife - PE" className="border border-black border-2 rounded-lg px-7 py-3 w-full"/>
                        </div>
                        <div className="w-1/3"> 
                            <label htmlFor="">CEP</label>
                            <input type="text" placeholder="Ex: 50000-000" className="border border-black border-2 rounded-lg px-7 py-3"/>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-3/5">
                            <label htmlFor="">Nome da vítima</label>
                            <input type="text" placeholder="Ex: Joana Bezerra da Silva" className="border border-black border-2 rounded-lg px-7 py-3 w-full"/>
                        </div>
                        <div className="w-2/5">
                            <label htmlFor="">Sexo</label>
                            <select name="" id="" className="border border-black border-2 rounded-lg px-7 py-3 appearance-none bg-dropdown-icon bg-right bg-no-repeat bg-[length:1em_1em] w-full">
                                <option value="">Feminino</option>
                                <option value="">Masculino</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Idade</label>
                            <input type="number" placeholder="Ex: 45" className="border border-black border-2 rounded-lg px-7 py-3  w-full"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Situação informada</label>
                            <textarea placeholder="Digite aqui..." className="w-full h-40 border border-black border-2 rounded-lg px-7 py-3"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Tipo de violência</label>
                        <div className="flex mt-6 space-x-10">
                            <div>
                                <input type="checkbox" name="" id="" className="w-6 h-6 rounded-lg mr-3"/>
                                <label htmlFor="">CVLI</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" className="w-6 h-6 rounded-lg mr-3"/>
                                <label htmlFor="">MVI</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" className="w-6 h-6 rounded-lg mr-3"/>
                                <label htmlFor="">VDFCM</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" className="w-6 h-6 rounded-lg mr-3"/>
                                <label htmlFor="">ESTUPRO</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" className="w-6 h-6 rounded-lg mr-3"/>
                                <label htmlFor="">CVP</label>
                            </div>
                            <div>
                                <input type="checkbox" name="" id="" className="w-6 h-6 rounded-lg mr-3"/>
                                <label htmlFor="">OUTROS</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-3/5">
                            <label htmlFor="">Pessoa suspeita</label>
                            <input type="text" placeholder="Ex: Keven Leone Barros" className="border border-black border-2 rounded-lg px-7 py-3 w-full"/>
                        </div>
                        <div className="w-2/5">
                            <label htmlFor="">Sexo</label>
                            <select name="" id="" className="border border-black border-2 rounded-lg px-7 py-3 appearance-none bg-dropdown-icon bg-right bg-no-repeat bg-[length:1em_1em] w-full">
                                <option value="">Masculino</option>
                                <option value="">Feminino</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Idade</label>
                            <input type="number" placeholder="Ex: 54" className="border border-black border-2 rounded-lg px-7 py-3 w-full"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Descrição</label>
                            <textarea placeholder="Digite aqui..." className="w-full h-40 border border-black border-2 rounded-lg px-7 py-3 "/>
                        </div>
                    </div>
                    <button type="submit" className="font-bold text-white bg-bluemike h-16 rounded-lg font-poppins">Cadastrar denúncia</button>
                </form>
            </div>
        </>
    );
}