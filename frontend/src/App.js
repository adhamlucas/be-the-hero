import React from 'react';
import './global.css';

import Routes from './routes';


//JSX, quando o html está dentro do JavaScript
//live reload é o p rocesso de carregamento de alterações automáticas do site
//Componente é um código que isola algo quoda 
// toda vez que um estado é alterado, as views onde ele está são atualziados
// Em react nunca podemos alterar o valor de um estado de forma direta, temos que sobrepor
//  const [counter, setCounter] = useState(0); useSate retorna o valor e uma função que alterar esse estado
    // Array[valor, funcaoDeAtualizacao]


function App() {
    return(
        <Routes />
    );
}

export default App;