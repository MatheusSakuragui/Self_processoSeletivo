import React, { useState } from 'react';
import M from 'materialize-css';


// IMPORT COMPONENTS
import Input from '../../components/input';
import Button from '../../components/button';

// IMPORT CSS
import './style.css'

function CriarTarefa() {
  const [nomeTarefa,setNomeTarefa] = useState('');

  interface state{
    nomeTarefa: string;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const nome = event.target.value
    setNomeTarefa(nome)
  }
  
  const handleSubmit = (event:any) =>{    
    event.preventDefault()
    if(localStorage.getItem("tarefasNaoConcluidas") != undefined){
      let tarefas = []
      tarefas = JSON.parse(localStorage.getItem('tarefasNaoConcluidas')!)
      tarefas.push({nomeTarefa})
      
      localStorage.setItem("tarefasNaoConcluidas",JSON.stringify(tarefas))
    }
    else{
      let tarefas = [{nomeTarefa}]
      localStorage.setItem("tarefasNaoConcluidas",JSON.stringify(tarefas))
    }
    setNomeTarefa('')
    M.toast({html: 'Tarefa Criada!', classes: 'green darken-4 rounded'});
  }
 
  return (
    <div className='conteudo'>
      <h2>Nova Tarefa</h2>
      <div className="row"> 
            <Input value={nomeTarefa} function={handleChange} type='text' id='nomeTarefa' title='Nome'/> 
            <Button function={handleSubmit} id='criar' title='Criar' />
      </div>
    </div>
  )
}

export default CriarTarefa;


