import React from 'react';
import Agendamento from '../Agendamento/Agendamento.jsx'
import Cadastro from '../Cadastro/Cadastro.jsx';
import Carregamento from '../Carregamento/Carregamento.jsx';
import Login from '../Login/Login.jsx';
import Ajuda from '../Ajuda/Ajuda.jsx'
import * as S from '../Navegacao/StyleNavegacao.jsx'
// import Agenda from '../Img/agenda.png'
// import Cadastro from '../Img/cadastro.png'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Navegacao(){
return(
    <S.Header>
        <BrowserRouter>
<nav>
    <S.Lista>
        <li><Link to="/Login">Login</Link></li>
        {/* <img src={Agenda} alt=" agenda" /> */}
        <li><Link to="/">Agendamento</Link></li>
        {/* <img src={Cadastro} alt=" cadastro" /> */}
        <li><Link to="/Cadastro">Cadastro</Link></li>
        <li><Link to="/Carregamento">Carregamento</Link> </li>
        <li><Link to="/Especialistas">Especialistas</Link> </li>
        <li><Link to="/Ajuda">Ajuda</Link></li>
        <li></li>
    </S.Lista>
</nav>

<Routes>
<Route path="/" element={<Agendamento />} />
<Route path="Cadastro" element={<Cadastro />} />
<Route path="Carregamento" element={<Carregamento />} />
<Route path="Login" element={<Login />} />


 </Routes>
</BrowserRouter>
</S.Header>

)


}

export default Navegacao;