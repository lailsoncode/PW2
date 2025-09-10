function Tasks (props) {
    return (
        <div style={styles.task} className="task">
            <h3>{props.titulo}</h3>
            <p style={styles.responsible}>Responsável: {props.responsavel}</p>
            <p style={styles.status}>Status: {props.concluida ? 'Concluída' : 'Pendente'}</p>
            <button style={styles.button} onClick={() => addTarefa(props.titulo)}>Marcar como concluída</button>
        </div>
    );
}

const styles = {
    task: {
        border: '1px solid #000',
        borderRadius: '8px',
        padding: '16px',
        maxWidth: '300px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        margin: '10px',
    },
    responsible: {
        fontSize: '14px',
        color: '#555',
    },
    status: {
        fontSize: '14px',
        color: '#555',
    },
    button: {
        marginTop: '10px',
        padding: '8px 12px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

function addTarefa(titulo) {
    if (Tasks.concluida === "concluida") {
        alert(`Tarefa "${titulo}" Concluída!`);
    }
    else {
        alert(`Tarefa "${titulo}" já está concluída!`);
    }
}

export default Tasks;