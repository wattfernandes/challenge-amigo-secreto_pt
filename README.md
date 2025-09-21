# Challenge Amigo Secreto
Projeto desenvolvido durante curso Alura ONE. Uma aplicação para sorteio online de amigo secreto.

# Funcionalidades
- Adicionar nomes e e-mail de amigos a uma lista.
- Validação dinâmica dos campos de nome e e-mail.
- Sorteio automático de amigo secreto.
- Envio do resultado do sorteio para o e-mail cadastrado. (Função Não implementada).
  Observação: O envio de emails não pode ser feito apenas com JavaScript puro no navegador, pois isso exige um backend ou serviço de terceiros (como EmailJS, SMTP, etc).
  Deixei no código a Função para enviar email usando EmailJS, pois ele permite enviar emails diretamente do frontend.

# Como usar
1. Clone este repositório:
   git clone https://github.com/seu-usuario/s.git
2. Abra o arquivo `index.html` em seu navegador.
3. Digite o nome de um "amigo, e-mail" e clique em "Adicionar".
4. Após adicionar pelo menos dois amigos e respectivos e-mails, clique em "Sortear". Os resultados serão enviados para os e-mails cadastrados.

# Estrutura dos arquivos
- `index.html`: Interface da aplicação.
- `app.js`: Lógica de validação, adição e sorteio dos amigos.
- `style.css`: Estilos da aplicação.

# Requisitos
- Navegador web moderno.
