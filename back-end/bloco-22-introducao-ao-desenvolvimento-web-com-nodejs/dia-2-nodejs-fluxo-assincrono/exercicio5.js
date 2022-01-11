const fs = require('fs').promises;

const funcao = async () => {
  const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']
  const files = array.map((value, index) => fs.writeFile((`./file${index + 1}.txt`), value))

  const filenames = [
    'file1.txt',
    'file2.txt',
    'file3.txt',
    'file4.txt',
    'file5.txt'
  ]

  const fileContents = await Promise.all(
    filenames.map((value) => fs.readFile(value, 'utf-8'))
  );

  const newFileContent = fileContents.join(' ');

  await fs.writeFile('./fileAll.txt', newFileContent);
}

funcao();
