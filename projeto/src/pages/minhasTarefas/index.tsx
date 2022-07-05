import React, { useState } from 'react';
import M from 'materialize-css';
import Swal from 'sweetalert2';

import "./style.css"

import search from '../../functions/search';
import { forEachChild } from 'typescript';
    
export default function MinhasTarefas(){
    const tarefas = JSON.parse(localStorage.getItem('tarefasNaoConcluidas') || '[]')
    const deletarTarefa = (tarefa:any) =>{
        // REMOVENDO DA LISTA DE TAREFA
        for (let index = 0; index < tarefas.length; index++) {
            if(tarefas[index].nomeTarefa == tarefa){ 
                tarefas.splice(index,1)
                localStorage.setItem("tarefasNaoConcluidas",JSON.stringify(tarefas))
            }
        }
        window.location.reload()
    } 
    const tarefaConcluida = (tarefa:any) =>{

        // REMOVENDO DA LISTA DE TAREFA
        deletarTarefa(tarefa)

        // ADICIONANDO EM TAREFAS CONCLUIDAS
        if(localStorage.getItem("tarefasConcluidas") !=undefined ){
           
            let tarefasconcluidas = []   
            tarefasconcluidas = JSON.parse(localStorage.getItem('tarefasConcluidas')!)
            tarefasconcluidas.push({tarefa})
            localStorage.setItem("tarefasConcluidas",JSON.stringify(tarefasconcluidas))
        }
        else{
            let tarefasconcluidas = [{tarefa}]
            localStorage.setItem("tarefasConcluidas",JSON.stringify(tarefasconcluidas))
        }
        window.location.reload()
    }

    const editarTarefa = async (tarefa:any) =>{
        for (let index = 0; index < tarefas.length; index++) {
            if(tarefas[index].nomeTarefa == tarefa){ 
                const { value: novaTarefa } = await Swal.fire({
                    input: 'text',
                    inputPlaceholder: 'Insira o novo nome da tarefa'
                  })
                  if (novaTarefa) {
                    tarefas[index].nomeTarefa = novaTarefa
                  }
                localStorage.setItem("tarefasNaoConcluidas",JSON.stringify(tarefas))
                window.location.reload()
            }
        }
    }

    
    if (tarefas.length > 0){
        return(
            <>  
            <div className='tabela'>
                    <input type="text" id="searchBox" onKeyUp={search} placeholder="Procure por uma tarefa..."/>
                        <table id="tabela" className='centered'>
                            <thead>
                                <tr>
                                    <th ><a>Tarefa</a></th>                                                                   
                                </tr>
                            </thead>
                                
                            <tbody>                  
                                {tarefas.map((tarefa:any) => 
                                    <tr>
                                        <td>{tarefa.nomeTarefa}</td>
                                        <td><i onClick={()=> tarefaConcluida(tarefa.nomeTarefa)} className="fa-solid fa-check fa-2x"></i></td>
                                        <td><i onClick={()=> editarTarefa(tarefa.nomeTarefa)} className="fa-solid fa-pen fa-2x"></i></td>
                                        <td><i onClick={()=> deletarTarefa(tarefa.nomeTarefa)} className="fa-solid fa-x fa-2x"></i></td>
                                    </tr>
                                )}
                
                            </tbody>
                        </table>
                </div>
            </>
        )
    }
    else{
        return(
            <>                                                  
                <h4>Você não tem tarefas pendentes</h4>
                            
            </>
        )
    }
}



