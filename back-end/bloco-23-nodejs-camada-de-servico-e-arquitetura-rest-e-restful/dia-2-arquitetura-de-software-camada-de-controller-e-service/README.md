## Arquitetura de software - Camadas controllers e service

Neste dia, aprendemos a refatorar o nosso código a partir da divisão dos trabalhos entre as camadas Model, Service e Controller, de forma a delegar vários dos serviços que estavam centralizados no Model. Além disso, retomamos o conceito de middleware de erro para fazer o tratamento desses em um arquivo separado que pode estar no diretório de nossa escolha(middleware ou controller).

Papéis desempenhados por cada camada:
- Model: Responsável pelo acesso a dados
- Service: Atua nas regras de négocio
- Controller: Recebe requisição API e então consulta o Service. O middleware é o seu principal componente de camada

Módulos novos aprendidos:
- Joi: Utilizamos para descrever o objeto que esperamos receber na requisição  
- dotenv: Deixa o conteúdo do arquivo .env na raiz do projeto acessível via process.env a fim de colocar os as informações de acesso ao banco de dados guardadas em variáveis distintas.
