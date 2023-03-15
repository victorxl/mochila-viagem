const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");

//array de objetos que serão salvos no localStorage
const itens = JSON.parse(localStorage.getItem("itens")) || []; //JSON.parse serve pra transformar a agora string 'itens' de texto para array

itens.forEach( (elemento) => {
    console.log(elemento.nome, elemento.quantidade);
})


//captura informações do formulário
form.addEventListener("submit", (evento)=>{
    evento.preventDefault();//para o comportamento padrão do evento de mandar informações direto para a página

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    criaElemento(nome.value, quantidade.value);

    //esvaziar o formulário depois de criar o elemento
    nome.value = "";
    quantidade.value = "";

});


//cria um elemento através do javascript, a partir do momento em que ele recebe os dados, os dados são criados.

function criaElemento(nome, quantidade){

    //criar novo item li
    //<li class="item"><strong>7</strong>Camisas</li>

    const novoItem = document.createElement('li');
    novoItem.classList.add("item");

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    //appendChild => insere um elemento criado dentro do outro, nesse caso, colocar a tag strong dentro do li
    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    //insere o novoItem como appendChild na lista de itens
    lista.appendChild(novoItem);


    //cria o objeto itemAtual para inserir no localStorage
    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade

    }

    //insere o item atual no array usando a função push
    itens.push(itemAtual);

    //adicionar ao localStorage, mas o localStorage só salve texto, então precisamos transformar os itens em texto usando o JSON Stringfy
    localStorage.setItem("itens", JSON.stringify(itens));


}; 