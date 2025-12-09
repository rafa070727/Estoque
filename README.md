
# PWA Controle de Estoque - Entrega Final

Arquivos:
- index.html (aplicação PWA mobile-first)
- manifest.json
- sw.js (service worker básico)
- data/estoque.csv (dados iniciais, quantidades iniciam em zero)
- icons/

Como usar:
1. Extraia o ZIP.
2. Abra `index.html` no navegador (Chrome, Edge, Firefox).
3. Ou faça deploy no GitHub Pages para usar em vários dispositivos.
4. No celular, abra a URL e escolha "Adicionar à tela inicial" para instalar como PWA.

Funcionalidades:
- Cadastro de itens (incluir/editar)
- Ajuste de quantidades (Restaurante / Sede)
- Transferência Sede → Restaurante
- Logs em formato legível (ex.: "Restaurante consumiu 8 de Arroz")
- Exportar/Importar CSV e Reset de dados
- Geração de PDF (itens críticos da Sede)
- Persistência em localStorage (dados não se perdem ao fechar)
