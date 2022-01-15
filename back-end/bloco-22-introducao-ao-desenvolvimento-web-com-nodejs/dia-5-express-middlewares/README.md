## Express - Middlewares

Neste dia, aprendemos sobre as Middlewares, conceito que já utilizávamos, porém com o nome de callback, ou seja, uma função passada para um rota.

Parâmetros que podem ser passados nas Middlewares:
- req
- res
- next
- err

Estudamos também a criação de Middlewares globais a partir da função app.use(), que funcionam como uma função Middleware genérica para todas as requisições abaixo dela.

Outro ponto importante aprendido no dia de hoje é a passagem de valores do objeto req para os próximos Middlewares caso a função next seja chamado.

Além disso, passamos pelo método Router que organiza e agrupa várias rotas em um mesmo lugar para se conectar novamente ao aplicativo central.

Por último, estudamos a respeito do pacote express-rescue que nos ajuda com a tarefa de garantir que os erros sempre sejam tratados sem precisarmos fazer o uso do bloco try/catch.
