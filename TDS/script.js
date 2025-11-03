function mostrarReceita(idCoquetel) {
    const detalhes = document.getElementById(`receita-${idCoquetel}`);
    detalhes.style.display = 'block'; 
}

function esconderReceita(idCoquetel) {
    const detalhes = document.getElementById(`receita-${idCoquetel}`);
    detalhes.style.display = 'none';
}

