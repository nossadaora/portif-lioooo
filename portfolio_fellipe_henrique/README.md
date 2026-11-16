# Portfólio do Fellipe Henrique Alves Vieira

## Sobre o projeto
Este é meu portfólio pessoal, feito como atividade de aula. Nele apresento um pouco sobre mim, algumas coisas que estou aprendendo e exemplos de atividades que pratiquei.

## Tecnologias utilizadas
- HTML5: estrutura das páginas
- CSS3: cores, fontes, espaçamentos e efeitos
- JavaScript: pequenas interações
- Bootstrap 5: menu responsivo, colunas e componentes

## Link do site
Depois de publicar no GitHub Pages, coloque o endereço aqui:
`https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/`

## Como o projeto funciona
A página está organizada em seções: Perfil, Habilidades, Projetos e Contato. O menu no topo leva diretamente a cada parte. O Bootstrap ajuda a organizar o conteúdo e faz com que o menu e as colunas funcionem em telas menores.

Os arquivos estão separados assim:
- `index.html`: conteúdo e estrutura do site
- `style.css`: aparência e efeitos
- `script.js`: interações da página

## Recurso novo
Além das seções principais, acrescentei um botão de **voltar ao topo**. Ele aparece quando a pessoa desce a página e permite voltar ao começo com uma rolagem suave. Também coloquei efeitos simples quando o cursor passa pelos cartões dos projetos e pelos botões.

## Como implementei o recurso
No `script.js`, usei um evento de rolagem (`scroll`) para verificar a posição da página. Quando a rolagem passa de 350 pixels, o JavaScript adiciona a classe `show` ao botão. Ao clicar, o método `window.scrollTo()` leva a página de volta ao início suavemente. No `style.css`, usei `transition` e `transform` para fazer a aparição do botão e os efeitos de passagem do cursor.

## Como publicar no GitHub Pages
1. Crie um repositório público no GitHub.
2. Envie `index.html`, `style.css`, `script.js` e `README.md` para a raiz do repositório.
3. Entre em **Settings > Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main` e a pasta `/ (root)`, depois clique em **Save**.
6. Aguarde o GitHub Pages publicar o site e copie o endereço gerado.
7. Volte a este README e substitua o endereço de exemplo pelo link publicado.

## Antes de entregar
- Confira se o nome e a apresentação estão corretos.
- Troque o e-mail de exemplo pelo seu e atualize os links das redes sociais.
- Ajuste os projetos e as habilidades para refletirem o que você realmente fez e está aprendendo.
- Coloque o link real do GitHub Pages neste arquivo.
