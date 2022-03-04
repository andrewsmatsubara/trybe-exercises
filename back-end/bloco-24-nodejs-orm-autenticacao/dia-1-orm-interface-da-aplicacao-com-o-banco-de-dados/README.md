# ORM - Interface da aplicação com o banco de dados
___
## Sequelize

As vantagens de se utilizar o Sequelize é que podemos evitar a criação de queries SQL para criar as tabelas em vez de um script SQL separado. Com isso, o nosso código se torna mais legível, extensível e de fácil manutenção. Além disso, por meio do mapeamento por objetos relacionais ( Active Record ), é possível criar as relações e associações entre as tabelas com o próprio JavaScript. E ainda, é possível migrar o nosso database para outro banco de dados sem precisar reescrever todo o código.
___
## CheatSheet de Sequelize

É possível encontrar o processo de configuração do Sequelize e da construção de migrations e seeders, além de suas execuções através desse [link](https://github.com/tryber/Trybe-CheatSheets/tree/master/backend/sequelize/setup)!
___
## Boas práticas e padrões de projeto

É importante que usemos as variáveis de ambiente para melhorarmos a segurança de nossos dados de acesso ao banco de dados através do pacote *dotenv*. Para instalar este pacote só é preciso que rodemos o comando **npm i dotenv**. Com isso, configuramos nossas variáveis de ambiente em um arquivo .env e trocamos as informações dentro de nossos arquivos de projeto! Além disso, é importante lembrar que precisamos alterar o nome do arquivo **config.json** para **config.js** e alterar o mesmo dentro do arquivo index.js da pasta models! 


