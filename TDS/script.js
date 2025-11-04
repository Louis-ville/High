function mostrarReceita(idCoquetel) {
    const detalhes = document.getElementById(`receita-${idCoquetel}`);
    detalhes.style.display = 'block'; 
}

function esconderReceita(idCoquetel) {
    const detalhes = document.getElementById(`receita-${idCoquetel}`);
    detalhes.style.display = 'none';
}



const configurarEnvioFormulario = () => {
    // 1. Encontra o formulário pelo ID (Certifique-se que seu <form> tenha id="form-contato")
    const formulario = document.getElementById('form-contato');
    
    if (formulario) {
        // 2. Adiciona o Event Listener para o evento 'submit'
        formulario.addEventListener('submit', (evento) => {
            // Impedir que a página recarregue (que é o que o formulário faria normalmente)
            evento.preventDefault(); 

            // 3. Encontra o elemento de alerta
            const alerta = document.getElementById('alerta-envio');

            // 4. Torna o alerta visível
            alerta.style.display = 'block';

            // 5. Limpar o formulário após a "submissão"
            formulario.reset();

            // 6. Esconder o alerta após 5 segundos
            setTimeout(() => {
                alerta.style.display = 'none';
            }, 5000);
        });
    }
};

// Chamada da função para configurar o evento quando a página carregar
window.onload = configurarEnvioFormulario;