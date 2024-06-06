import React from 'react';
import Agendamento from '../Agendamento/Agendamento.jsx'
import Cadastro from '../Carregamento/Carregamento.jsx';
import Carregamento from '../Carregamento/Carregamento.jsx';
import Login from '../Login/Login.jsx';
import * as S from '../Navegacao/StyleNavegacao.jsx'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Navegacao(){
return(
    <header>
        <BrowserRouter>
<nav>
    <ul>
        <li><Link to="/">Agendamento</Link></li>
        <li><Link to="/Cadastro">Cadatro</Link></li>
        <li><Link to="/Carregamento">Carregamento</Link> </li>
        <li><Link to="/Login">Login</Link></li>
        <li></li>
    </ul>
</nav>

<Routes>
<Route path="/" element={<Agendamento />} />
<Route path="Cadastro" element={<Cadastro />} />
<Route path="Carregamento" element={<Carregamento />} />
<Route path="Login" element={<Login />} />


 </Routes>
</BrowserRouter>
</header>

)


}

export default Navegacao;