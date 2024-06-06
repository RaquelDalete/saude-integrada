import React from 'react';
import Navegacao from './Components/Navegacao/Navegacao.jsx';
import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: "Inter", sans-serif;
}
`
function App(){
return(
<>
<Navegacao/>
<GlobalStyle/>
</>
)

};

export default App;