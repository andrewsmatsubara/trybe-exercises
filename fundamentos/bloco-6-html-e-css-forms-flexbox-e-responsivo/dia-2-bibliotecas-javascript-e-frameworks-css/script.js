let estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

let estado = document.querySelector('#estados');

for (let index = 0; index < estados.length; index += 1) {
	let option = document.createElement('option');

	option.innerHTML = estados[index];

	estado.appendChild(option);
}

$('.datepicker').pickadate()