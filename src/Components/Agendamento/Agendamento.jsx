import React from 'react'
import Calendario from '../Img/calendario.png'

function Agendamento(){
return(
<main>
<h2>Agendamento</h2>
<img src={Calendario} alt="calendario" />

<div>
<h3>Pediatras</h3>
<h3>Especialistas</h3>
<label for="Dra Débora">Dra Débora</label>
<input  type="radio" name="especialistas" id="Dra Débora"/>
<label for="Dra Lorrayne">Dra Lorrayne</label>
<input  type="radio" name="especialistas " id="Dra Lorrayne"/>
<label for="Dra Grazi">Dra Grazi</label>
<input  type="radio" name="especialistas" id="Dra Grazi"/>


<h3>Hora</h3>
<label for="12hr">12:00</label>
<input  type="radio" name="hora" id="12hr"/>
<label for="14hr">14:00</label>
<input  type="radio" name="hora" id="14hr"/>
<label for="16hr">16:00</label>
<input  type="radio" name="hora" id="16hr"/>

<button>Enviar</button>
</div>

<div>
<h3>Clínico Geral</h3>
<h3>Especialistas</h3>
<label for="Dra Danielle">Dra Danielle</label>
<input  type="radio" name="especialistas" id="Dra Danielle"/>
<label for="Dra Raquel">Dra Raquel</label>
<input  type="radio" name="especialistas " id="Dra Raquel"/>
<label for="Dra Karynne">Dra Grazi</label>
<input  type="radio" name="especialistas" id="Dra Karynne"/>


<h3>Hora</h3>
<label for="12hr">12:00</label>
<input  type="radio" name="hora" id="12hr"/>
<label for="14hr">14:00</label>
<input  type="radio" name="hora" id="14hr"/>
<label for="16hr">16:00</label>
<input  type="radio" name="hora" id="16hr"/>

<button>Enviar</button>
</div>

<h2>Formas de Pagamento</h2>
<h3>Valor da consulta R$800,00</h3>

<label for="Particular">Particular</label>
<input  type="radio" name="pagamento" id="Particular"/>
<label for="Convênio">Convênio</label>
<input  type="radio" name="pagamento" id="Convênio"/>

<h2>Convênio</h2>
<label for="Bradesco">Bradesco</label>
<input  type="radio" name="convenio" id="Bradesco"/>
<label for="Unimed">Unimed</label>
<input  type="radio" name="convenio" id="Unimed"/> <br />


<input type="number" placeholder='Número da Carteirinha'/>

<h2>Pagemento</h2>

<figure>
    {/* <img src="" alt="Descrição da imagem"> */}
    <figcaption>Legenda ou descrição alternativa da imagem.</figcaption>
</figure>





</main>
)

}

export default Agendamento;