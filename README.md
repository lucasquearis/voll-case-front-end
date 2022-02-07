# Bem vindo(a) ao repositorio de Front-end do meu desafio técnico para empresa Voll Solutions

O objetivo desse desafio é desenvolver um chat-online para conversas em grupo utilizando WebSocket.

## Requisitos

Ao se conectar no app, será necessário informar um nome de usuário que será usado como identificação nas mensagens enviadas.

Todos usuários conectados podem enviar e ler mensagens de todas as pessoas conectadas.

Ao se conectar, será necessário carregar o histórico das últimas 30 mensagens trocadas através de uma API REST.

As mensagens deverão ser armazenadas em um banco de dados da sua escolha.

A aplicação deve seguir esse modelo [Aqui](https://gfycat.com/webbedmisguidedhind).

- [Link aplicação back-end](https://lucasquearis-voll-solutions.herokuapp.com/messages)

- [Link repositório back-end](https://github.com/lucasquearis/voll-case-back-end)

## Sumário

- [Deploy](#deploy)
- [Iniciando a aplicação Localmente](#initApp)
- [Arquitetura](#architecture)
- [Páginas](#pages)
- [Funcionalidades](#functionalities)
- [Tecnologias utilizadas](#technologies)

# <a name="deploy"></a> Deploy

O deploy da aplicação foi feito na [netlify](https://www.netlify.com/).

No seguinte link

<code><https://lucasquearis-voll-solutions-case.netlify.app/login></code>

# <a name="initApp"></a> Iniciando a Aplicação Localmente

Para iniciar a aplicação primeiramente clone este repositório com o seguinte comando:

<code>$ git clone git@github.com:lucasquearis/voll-case-front-end.git </code>

Apos clonado o repositório, entre em sua pasta principal com o comando:

<code>$ cd voll-case-front-end</code>

 e instale todas as dependências com o comando:

<code>$ npm install </code>

Após isso, inicie a aplicação com o seguinte comando:

<code>$ npm start </code>

Caso queira também testar a parte do back-end localmente, siga os passos desse [repositório](https://github.com/lucasquearis/voll-case-back-end) para colocar on-line a parte do back-end também, o que fará você carregar todas as mensagens salvas e poder mandar as mensagens do aplicativo.

# <a name="architecture"></a> Arquitetura

![Imagem Arquitetura pastas](/images/arquitetura.png)

A arquitetura do projeto está dividida em pastas referentes a caracteristicas dos conteúdos,

- components - todos os componentes React da aplicação.
- constants - todas as constantes já estabelecidas usadas na função, evitar números mágicos, etc.
- functions - funções auxiliares presentes no projeto.
- images - imagens usadas no projeto.
- mocks - mocks para testes e iniciação primeira configuração do projeto.
- pages - todas as páginas existentes no projeto.
- redux - todos os componentes necessários para o funcionamento do Redux.

# <a name="pages"></a> Páginas

## Página de login

Aqui o usuário escolhe um apelido/nome para se juntar a sala de chat

![login](/images/login.png)

Caso o nome escolhido já esteja sendo usado na sala, o usuário será notificado

![Usuário já logado](/images/usuarioJaLogado.png)

## Página Principal

Essa é a página principal da aplicação.
![Login feito com sucesso](/images/paginaPrincipal.png)

# <a name="functionalities"></a> Funcionalidades

- Sempre que o usuário entrar na sala, seu nome estará disponível para todos os integrantes da sala na lista Usuários Online.
- Sempre que o usuário sair da sala, seu nome será removido da lista de Usuários Online.
- Sempre que qualquer usuário estiver digitando, todos os integrantes da sala serão notificados de que o usuário que está digitando, está digitando.

# <a name="technologies"></a> Tecnologias utilizadas

- axios 0.25.0 - Requisições a API
- react 17.0.2 - Framework para desenvolvimento da página
- react-redux 7.2.6 - Framework para centralizar estados.
- react-router-dom 6.2.1 - Framework manipulação de páginas do React.
- socket.io-client 4.4.1 - Framework para conexão com socket do back-end.
- uuid 8.3.2 - Gerador de ids para maps com keys únicas.
- eslint 8.7.0 - Padronização do código.
- eslint-config-airbnb 19.0.4 - Configuração do lint no modelo airbnb.
