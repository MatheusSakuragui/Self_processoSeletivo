import React, { useState } from 'react';
import M from 'materialize-css';


import search from '../../functions/search';
    
export default function MinhasTarefas(){
    const tarefas = JSON.parse(localStorage.getItem('tarefasNaoConcluidas') || '[]')
    console.log(tarefas);
    
    if (tarefas.length > 0){
        return(
            <>
            <a href='/Inativos' className='waves-effect waves-light btn center-align'>Inativos</a>
            <div className='tabela'>
                    <input type="text" id="searchBox" onKeyUp={search} placeholder="Procure por um nome..."/>
                        <table id="tabela" className='centered'>
                            <thead>
                                <tr>
                                    <th ><a>Tarefa</a> <i className="fa-solid fa-arrow-down-a-z fa"></i></th>                                                                   
                                </tr>
                            </thead>
                                
                            <tbody>                  
                                {tarefas.map((tarefa:any) => 
                                    <tr>
                                        <td>{tarefa.nomeTarefa}</td>
                                        <td><i className="fa-solid fa-check fa-2x"></i></td>
                                        <td><i className="fa-solid fa-pen fa-2x"></i></td>
                                        <td><i className="fa-solid fa-x fa-2x"></i></td>
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
                <a href='/Inativos' className='waves-effect waves-light btn center-align'>
                    Inativos
                </a>                                                     
                <h4>Você não tem tarefas pendentes</h4>
                            
            </>
        )
    }
}



