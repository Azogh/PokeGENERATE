# Projeto de Cadastro de Pokémon

## Descrição

Este projeto é um sistema de cadastro de Pokémon desenvolvido com Angular e Firebase. O objetivo é criar uma aplicação web onde os usuários podem gerenciar uma lista de Pokémon, realizar operações CRUD (Criar, Ler, Atualizar, Excluir), e interagir com uma API externa para gerar Pokémon aleatórios.

## Funcionalidades

- **Cadastro e Listagem de Pokémon**: Adicione novos Pokémon, visualize a lista de Pokémon cadastrados, edite e exclua registros.
- **Integração com API**: Consuma dados da PokéAPI para gerar informações sobre Pokémon aleatórios.
- **Autenticação e Proteção de Rotas**: Use Firebase Authentication para login e proteção de rotas.
- **Customização de Pipe**: Implementação de um pipe personalizado para for2.ação de textos.

## Tecnologias Utilizadas

- **Angular**: Framework para desenvolvimento do frontend.
- **Firebase**: Serviço de backend para autenticação e banco de dados.
- **Angular Material**: Biblioteca de componentes UI para Angular.
- **PokéAPI**: API externa para dados de Pokémon.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Azogh/my-anime-list.git

2. Instale as dependências:
   ```bash
    npm install

3. Configure as credenciais do Firebase:
- Crie um projeto no Firebase Console.
- Adicione as credenciais ao arquivo src/environments/environment.ts.

4. Inicie o servidor de desenvolvimento:
    ```bash
    ng serve
    O projeto estará disponível em http://localhost:4200.


## USO 
- **Página Inicial**: Visualize um Pokémon aleatório e gerencie a lista de Pokémon.
- **CRUD**: Adicione, edite e exclua Pokémon da lista.
- **Autenticação**: Faça login para acessar áreas protegidas da aplicação.

## Estrutura do Projeto
- **src/app/**: Contém todos os módulos, componentes e serviços do Angular.
- **src/environments/**: Configurações de ambiente, incluindo as credenciais do Firebase.
- **src/assets/**: Arquivos estáticos como imagens e estilos.
