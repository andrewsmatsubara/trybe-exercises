# JWT - (JSON Web Token)

Nesta seção, aprendemos primeiramente que o JWT (JSON Web Token) é um token gerado a partir de dados "pessoais" que pode ser trafegado pela internet ao fazer requisições para APIs e afins.

Diferenciamos também o conceito entre autenticação e autorização:

## Autenticação:
É usada para atestar que alguém é quem diz ser, verificando sua identidade, comumente feita por meio de informações confidenciais como email e senha.
## Autorização:
Verifica as permissões de uma pessoa para acessar ou executar determinadas operações.

## HMAC

O HMAC é um algoritmo para gerar um MAC (código de autenticação de mensagem) criptografado através de algum algoritmo de hash (algoritmos que codificam mensagens), como md5 , sha1 ou sha256 , a partir de uma chave secreta (uma senha) e de uma mensagem qualquer.

Podemos dividir o JWT em 3 partes:

## Header:
Contém duas propriedades: o tipo do token, que é JWT, e o tipo do algoritmo de hash.

## Payload:
Contém os "dados" que são declarações sobre uma entidade (geralmente, o usuário).

## Signature:
Para gerar a assinatura, você deve usar o header e o payload codificados em base64, usando o algoritmo definido no header.
