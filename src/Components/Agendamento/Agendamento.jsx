import React from 'react'
import Calendario from '../Img/calendario.png'
import * as S from '../Agendamento/StyleAgendamento.jsx'
// import cartaocredito from './img/cartaocredito.png'
// import cartaodebito from './img/cartaodebito.png'
// import pix from './img/pix.png'
// import qr from './img/qr.png'



function Agendamento(){


return(
<main>

<h2>Agendamento</h2>
<S.Img src={Calendario} alt="calendario" />

<S.Section>
<S.Div>
<S.H2>Pediatras</S.H2>
<S.H3>Especialistas</S.H3>
<label for="Dra Débora"><input  type="radio" name="especialistas" id="Dra Débora"/>Dra Débora</label>
<label for="Dra Lorrayne"><input  type="radio" name="especialistas " id="Dra Lorrayne"/> Dra Lorrayne</label>
<label for="Dra Grazi"> <input  type="radio" name="especialistas" id="Dra Grazi"/>Dra Grazi</label>



<S.H3>Hora</S.H3>
<label for="12hr"> <input  type="radio" name="hora" id="12hr"/>12:00</label>
<label for="14hr"><input  type="radio" name="hora" id="14hr"/>14:00</label>
<label for="16hr"><input  type="radio" name="hora" id="16hr"/>16:00</label>


<S.Button>Enviar</S.Button>
</S.Div>

<S.Div>
<S.H2>Clínico Geral</S.H2>
<S.H3>Especialistas</S.H3>
<label for="Dra Danielle" >Dra Danielle <input  type="radio" name="especialistas" id="Dra Danielle"/></label>

<label for="Dra Raquel">Dra Raquel <input  type="radio" name="especialistas " id="Dra Raquel"/></label>

<label for="Dra Karynne">Dra Grazi <input  type="radio" name="especialistas" id="Dra Karynne"/></label>



<S.H3>Hora</S.H3>
<label for="12hr">12:00 <input  type="radio" name="hora" id="12hr"/></label>

<label for="14hr">14:00<input  type="radio" name="hora" id="14hr"/></label>

<label for="16hr">16:00 <input  type="radio" name="hora" id="16hr"/></label>


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


<S.DivE>
<S.H2>Pagamento</S.H2>

<figure>
    {/* <img src="" alt="Descrição da imagem"> */}
    <figcaption>Cartão de Crédito</figcaption>
</figure>

<figure>
    {/* <img src="" alt="Descrição da imagem"> */}
    <figcaption>Cartão de Dédito</figcaption>
</figure>

<input type="number"  placeholder='Número do Cartão'/>

<S.H2>Pix</S.H2>
</S.DivE>

<S.DivE>
    <p>Desculpe, não foi possível concluir sua solicitação. Entre em contato com o nosso SAC para obter ajuda.
    essa </p>
</S.DivE>

<S.DivP>
<S.P>Pagamento Realizado com sucesso</S.P>

</S.DivP>

<S.DivE>
    <S.H2>Consulta Agendada com Sucesso</S.H2>
    <S.H2>Data:20/08/2024 </S.H2>
    <S.H2>14hrs</S.H2>
    <S.H2>Dra Débora</S.H2>
</S.DivE>

<S.DivE>
    <S.H2>Link da Chamada:https: //www.videochamada.com.br/search?q=sol&oq=sol&gs_lcrp=Eg</S.H2>

</S.DivE>

<S.DivE>
    {/* <img src="" alt="" /> */}
    <button>Exames</button>
</S.DivE>

<S.DivE>
    <S.H2>Deixe sua sugestão</S.H2>
    <input type="text" />
</S.DivE>

</S.Section>

  



</main>
)

}

export default Agendamento;