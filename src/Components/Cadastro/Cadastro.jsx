import React from 'react'
import * as S from '../Cadastro/StyleCadastro.jsx'

function Cadastro(){
return(
<S.Main>
    <S.H2>Cadastro</S.H2>
    <S.Div>
<S.Input type="text" placeholder='Nome Completo' />
<S.Input type="date"  placeholder='Data de Nascimento'/>
<S.Input type="number" placeholder='CPF'/>
<S.Input type="text"  placeholder='Sexo'/>
<S.Input type="text"  placeholder='Gênero'/>
<S.Input type="text"  placeholder='Endereço'/>
<S.Input type="number"  placeholder='Telefone'/>
<S.Input type="text"  placeholder='Email'/>

</S.Div>

<button>Enviar</button>



</S.Main>

)

}

export default Cadastro;