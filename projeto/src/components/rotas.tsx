import { Component } from "react";
import React from "react";
import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import CriarTarefa from "../pages/criarTarefa";
import MinhasTarefas from "../pages/minhasTarefas";
import TarefasConcluidas from "../pages/tarefasConcluidas";

import NavBar from "./navBar";

export default function Routes(){
    return(
        <>
            <NavBar tema="light-blue darken-4" botoes={[{nome:'Minhas Tarefas', rota: "/"},{nome:'Tarefas Concluídas', rota:'/tarefasConcluidas'},{ nome: 'Criar Tarefa', rota: "/criarTarefa"}]}/>
            <BrowserRouter>
                <Switch>
                    <Route path="/" element={<MinhasTarefas/>}/>
                    <Route path="/criarTarefa" element={<CriarTarefa />} />
                    <Route path="/tarefasConcluidas" element={<TarefasConcluidas />} />

                </Switch>
            </BrowserRouter>

        </>
    )
}