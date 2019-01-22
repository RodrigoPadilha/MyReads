# MyReads Project

## Visão geral do projeto:
Nesta aplicação, a página principal exibe uma lista de "estantes" (ou seja, categorias), cada uma das quais contém uma série de livros. As três estantes são:

Currently Reading (lendo atualmente)
Want to Read (quer ler)
Read (já leu)

Na página de Busca é exibido um campo para pesquisa de livros por nome ou autor. O resultado da busca é exibido em uma listagem em formato de grid.

## Especificadades do projeto:
As funções que foram implementadas partindo do projeto inicial foram:

### Página principal
* Visualizar três categorias (ou "estantes") para livros ("currently reading", "want to read" e "read").
* A página principal permite que os usuários mudem os livros de estante.
* As informações são mantidas quando ocorrem refreshes de página.
* Permitir a troca de estantes de maneira permanente utilizando a API fornecida no projeto.

### Página de Busca
* Implementar um componente de busca.
* Gerenciar as rotas através do React Router.
* Permitir a troca de troca de estantes e a movimentação dos livros para o acervo do usuário.


### Rodando localmente:
Certifique-se de ter instalado em sua máquina o Node.js. Você pode verificar a versão do node com o comando `node -v`, o mesmo vale para o npm (`npm -v`). Feito isso:
- Clone o projeto para sua máquina local: `git clone https://github.com/RodrigoPadilha/MyReads`
- Entre no diretório do projeto: `cd myreads`
- Instale todas as denpendências com o `npm install`
- Inicie o servidor de desenvolvimento com `npm start`

### Agradecimentos:
- Ao mentor que dedicou tempo e atenção para a conclusão deste projeto Eric Gruby.
