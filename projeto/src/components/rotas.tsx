import { Component } from "react";
import React from "react";
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import CriarTarefa from "../pages/criarTarefa";
import MinhasTarefas from "../pages/minhasTarefas";

import NavBar from "./navBar";

export default function Routes(){
    return(
        <>
            <NavBar tema="light-blue accent-3" botoes={[{nome:'Minhas Tarefas', rota: "/"},{ nome: 'Criar Tarefa', rota: "/criarTarefa"}]}/>
            <BrowserRouter>
                <Switch>
                    <Route path="/" element={<MinhasTarefas/>}/>
                    <Route path="/criarTarefa" element={<CriarTarefa />} />

                </Switch>
            </BrowserRouter>

        </>
    )
}