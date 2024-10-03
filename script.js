let total = 0;
let pedido = [];

function adicionarPedido(nome, preco) {
    pedido.push({ nome, preco });
    atualizarPedido();
}

function atualizarPedido() {
    const ul = document.getElementById('pedido');
    ul.innerHTML = '';
    total = 0;

    pedido.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        ul.appendChild(li);
        total += item.preco;
    });

    document.getElementById('total').textContent = total.toFixed(2);
}

function finalizarPedido() {
    const formaPagamento = document.getElementById('pagamento').value;
    const tipoEntrega = document.querySelector('input[name="entrega"]:checked').value;

    alert(`Pedido finalizado com sucesso!\nTotal: R$ ${total.toFixed(2)}\nPagamento: ${formaPagamento}\nEntrega: ${tipoEntrega}`);
    
    // Resetar pedido e total
    pedido = [];
    atualizarPedido();
}

function exibirAba(aba) {
    const abas = document.querySelectorAll('.aba');
    abas.forEach(function(element) {
        element.style.display = 'none';
    });

    document.getElementById(aba).style.display = 'flex';
}

// Exibir a aba de lanches ao carregar a página
document.addEventListener("DOMContentLoaded", function() {
    exibirAba('lanches');
});
