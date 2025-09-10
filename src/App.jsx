import './App.css';
// import Conteudo from './componentes/Conteudo';
import Card from './componentes/Card';
import Tasks from './componentes/Tasks';
import ProductCard from './componentes/ProductCard';

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
// function App() {
//   return (
//     <div className="App">
//       <Tasks
//         titulo="Atv. Exercicio Componente"
//         responsavel="Lailson Herondino"
//         concluida={false}
//       />
//       <Tasks
//         titulo="Atv. Componentes + Props"
//         responsavel="Lailson Herondino"
//         concluida={true}
//       />
//       <Tasks
//         titulo="Revisar Atv 01"
//         responsavel="Lailson Herondino"
//         concluida={false}
//         />
//     </div>
//   );
// }

// UNI 01 - Atv. Componentes + Props + Map
function App() {
  const produtos = [
    {
      name: 'Camiseta',
      price: 49.99,
      description: 'Camiseta de algodão confortável e estilosa.',
    },
    {
      name: 'Calça Jeans',
      price: 89.99,
      description: 'Calça jeans clássica com ótimo caimento.',
    },
    {
      name: 'Tênis Esportivo',
      price: 129.99,
      description: 'Tênis ideal para atividades físicas e uso diário.',
    },
  ];

  return (
    <div className="App">
      {produtos.map((produto, index) => (
        <ProductCard
          key={index}
          name={produto.name}
          price={produto.price}
          description={produto.description}
        />
      ))}
    </div>
  );
}

export default App;