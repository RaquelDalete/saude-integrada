import React from 'react'
import Calendario from '../Img/calendario.png'
import * as S from '../Agendamento/StyleAgendamento.jsx'

function Agendamento(){
return(
<main>

<h2>Agendamento</h2>
<S.Img src={Calendario} alt="calendario" />

<S.Div>
<S.H2>Pediatras</S.H2>
<S.H3>Especialistas</S.H3>
<label for="Dra Débora">Dra Débora</label>
<input  type="radio" name="especialistas" id="Dra Débora"/>
<label for="Dra Lorrayne">Dra Lorrayne</label>
<input  type="radio" name="especialistas " id="Dra Lorrayne"/>
<label for="Dra Grazi">Dra Grazi</label>
<input  type="radio" name="especialistas" id="Dra Grazi"/>


<S.H3>Hora</S.H3>
<label for="12hr">12:00</label>
<input  type="radio" name="hora" id="12hr"/>
<label for="14hr">14:00</label>
<input  type="radio" name="hora" id="14hr"/>
<label for="16hr">16:00</label>
<input  type="radio" name="hora" id="16hr"/>

<S.Button>Enviar</S.Button>
</S.Div>

<S.Div>
<S.H2>Clínico Geral</S.H2>
<S.H3>Especialistas</S.H3>
<label for="Dra Danielle">Dra Danielle</label>
<input  type="radio" name="especialistas" id="Dra Danielle"/>
<label for="Dra Raquel">Dra Raquel</label>
<input  type="radio" name="especialistas " id="Dra Raquel"/>
<label for="Dra Karynne">Dra Grazi</label>
<input  type="radio" name="especialistas" id="Dra Karynne"/>


<S.H3>Hora</S.H3>
<label for="12hr">12:00</label>
<input  type="radio" name="hora" id="12hr"/>
<label for="14hr">14:00</label>
<input  type="radio" name="hora" id="14hr"/>
<label for="16hr">16:00</label>
<input  type="radio" name="hora" id="16hr"/>

<S.Button>Enviar</S.Button>
</S.Div>


<S.Div>
<S.H2>Formas de Pagamento</S.H2>
<S.H3>Valor da consulta R$800,00</S.H3>

<label for="Particular">Particular</label>
<input  type="radio" name="pagamento" id="Particular"/>
<label for="Convênio">Convênio</label>
<input  type="radio" name="pagamento" id="Convênio"/>

<S.H2>Convênio</S.H2>
<label for="Bradesco">Bradesco</label>
<input  type="radio" name="convenio" id="Bradesco"/>
<label for="Unimed">Unimed</label>
<input  type="radio" name="convenio" id="Unimed"/> <br />


<input type="number" placeholder='Número da Carteirinha'/>

</S.Div>

<div>
<S.H2>Pagemento</S.H2>

<figure>
    {/* <img src="" alt="Descrição da imagem"> */}
    <figcaption>Cartão de Crédito</figcaption>
</figure>

<figure>
    {/* <img src="" alt="Descrição da imagem"> */}
    <figcaption>Cartão de Crédito</figcaption>
</figure>
</div>





</main>
)

}

export default Agendamento;