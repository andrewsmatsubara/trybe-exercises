/* const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    console.log(`Olá, ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`)
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const newCustomerInfo = {
      name: 'Luiz Silva',
      payment: {
        total: 50
      }
    };
    console.log(`Olá ${newCustomerInfo.name}, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$${newCustomerInfo.payment.total}.`)
  }
  
  orderModifier(order); */

  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const addTurno = (lesson2, turno, valor) => {
    lesson2.turno = valor;
  };

  addTurno(lesson2, 'turno', 'manhã');
  console.log(lesson2);

  const listaKeys = (objeto) => Object.keys(objeto);
  console.log(listaKeys(lesson1));

  const sizeOfObject = (objeto) => Object.keys(objeto).length;
  console.log(sizeOfObject(lesson1));

  const listaValores = (objeto) => Object.values(objeto);
  console.log(listaValores(lesson1));

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  console.log(allLessons);

  const numTotEstudantes = (objeto) => {
    let total = 0;
    const array = Object.keys(objeto);
    for(let i in array){
      total += objeto[array[i]].numeroEstudantes;
    }
    return total;
  }
  console.log(numTotEstudantes(allLessons));

  const valorChave = (objeto, posicao) => Object.values(objeto)[posicao];

  console.log(valorChave(lesson2, 1));

  const verificaPar = (objeto, chave, valor) => {
    const array = Object.entries(objeto);
    let igual = false;
    for(let i in array){
      if(array[i][0] === chave && array[i][1] === valor){
        igual = true;
      }
    }
    return igual;
  }
  console.log(verificaPar(lesson2, 'numeroEstudantes', 20));