import './App.css';
// import Conteudo from './componentes/Conteudo';
import Card from './componentes/Card';
import Tasks from './componentes/Tasks';

// UNI 01 - Exercício Componentes
// function App() {
//   return (
//     <div className="App">
//       <Card
//         titulo="Título do Card"
//         descricao="Descrição do Card"
//       />
//       <Card
//       titulo="Título do Card 2"
//       descricao="Descrição do Card 2"
//       />

//     </div>
//   );
// }

//UNI 01 - Atv. Componentes + Props
function App() {
  return (
    <div className="App">
      <Tasks
        titulo="Atv. Exercicio Componente"
        responsavel="Lailson Herondino"
        concluida={false}
      />
      <Tasks
        titulo="Atv. Componentes + Props"
        responsavel="Lailson Herondino"
        concluida={true}
      />
      <Tasks
        titulo="Revisar Atv 01"
        responsavel="Lailson Herondino"
        concluida={false}
        />
    </div>
  );
}

export default App;