# Projeto: PokeDex Explorer
O Pokedex é uma aplicação web interativa e divertida que permite aos usuários explorar o vasto mundo dos Pokémon. Utilizando a API do [PokeAPI.co](https://pokeapi.co/), este projeto oferece informações sobre centenas de Pokémon. 

Idéia inicial do projeto veio do curso JavaScript Developer da [Dio](https://www.dio.me/), mas acrescentado algumas outras funcionalidades por minha parte.

Este projeto está em constante evolução, e há planos para implementar melhorias no futuro. Além disso, à medida que o projeto avança, novas funcionalidades serão incorporadas para aprimorar ainda mais a experiência.

## Índice
- [Status do Projeto](#status-do-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura de Arquivos](#estrutura-de-arquivos)
- [Contato](#contato)

## Status do Projeto
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-green
)](https://pokedex-explorer.vercel.app/)

O projeto está hospedado no site da [Vercel](https://vercel.com/). Você consegue acessá-lo clicando [aqui](https://pokedex-explorer.vercel.app/).

## Tecnologias Utilizadas
- JavaScript
- HTML
- CSS

## Instalação
Foi utilizado [Node](https://www.python.org/) v18.18.0

Clone o repositório
```sh
git clone git@github.com:joaocarlosjunior/pokedex.git
```

Navegar até a pasta de destino
```sh
cd pokedex
```

No terminal instale dependência para poder visualizar o projeto no browser
```sh
npm install --global http-server
```

## Uso
Na pasta do projeto inicilalize o servidor
```sh
http-server ./
```
Abra no browser de sua preferência
```sh
http://localhost:8080/
```

## Estrutura de Arquivos
```sh
.
├── assets
│   ├── css
│   │   ├── globals.css
│   │   ├── pokedex.css
│   │   ├── pokemonDetail.css
│   │   └── pokemonDetailModal.css
│   ├── images
│   │   └── logo-pokedex.png
│   └── js
│       ├── main.js
│       ├── poke-api.js
│       ├── pokemon-detail.js
│       └── pokemon-models.js
└── index.html
```


## Contato
- João Carlos Júnior
- [Github](https://github.com/joaocarlosjunior)
- [Linkedin](https://www.linkedin.com/in/joaocarlosjr/)

## Licença
MIT