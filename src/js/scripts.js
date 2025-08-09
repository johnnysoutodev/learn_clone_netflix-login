// scripts.js

const ano = new Date().getFullYear();
const year = document.getElementById("year");
year ? year.innerHTML = `<span>${ano} JSD Technologies. Todos os direitos reservados.</span>` : null;

