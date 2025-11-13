function validarFormulario() {
  const nome = document.getElementById('nome').value;
  const quantidade = document.getElementById('quantidade').value;
  const valor = document.getElementById('valor').value;

  if (!nome || quantidade <= 0 || valor <= 0) {
    alert('Por favor, preencha todos os campos corretamente.');
    return false;
  }
  return true;
}
