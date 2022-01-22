
# Início

Repositório destinado à resolução do desafio proposto pelo Louison da [Busca Milhas](https://buscamilhas.com/).

## Informações Pessoais
Email principal: leonardosclopes@gmail.com

Email secundário: leonardocristian@ufpi.edu.br

Telefone: +55 (99) 9 8234-9099

### Minhas redes sociais

[![Linkedin Badge](https://img.shields.io/badge/-LeonardoCristian-blue?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/leonardo-cristian/)](https://www.linkedin.com/in/leonardo-cristian/) 

[![Gitlab Badge]( https://img.shields.io/badge/-leonardosclopes-330F63?style=for-the-badge&logo=gitlab&logoColor=white&link=https://gitlab.com/leonardosclopes)](https://gitlab.com/leonardosclopes)

[![Instagram Badge](https://img.shields.io/badge/-leocristian-E4405F?style=for-the-badge&logo=instagram&logoColor=white&link=https://www.instagram.com/leonardocr.a/?hl=en/)](https://www.instagram.com/leonardocr.a/?hl=en) 


## Desafio Proposto

Criar uma pequena REST Ful API JSON de preferência usando Express. A sua api vai receber um POST, vai acessar o site https://viajemais.voeazul.com.br/ (Comprar Passagens), fazer a busca e retornar a lista de todos os voos.
Ou seja, voce vai construir um crawler (web scraping, bot) que vai receber os dados de uma busca por passagens aéreas e vai retornar a lista dos voos do site da azul.

Obs: Utilizar axios, request ou bibliotecas parecidos. NÃO USAR PUPPETEER.

Exemplo do json que a api vai receber:

{
"Origem": "CNF",
"Destino": "GRU",
"DataIda": "30/05/2022",
"DataVolta": null,
"Adultos": 1,
"Criancas": 0,
"Bebes": 0
}

Exemplo do json que a api vai retornar:

[
{
"NumeroVoo": "4908",
"Duracao": "01:20",
"Valor": [320.95, 400.00],
"Embarque": "31/01/2022 05:25",
"Desembarque": "31/01/2022 06:45",
"Destino": "CGH",
"Origem": "CNF"
},
{
"NumeroVoo": "4417",
"Duracao": "01:20",
"Valor": [420.95, 550.15],
"Embarque": "31/01/2022 15:25",
"Desembarque": "31/01/2022 16:45",
"Destino": "CGH",
"Origem": "CNF"
}
]
