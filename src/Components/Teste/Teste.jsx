import React, { useState } from 'react';

function App() {
  // Estado para controlar se o componente deve ser exibido ou não
  const [showComponent, setShowComponent] = useState(false);

  // Função que será chamada quando o botão for clicado
  const handleClick = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {showComponent ? 'Esconder Componente' : 'Mostrar Componente'}
      </button>
      {showComponent && <MyComponent />}
    </div>
  );
}

function MyComponent() {
  return (
    <div>
      <h1>Este é o componente renderizado condicionalmente</h1>
      <p>Conteúdo do componente...</p>
    </div>
  );
}

export default App;