# CRIANDO UM SISTEMA DE INTEGRAÇÃO COM API DO GITHUB

- Consumindo API do GitHub além de fazer um sistema de login e autenticação com JWT.

![apigithub](apigithub.png)
## Linguagens/DB/tecnologias usadas:

- GraphQL
- Knex
- Postgres
- Docker
- JWT
### Instalações iniciais 

- npm init -y

- npm install nodemon apollo-server graphql graphql-tools/load-files graphql-tools/merge knex pg apollo-datasource-rest

- para rodar o docker, utilizei o script: docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=docker -d postgres

- npx knex init(Gera um arquivo knexfile.js que só será executado) - terá que fazer algumas atualizações

- npx knex migrate:make create_table_contato(Irá criar o arquivo migrate e o DB postgres)

### Para executar a migrate: npx knex migrate:latest