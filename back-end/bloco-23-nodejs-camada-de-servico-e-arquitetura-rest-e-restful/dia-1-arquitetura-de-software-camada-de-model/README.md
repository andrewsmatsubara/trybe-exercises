## Arquitetura de software - Camada de Model

Neste dia, aprendemos a estruturar um model para manipular e definir a estrutura dos dados, assim como utilizar uma função escrita pelos próprios desenvolvedores "serialize" que nos permite renomear colunas de uma tabela de snake_case para camelCase.

Comandos aprendidos na aula:
- npm i mysql2: Utilizado para instalar o driver de comunicação entre a aplicação e o banco de dados.
- createPool(): Método que gerencia conexões com o banco de dados e que recebe um objeto composto por {host, user, password, database}.
- execute(): Método que executa uma query do banco de dados.
