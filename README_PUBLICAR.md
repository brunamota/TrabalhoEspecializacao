# LADIS | Site público demonstrativo pronto para upload

Este diretório contém um **site estático completamente pré-compilado** em HTML, CSS e JavaScript simples, sem Node/npm e sem backend. Preserva o conteúdo dos oito projetos fictícios do LADIS oriundos de `src/data/projects.json` do pacote de homologação.

## Publicar sem instalar plugins

1. Abra https://app.netlify.com/drop no navegador.
2. Faça login se quiser manter o site sob sua conta. A documentação da Netlify informa que o modo de publicação direta também funciona sem conta, mas é aconselhável associar o site a uma conta para gerenciar o endereço.
3. Envie **a pasta `ladis-publico` ou o ZIP `LADIS_Site_Publico_Estatico.zip`**, e não o ZIP com o código Next.js original. Todos os arquivos `index.html`, `assets/`, `projetos/`, `_headers`, etc. precisam estar na raiz publicada.
4. Abra o endereço público HTTPS `*.netlify.app` gerado pela plataforma.
5. Verifique início, filtros de projetos, oito páginas individuais e menu no celular. Ajuste o nome e domínio do site nas configurações da hospedagem, se necessário.

Alternativa: Cloudflare Pages > Workers & Pages > Create > drag and drop de pasta ou ZIP com os arquivos prontos.

## O que este site oferece

- Home, Sobre, Equipe, Contato, Produções, Privacidade e Busca (informativa);
- Catálogo de oito projetos com pesquisa textual e filtro por área;
- Páginas independentes para os oito projetos;
- Identidade visual LADIS, layout responsivo, HTML sem dependências e navegação por teclado;
- Nenhuma coleta de dados, PDF, login, upload ou chamada externa de IA.

## Limitações e próximos passos

- **Não é a publicação do sistema full-stack.** Os cadastros autenticados, a moderação e a IA ficam indisponíveis até homologação real do projeto Next.js, autenticação, banco, armazenamento privado e antivírus.
- O site contém **apenas conteúdo fictício e demonstrativo** e está configurado como **noindex** (`robots.txt`, meta robots, `_headers`). Remover somente após validação editorial e institucional.
- Não existe formulário ou endereço de contato por não existir controlador institucional definido.
- Para a publicação completa, siga `docs/implantacao-publica-fullstack.md` no pacote entregue em separado.
- Não copie `.env`, segredos nem PDFs privados para este diretório.

## Verificar localmente

A partir da pasta que contém `ladis-publico`, execute:

```bash
python -m http.server 8080 --directory ladis-publico
```

Acesse http://localhost:8080 no navegador.
