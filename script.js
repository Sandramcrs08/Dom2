window.onload = function() {
    // Método simples para adicionar o título
    var titulo = document.createElement('h1');
    titulo.id = 'titulo';
    titulo.textContent = 'Bem-vindo ao meu site!';
    document.body.appendChild(titulo);

    // Método complexo para adicionar o produto
    var produto = document.createElement('div');

    var nomeProduto = document.createElement('h2');
    nomeProduto.textContent = 'Nome do Produto';
    produto.appendChild(nomeProduto);

    var descricaoProduto = document.createElement('p');
    descricaoProduto.textContent = 'Descricao do Produto';
    produto.appendChild(descricaoProduto);

    var precoProduto = document.createElement('p');
    precoProduto.textContent = 'R$100,00';
    produto.appendChild(precoProduto);

    document.body.appendChild(produto);
}
