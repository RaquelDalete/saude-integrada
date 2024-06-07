import React from 'react';
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
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Cadastro">Cadastro</Link></li>
        <li><Link to="/Agendamento">Agendamento</Link></li>
        <li><Link to="/Ajuda">Ajuda</Link></li>
        <li><Link to="/Teste">Teste</Link></li>
        <li></li>
    </S.Lista>
</nav>

<Routes>
<Route path="/" element={<Agendamento />} />
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