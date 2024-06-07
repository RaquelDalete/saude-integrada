import React from 'react'
import * as S from '../Login/StyleLogin.jsx'
import Logo from '../Img/log.png'

function Login(){
return(
<S.Main>
<S.Img src={Logo} alt="logo de um coraçao" />
<S.Div>
<S.H1>Login</S.H1>

<S.Label for="text" > Email:</S.Label>
<input id="Nome" type="text" placeholder='Digite seu email'/>

<S.Label for="senha" > Senha:</S.Label>
<input id="senha" type="password" placeholder='Digite sua Senha'/>

<S.H2>Esqueceu a Senha?</S.H2>


<S.Button>Acessar</S.Button>

<S.H2>Não possue uma conta? Cadastre-se</S.H2>

</S.Div>

</S.Main>

)

}

export default Login;