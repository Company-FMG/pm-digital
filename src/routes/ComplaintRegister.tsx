import NavbarMike from "../components/NavbarMike";

export default function ComplaintRegister(){
    return(
        <>
            <NavbarMike/>

            <div className="mx-40 my-20 px-16 py-11 space-y-20 border border-black border-2 rounded-lg">
                <h2 className="font-bold text-5xl">Cadastro de Nova Denúncia</h2>

                <form action="" className="text-2xl grid gap-10 *:space-x-12 *:*:*:block">
                    <div className="flex">
                        <div>
                            <label htmlFor="">Localização</label>
                            <input type="text" placeholder="Ex: Avenida Dois Rios 359, Ibura, Recife - PE" className="border border-black border-2 rounded-lg px-7 py-3"/>
                        </div>
                        <div> 
                            <label htmlFor="">CEP</label>
                            <input type="text" placeholder="Ex: 50000-000" className="border border-black border-2 rounded-lg px-7 py-3"/>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <label htmlFor="">Nome da vítima</label>
                            <input type="text" placeholder="Ex: Joana Bezerra da Silva" className="border border-black border-2 rounded-lg px-7 py-3"/>
                        </div>
                        <div>
                            <label htmlFor="">Sexo</label>
                            <select name="" id="" className="border border-black border-2 rounded-lg px-7 py-3">
                                <option value="">Feminino</option>
                                <option value="">Masculino</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Idade</label>
                            <input type="number" placeholder="Ex: 45" className="border border-black border-2 rounded-lg px-7 py-3"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Situação informada</label>
                            <input type="text" placeholder="Digite aqui..." className="w-full h-40 border border-black border-2 rounded-lg px-7 py-3"/>
                        </div>
                    </div>
                    <div className="flex">
                        <div>
                            <label htmlFor="">Pessoa suspeita</label>
                            <input type="text" placeholder="Ex: Keven Leone Barros" className="border border-black border-2 rounded-lg px-7 py-3"/>
                        </div>
                        <div>
                            <label htmlFor="">Sexo</label>
                            <select name="" id="" className="border border-black border-2 rounded-lg px-7 py-3">
                                <option value="">Masculino</option>
                                <option value="">Feminino</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Idade</label>
                            <input type="number" placeholder="Ex: 54" className="border border-black border-2 rounded-lg px-7 py-3"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Descrição</label>
                            <input type="text" placeholder="Digite aqui..." className="w-full h-40 border border-black border-2 rounded-lg px-7 py-3 "/>
                        </div>
                    </div>
                    <button type="submit" className="font-bold text-white bg-bluemike h-16 rounded-lg">Cadastrar denúncia</button>
                </form>
            </div>
        </>
    );
}