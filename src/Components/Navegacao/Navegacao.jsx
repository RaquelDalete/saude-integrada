import React from 'react';
import Carregamento from '../Carregamento/Carregamento.jsx';
import Agendamento from '../Agendamento/Agendamento.jsx'
import Cadastro from '../Cadastro/Cadastro.jsx';
import Login from '../Login/Login.jsx';
import Ajuda from '../Ajuda/Ajuda.jsx'
import Teste from '../Teste/Teste.jsx'
import * as S from '../Navegacao/StyleNavegacao.jsx'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Navegacao(){
return(
    <S.Header>
        <BrowserRouter>
<nav>
    <S.Lista>
        <S.Li><Link to="/Carregamento">Carregamento</Link></S.Li>
        <S.Li><Link to="/Login">Login</Link></S.Li>
        <S.Li><Link to="/Cadastro">Cadastro</Link></S.Li>
        <S.Li><Link to="/Agendamento">Agendamento</Link></S.Li>
        <S.Li><Link to="/Ajuda">Ajuda</Link></S.Li>
        <S.Li><Link to="/Teste">Teste</Link></S.Li>
       
    </S.Lista>
</nav>

<Routes>
<Route path="/" element={<Carregamento />} />
<Route path="Cadastro" element={<Cadastro />} />
<Route path="Login" element={<Login />} />
<Route path="Agendamento" element={<Agendamento />} />
<Route path="Ajuda" element={<Ajuda />} />
<Route path="Teste" element={<Teste />} />

 </Routes>
</BrowserRouter>
</S.Header>

)


}

export default Navegacao;