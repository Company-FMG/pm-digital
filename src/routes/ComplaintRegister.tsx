import NavbarMike from "../components/NavbarMike";

export default function ComplaintRegister(){
    return(
        <>
            <NavbarMike/>

            <div>
                <h2>Cadastro de Nova Denúncia</h2>

                <form action="">
                    <div>
                        <div>
                            <label htmlFor="">Localização</label>
                            <input type="text" placeholder="Ex: Avenida Dois Rios 359, Ibura, Recife - PE"/>
                        </div>
                        <div>
                            <label htmlFor="">CEP</label>
                            <input type="text" placeholder="Ex: 50000-000"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Nome da vítima</label>
                            <input type="text" placeholder="Ex: Joana Bezerra da Silva"/>
                        </div>
                        <div>
                            <label htmlFor="">Sexo</label>
                            <select name="" id="">
                                <option disabled selected>Selecionar</option>
                                <option value="">Masculino</option>
                                <option value="">Feminino</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Idade</label>
                            <input type="number" placeholder="Ex: 45"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Situação informada</label>
                        <input type="text" placeholder="Digite aqui..."/>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="">Pessoa suspeita</label>
                            <input type="text" placeholder="Ex: Keven Leone Barros"/>
                        </div>
                        <div>
                            <label htmlFor="">Sexo</label>
                            <select name="" id="">
                                <option disabled selected>Selecionar</option>
                                <option value="">Masculino</option>
                                <option value="">Feminino</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="">Idade</label>
                            <input type="number" placeholder="Ex: 54"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Descrição</label>
                        <input type="text" placeholder="Digite aqui..."/>
                    </div>
                    <button type="submit">Cadastrar denúncia</button>
                </form>
            </div>
        </>
    );
}