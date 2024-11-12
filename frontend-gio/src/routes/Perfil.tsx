import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import NavbarMike from "../components/global/NavbarMike";





export default function Perfil() {
    return (

        <div>
            <NavbarMike />

            <main className="flex flex-col px-8 py-11 w-full bg-white rounded-lg border-solid border-[3px] border-zinc-300 max-md:px-5 max-md:max-w-full">
                <div className="flex shrink-0 self-center bg-blue-700 h-[103px] w-[103px]" aria-hidden="true" />
                <h1 className="self-center text-3xl text-blue-700">
                    Olá Keven Leoes
                </h1>
                <p className="self-center mt-4 text-base text-black">
                    Atendente do compom M901476
                </p>

            </main>
        </div>

    )

}
