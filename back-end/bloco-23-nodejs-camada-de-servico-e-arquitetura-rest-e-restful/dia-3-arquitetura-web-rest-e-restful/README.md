## Arquitetura Web - Rest e Restful

Vamos a um conceito básico do dia de hoje: 
- RESTful: Um web service que segue as regras definidas pelo padrão REST
- REST(Representational State Transfer): Um estilo de arquitetura de software que define um conjunto de restriçẽs a serem usadas para a criação de APIs

Para o REST:
- Recursos são abstrações de informações
- Define 6 restrições(constraints) para que a API seja RESTful:
	1. Interface uniforme(Uniform Interface):
		- Endpoints: Nome padronizado dos recursos
		- Tipo de retornos: Content-type(Exemplo: application/json)
		- Verbos HTTP
		- Respostas: Status HTTP(Exemplo: '404')
	2. Arquitetura cliente-servidor: Separação de responsabilidades entre o cliente e o servidor
	3. Sem estado(Stateless):
		- Toda requisição deve conter todas as informações necessárias para a API realizar uma ação(autossuficiente)
		- Transparência: Facilita o trabalho do servidor, pois todas as informações necessárias já estão na requisição
		- Escalabilidade: Servidor pode aloca recursos apenas quando necessário
	4. Cacheable: As respostas dadas pela API devem dizer, explicitamente, se podem ou não ser cacheadas e por quanto tempo(Exemplo: Cache-Control: max-age-=120)
	5. Sistema em camadas(Layered System): Abstrair do cliente as camadas necessárias para responder a uma requisição
	6. Código sob demanda(Code on Demand): Possibilidade de o nosso servidor enviar código ao nosso cliente

