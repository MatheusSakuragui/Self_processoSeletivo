import React, { useState } from 'react';
import M from 'materialize-css';
import Swal from 'sweetalert2';

import "../minhasTarefas/style.css"

import search from '../../functions/search';

    
export default function TarefasConcluidas(){
    const tarefas = JSON.parse(localStorage.getItem('tarefasConcluidas') || '[]')
    
    
    const deletarTarefa = (tarefa:any) =>{
        // REMOVENDO DA LISTA DE TAREFA
        for (let index = 0; index < tarefas.length; index++) {
            if(tarefas[index].tarefa == tarefa){ 
                tarefas.splice(index,1)
                localStorage.setItem("tarefasConcluidas",JSON.stringify(tarefas))
            }
        }
        window.location.reload()
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
                                        <td>{tarefa.tarefa}</td>
                                        <td><i onClick={()=> deletarTarefa(tarefa.tarefa)} className="fa-solid fa-x fa-2x"></i></td>
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
                <h4>Você não tem tarefas concluídas</h4>
                            
            </>
        )
    }
}



