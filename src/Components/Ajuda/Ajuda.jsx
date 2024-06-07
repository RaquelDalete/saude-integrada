import React from 'react'
import * as S from '../Ajuda/StyleAjuda.jsx'

function Ajuda(){
return(
    <S.MainAjuda>
        <S.Div>
     <S.H2>Nós estamos aqui para ajudar</S.H2>
<S.Lista>
    <li>1- Como fazer o login?
     Acesse com email e senha e clique em acessar. Caso tenha esquecido a senha utilize o campo “Esqueci minha senha!”
     Para ter acesso ao site, primeiro você deve fazer seu cadastro no campo “Ainda não possui um conta? Cadastre-se!” </li>
    <li>2- Nunca entrei no site , o que devo fazer primeiro?</li>
    <li>3- Onde eu vejo minhas consultas?
    Na guia agendamentos, clique em histórico e aparecerá todas as suas consultas, mas não se preocupe se tiver perdido as informações da sua consulta, pois ao término do agendamento nós enviamos o agendamento e as instruções.</li>
    <li>4- Quais são as formas de pagamento?
    Serão aceitos Pix, cartões de crédito e débito.</li>
    <li>5- O que preciso para ser atendido por video?
    Uma camera com microfone e acesso a um email.</li>
</S.Lista>
</S.Div>

</S.MainAjuda>
)

}

export default Ajuda;