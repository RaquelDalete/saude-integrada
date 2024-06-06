import React from 'react';
import Navegacao from './Components/Navegacao/Navegacao.jsx';
import {createGlobalStyle} from 'styled-components'


const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
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