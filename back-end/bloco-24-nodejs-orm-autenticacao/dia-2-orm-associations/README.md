#ORM - Associations

Neste dia, aprendemos a diferença entre manipulação dos models segundo os diferentes relacionamentos entre tabelas do banco de dados, sendo eles 1:1, N:1/1:N e N:N.

Dentro das nossas migrations, podemos utilizar:
##- references.models:
Indica qual tabela nossa Foreign Key está referenciando.
##- references.key:
Indica qual coluna da tabela estrangeira deve ser utilizada para nossa foreign key.
##- onUpdate e onDelete:
Configura o que deve acontecer ao atualizar ou excluir um usuário.

Os métodos de criação de associações que o sequelize disponibiliza são:
- hasOne 
- belongsTo
- hasMany
- belongsToMany 

Os dois métodos de utilização dos relacionamentos que aprendemos nesta seção:
- EagerLoading: Esse método carrega todos os dados na mesma request.
- LazyLoading: Esse método consiste, basicamente, em não especificar uma propriedade 'includes' no momento de realizar a query no banco.

##Transações
Uma transação simboliza uma unidade de trabalho indivisível executada do banco de dados de forma confiável e independente de outras transações. Em outras palavras, uma transação de banco de dados relacional pode conter um ou mais comandos SQL, que por sua vez deverá ser executada por completo para ter sucesso, ou seja, caso algum comando dentro do bloco dê errado, a transação falha.
