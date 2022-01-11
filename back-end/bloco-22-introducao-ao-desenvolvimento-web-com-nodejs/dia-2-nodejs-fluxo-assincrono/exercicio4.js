// const simpsons = async () => {
//   const fs = require('fs').promises;
//   const file = await fs.readFile('./simpsons.json', 'utf-8');
//   const json = await JSON.parse(file);
//   const map = await json.map(({id, name}) => `${id} - ${name}`);

//   return map;
// }

// simpsons();

// const simpsons2 = async (id) => {
//   const file = await fs.readFile('./simpsons.json', 'utf-8');
//   const json = await JSON.parse(file);

//   const simpson = await json.find((simpsonId) => parseInt(simpsonId.id) === id);
  
//   if (!simpson) {
//     throw new Error('id não encontrado');
//   }
//   return simpson;
// }

// simpsons2(1);

// const simpsons3 = async () => {
//   const file = await fs.readFile('./simpsons.json', 'utf-8');
//   const json = await JSON.parse(file);
//   const deleted = await json.filter((simpson) => simpson.id !== '6' && simpson.id !== '10');
//   await fs.writeFile('./simpsons.json', JSON.stringify(deleted));
  
//   console.log(deleted);
// }

// simpsons3();

const simpsons4 = async () => {
  const fs = require('fs').promises;
  const file = await fs.readFile('./simpsons.json', 'utf-8');
  const json = await JSON.parse(file);
  const deleted = await json.slice(0, 4);

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(deleted)).then(() => {
   console.log('Arquivo escrito com sucesso!')
 }).catch((err) => {
   console.error(`Erro ao escrever o arquivo: ${err.message}`);
 });
}

simpsons4();

const simpsons5 = async () => {
  const fs = require('fs').promises;
  const file = await fs.readFile('./simpsons.json', 'utf-8');
  const json = await JSON.parse(file);
  const nelson = await json.find((simpson) => simpson.name === 'Nelson Muntz');
  const newFile = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const newJson = await JSON.parse(newFile);

  newJson.push(nelson);

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newJson));
}

simpsons5();

const simpsons6 = async () => {
  await simpsons5();
  const fs = require('fs').promises;
  const oldFile = await fs.readFile('./simpsons.json', 'utf-8');
  const oldJson = await JSON.parse(oldFile);
  const file = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const json = await JSON.parse(file);
  const maggie = await oldJson.find((simpson) => simpson.name === 'Maggie Simpson');
  
  console.log(maggie);

  const newJson = json.slice(0, 4);

  newJson.push(maggie);
  
  console.log(newJson);

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(newJson));
}

simpsons6();