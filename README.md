# Projeto de Cadastro de Receitas

Este projeto é uma aplicação React para cadastrar e listar animes. Nele, você pode adicionar Receitas com o titulo, link para a capa (imagem) e uma descrição do modo de preparo ou Puxar aleatoreamente uma receita da API por meio do endpoint https://www.themealdb.com/api/json/v1/1/random.php. As receitas cadastradas são salvas em um db.json e serão exibidos em uma listagem, podendo posteriomente ser atualizadas ou removidas.



## Funcionalidades

- Cadastro de receitas com nome, link da capa e descrição dop mode do prepara.
- Exibição de uma lista de receitas cadastrados manualmente ou sendo adicionada por meio da API de forma aleatoria.
- É possivel atualizar as receitas cadastradas
- É possivel a remocação da receita.
- Dados persistidos em um arquivo db.json.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **CSS Modules**: Para estilização dos componentes.
- **JavaScript**: Usado para manipulação de estados e lógica da aplicação.
- **npx create-react-app**: Ferramenta usada para iniciar o projeto.

## Requisitos

- Node.js (v12 ou superior)
- db.json 
- npm ou yarn para gerenciamento de pacotes

## Como Rodar o Projeto

Passo 1: Clonar o Repositório

Abra o terminal e execute o seguinte comando:
```
git clone https://github.com/Tipimenta/Atividade4-italents.git
```

Passo 2: Instalar Dependências
Após clonar o repositório, entre na pasta do projeto e instale as dependências com o seguinte comando:
```
cd seu-repositorio
npm install
```

3- Instale o json-server globalmente (caso ainda não tenha instalado):

```
npm install -g json-server
```

4 - json-server --watch db.json --port 5000 

Passo 5: Executar a Aplicação
Com as dependências instaladas, execute o seguinte comando para iniciar o servidor de desenvolvimento:
```
npm start
```
Isso iniciará a aplicação localmente no endereço http://localhost:3000.

