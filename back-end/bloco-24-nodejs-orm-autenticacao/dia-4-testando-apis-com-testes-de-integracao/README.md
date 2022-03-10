# Testando APIs com Testes de Integração

Neste dia, resgatamos algumas informações que tangem o desenvolvimento dirigido a testes. Porém alguns conceitos novos foram inseridos nesta seção, como os são as diferenças entre o teste de integração e o teste unitário.

## Testes unitários:
Podemos testar cada unidade do nosso código de maneira individual.

## Testes de integração:
Servem para verificar se a comunicação entre os componentes de um sistema estão ocorrendo conforme o esperado.

## Cobertura de testes:
Para a cobertura de testes, vamos utilizar uma ferramenta chamada nyc para gerar relatórios dos testes no mocha. Esses relatórios checam, se para um escopo de arquivos definidos (aqui podemos pensar o conteúdo da nossa aplicação, excluindo bibliotecas e arquivos de configuração), os seus testes são capazes de rodar todas as linhas dos arquivos relacionados, o que gera uma porcentagem total de cobertura para aquele escopo.

De forma geral, suites de testes geram relatórios de cobertura segundo alguns critérios básicos, os mais relevantes para nosso contexto são:

## File (Arquivo):
Retorna a estrutura do escopo analisado, cada linha é referente a pasta ou arquivo específico.

## File (Arquivo):
Retorna a estrutura do escopo analisado, cada linha é referente a pasta ou arquivo específico.

## Branch (Ramo):
Retorna o percentual de situações de ramificação cobertos.

## Funcs (Functions/Funções):
Retorna o percentual de funções executadas nos arquivos.

## Lines (Linhas):
Retorna o percentual total de linhas executadas nos arquivos.
