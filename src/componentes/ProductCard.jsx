// Estrutura:

// Crie um componente ProductCard que recebe as seguintes props: 
// name → nome do produto
// price → preço do produto
// description → descrição curta do produto

// Ele deve exibir um card simples com essas informações.

// No App.js, crie um array de objetos representando os produtos e use o método .map() para renderizar vários ProductCard, passando as props de cada produto.


function ProductCard(props) {
    return (
        <div style={styles.card} className="product-card">
            <h2>{props.name}</h2>
            <p style={styles.price}>Preço: R$ {props.price.toFixed(2)}</p>
            <p style={styles.description}>{props.description}</p>
        </div>
    );
}

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        margin: '10px',
    },
    price: {
        fontSize: '18px',
        color: '#333',
    },
    description: {
        fontSize: '14px',
        color: '#555',
    },
};

export default ProductCard;