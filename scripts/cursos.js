function acrescenta(button) {
  let input = button.previousElementSibling;
  let quantidade = parseInt(input.value);
  input.value = quantidade + 1;
  updateTotal(input);

  updateCheckout();
}

function decrementa(button) {
  let input = button.nextElementSibling;
  let quantidade = parseInt(input.value);
  if (quantidade > 0) {
    input.value = quantidade - 1;
    updateTotal(input);

    updateCheckout();
  }
}

function updateTotal(input) {
  let quantidade = parseInt(input.value);
  let preco = 10;
  let total = quantidade * preco;
  let totalSpan = input.parentElement.nextElementSibling.querySelector("span");
  totalSpan.textContent = total;
}

function updateCheckout() {
  let totalProdutos = 0;
  let total1 = parseInt(document.getElementById("total1").textContent);
  let total2 = parseInt(document.getElementById("total2").textContent);
  let total3 = parseInt(document.getElementById("total3").textContent);
  totalProdutos = total1 + total2 + total3;

  let quantidadeProdutos = 0;
  let quantidade1 = parseInt(document.getElementById("quantidade1").value);
  let quantidade2 = parseInt(document.getElementById("quantidade2").value);
  let quantidade3 = parseInt(document.getElementById("quantidade3").value);
  quantidadeProdutos = quantidade1 + quantidade2 + quantidade3;

  document.getElementById("quantidadeProdutos").textContent =
    quantidadeProdutos;
  document.getElementById("valorAPagar").textContent = totalProdutos;
}

// Chamada inicial para atualizar o checkout
updateCheckout();
