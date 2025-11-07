const mapaDestilados = [
    { destilado: "Tequila", coqueteis: ["Margarita", "Tequila Sunrise"] },
    { destilado: "Rum", coqueteis: ["Mojito", "Cuba Libre"] },
    { destilado: "Gin", coqueteis: ["Martini"] },
    { destilado: "Vodka", coqueteis: ["Cosmopolitan"]},
    { destilado: "Whiskey", coqueteis: ["Old Fashioned"] }
   
];

function sugerirCoquetel() {
    const select = document.getElementById('selectDestilado');
    const resultadoDiv = document.getElementById('resultado-sugestao');
    const destiladoEscolhido = select.value; 

    
    const info = mapaDestilados.find(item => item.destilado === destiladoEscolhido);

    // Limpa o conteúdo anterior
    resultadoDiv.innerHTML = "";

    if (info && info.coqueteis.length > 0) {
        // Manipulação de DOM VISÍVEL
        
        // Constrói uma lista HTML (<ul>) a partir do Array de coquetéis
        let listaHTML = '<ul>';
        info.coqueteis.forEach(coquetel => {
            listaHTML += `<li>${coquetel}</li>`;
        });
        listaHTML += '</ul>';

        // Escreve o resultado final no HTML
        resultadoDiv.innerHTML = `
            <p class="h5 text-primary">Coquetéis que utilizam ${info.destilado}:</p>
            ${listaHTML}
        `;
    } else {
        // Mensagem padrão ou se a opção vazia for selecionada
        resultadoDiv.innerHTML = `<p class="mb-0">Aguardando sua seleção...</p>`;
    }
}



// Function Expression 
const toggleReceita = function(idCoquetel) {
    const detalhes = document.getElementById(`receita-${idCoquetel}`); 
    
    if (detalhes.style.display === 'none' || detalhes.style.display === '') {
        detalhes.style.display = 'block'; 
    } else {
        detalhes.style.display = 'none';
    }
}; 



/*function mostrarReceita(idCoquetel) {
    const detalhes = document.getElementById(`receita-${idCoquetel}`);
    detalhes.style.display = 'block'; 
}

function esconderReceita(idCoquetel) {
    const detalhes = document.getElementById(`receita-${idCoquetel}`);
    detalhes.style.display = 'none';
}*/



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