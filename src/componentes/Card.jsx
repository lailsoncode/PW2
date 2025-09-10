// import './Card.css'; // Opcional: Adicione estilos personalizados para o card

function Card (props) {
    return (
        <div style={styles.card} className="card">
            <h3>{props.titulo}</h3>
            <p style={styles.description}>{props.descricao}</p>
        </div>
    );
};


const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        margin: '10px',
    },
    title: {
        fontSize: '18px',
        margin: '0 0 8px 0',
    },
    description: {
        fontSize: '14px',
        color: '#555',
    },
};

export default Card;