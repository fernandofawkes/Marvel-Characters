## Como usar esse projeto

Localmente:

1. clonar o projeto
2. npm start
3. acesse localhost:3000 no seu navegador

Site Publico:

1. acesse

##Observações importantes

Infelizmente a API da marvel é limitada a 100 resultados por requisição, isso faz com que para carregar os mais de quase 1500 personagens demore consideravelmente (~1min) e por isso adicionei a tela de carregamento.

Outra limitação é o teto de requisições diárias (3000), como o projeto foi está disponível publicamente existe uma pequena chance de ter estourado esse limite, e portanto seria necessário alterar as chaves da api no arquivo `src/config/config.js` antes de rodar o `npm start`.

## [TODOS]

- Melhorar a estrutura do css
- Validar tamanho de fontes e cores dos textos
