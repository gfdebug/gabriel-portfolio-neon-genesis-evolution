# Relatório de validação — Neon Genesis Evolution

## Base do trabalho

O envio com extensão `.zip` continha internamente um arquivo RAR5. Foi extraído com a biblioteca `libarchive`. Os arquivos da V3 foram mantidos e evoluídos; a versão original recebida não foi modificada.

## Funcionalidades implementadas

- [x] WhatsApp com o número +55 (31) 97212-0246, mensagem PT/EN e abertura do contato por `wa.me`.
- [x] Seletor PT/EN no cabeçalho, inclusive mobile, com preferência salva localmente.
- [x] Tradução da interface principal, textos de projetos, modais, casos e terminal, incluindo rótulos de acessibilidade selecionados.
- [x] Cinco projetos listados: ShopCore V6, Nexora, NexData, Sabor da Praça, Bella Studio.
- [x] Estudos de caso, com desafio, solução e validação/aprendizado, sem métricas inventadas.
- [x] Serviços e processo de trabalho enriquecidos.
- [x] Seções de trajetória, tecnologias aplicadas e currículo para visualização/download.
- [x] Estilo da V3 preservado, com ajustes de interface para o novo conteúdo.

## Validações realizadas

- `node --check app.js` e `node --check i18n.js`.
- Testes de consistência com `node --test tests/*.test.mjs`.
- Chromium headless em viewport desktop (1366×768), tablet (768×1000) e celular (390×844): renderização de 5 cartões, alternância PT/EN, modal de ShopCore, abertura de terminal e comando `shopcore`, erros JavaScript e ausência de rolagem horizontal.
- Verificações de integridade dos arquivos de imagem, referências internas e existência do currículo PDF.
- Currículo PDF com uma página renderizado e inspecionado visualmente.

## Limitações importantes

- O navegador automatizado do ambiente bloqueia navegação `http://localhost` e `file://`. Os fluxos foram avaliados via HTML/CSS/JS injetados no Chromium isolado; o carregamento por URL/hospedagem não foi validado automaticamente.
- Links externos, comportamento de provedores como WhatsApp e disponibilidade dos sites Vercel/Netlify exigem teste real após publicação.
- O currículo foi redigido apenas com informações fornecidas; não contém cargos, datas, empresas ou certificações não confirmados. É recomendável personalizá-lo antes de uso em candidaturas.
- Não foi publicada nem substituída a V3 hospedada. O pacote entregue é independente.

## Teste manual recomendado antes do deploy

1. Abrir a pasta local em um servidor estático, conferir imagens e a versão mobile.
2. Alternar PT/EN e atualizar a página; verificar se o idioma permanece.
3. Conferir botão WhatsApp, mensagem pré-preenchida e PDF do currículo.
4. Abrir todos os projetos, testar filtros, busca, galeria, terminal e temas.
5. Conferir links externos e publicar em um ambiente Preview antes de promover a produção.
