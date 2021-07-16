function criaEstado() {
	let estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

	let estado = document.querySelector('#estados');

	for (let index = 0; index < estados.length; index += 1) {
		let option = document.createElement('option');

		option.innerHTML = estados[index];

		estado.appendChild(option);
	}
}

let inputs = {
	name: {
		maxLength: 40,
		required: true
	},
	email: {
		maxLength: 50,
		required: true
	},
	cpf: {
		maxLength: 11,
		required: true
	},
	address: {
		maxLength: 200,
		required: true
	},
	cidade: {
		maxLength: 28,
		required: true
	},
	estados: {
		required: true
	},
	type: {
		required: true
	},
	resumo: {
		maxLength: 1000,
		required: true
	},
	cargo: {
		maxLength: 50,
		required: true
	},
	descricao: {
		maxLength: 500,
		required: true
	},
	date: {
		required: true
	}	
}

function handleSubmit(event) {
	event.preventDefault();
	console.log('xablau');
}

function clearFields() {
	let input = document.querySelectorAll('input');
	let textArea = document.querySelector('textArea');
	let div = document.querySelectorAll('div');

	for (let index = 0; index < input.length; index += 1) {
		let userInput = input[index];
		userInput.value = '';
		textArea.value = '';
	}
}

window.onload = function () {
	criaEstado();

	let button = document.querySelector('#submit');
	let clear = document.querySelector('#clear');

	button.addEventListener('click', handleSubmit);
	clear.addEventListener('click', clearFields);
}

