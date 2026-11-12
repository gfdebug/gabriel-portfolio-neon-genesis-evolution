# Gabriel Lima — Neon Genesis Evolution

Versão evoluída do portfólio pessoal Gabriel Portfolio V3, preservando o visual neon em roxo, rosa e ciano e a base **HTML + CSS + JavaScript**, sem dependências de build.

## Como abrir

- Abra `index.html` no navegador ou rode `python -m http.server 8000` nesta pasta.
- O site é estático. Para publicar, envie o **conteúdo completo desta pasta** para Vercel, Netlify ou hospedagem de site estático.
- Não há necessidade de conectar Supabase ao portfólio: a integração de banco está nos projetos externos, como ShopCore.

## Alterações na Evolution

- Alternância **PT/EN** no cabeçalho, incluindo menu, apresentação, serviços, projetos, estudos de caso, competências, modal de projetos e conteúdo principal do terminal. Preferência persistida em `localStorage`.
- Botão WhatsApp de contato para `+55 31 97212-0246`, com mensagem pré-preenchida no idioma da interface (abre `wa.me`, sem envio automático).
- Seção de serviços reorganizada, com links para projetos correspondentes.
- **ShopCore V6** adicionado aos quatro projetos originais, totalizando cinco, com capturas e estudo de caso.
- Estudos de caso dentro dos modais de todos os projetos: desafio, solução e aprendizado/validação.
- Seções de trajetória, tecnologias em prática e currículo, com um PDF de uma página.
- Refinamentos de responsividade, layout e acessibilidade sem remover o terminal ou os efeitos neon.

## Funcionalidades preservadas

- Projetos Nexora, NexData, Sabor da Praça e Bella Studio, com seus links e imagens;
- filtros, busca, galeria, modal com navegação por setas e botão de copiar link;
- terminal GABRIEL_OS (`Ctrl + K`, comandos originais, mais `shopcore`);
- modo claro/escuro, controle de animações, preferência do sistema por movimento reduzido;
- menu móvel, indicadores de progresso, navegação por âncoras e efeitos da V3.

## Como editar

- `index.html`: seções, textos em português, links de contato;
- `styles.css`: base visual e camada Evolution (no final);
- `app.js`: dados e comportamentos dos projetos, comandos do terminal;
- `i18n.js`: tradução dos textos originais e troca PT/EN; novos elementos têm `data-en` (e, quando necessário, `data-en-html`);
- `assets/*.webp`: capturas dos projetos, incluindo ShopCore;
- `Gabriel_Lima_Curriculo.pdf`: currículo inicial, que deverá ser personalizado quando houver datas/cargos comprovados.

## Verificações

- Requisitos estáticos: `node --test tests/*.test.mjs`;
- Sintaxe: `node --check app.js` e `node --check i18n.js`;
- Em navegador Chromium isolado, foram testados tamanhos 1366×768, 768×1000 e 390×844, botões de idioma, busca, modais, terminal, links internos e ausência de erros de JavaScript.

**Nota:** os testes de navegador foram executados com HTML/CSS/JS injetados em um navegador isolado devido à restrição de navegação local do ambiente. Não constituem teste end-to-end do site depois de publicar. Verifique os links externos, carregamento real de fotos, envio pelo WhatsApp, acesso ao currículo e visual final no domínio publicado antes de substituí-lo em produção.

Projetos listados são demonstrativos para portfólio; não representam contratos ou vendas reais.
