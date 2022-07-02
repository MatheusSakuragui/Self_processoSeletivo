import React from 'react';
import Input from '../../components/input';

import './style.css'

function CriarTarefa() {
  return (
    <div className='conteudo'>
      <h2>Criar Tarefa</h2>
      <div className="row"> 
            <Input type='text' id='nomeTarefa' title='Nome'/> 
      </div>
    </div>
  )
}

export default CriarTarefa;


