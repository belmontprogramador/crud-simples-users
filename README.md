Gerenciamento de Usuários - API com Express, Prisma e Autenticação JWT
Este projeto é uma API de gerenciamento de usuários construída com Node.js, Express, Prisma e autenticação JWT, que permite criar, atualizar, deletar e autenticar usuários. É ideal para projetos que necessitam de uma base sólida para autenticação e gerenciamento de usuários, garantindo segurança e escalabilidade.

🚀 Funcionalidades
Criação de Usuários: Permite a criação de novos usuários com dados como nome, email, senha, idade e endereço.
Login com JWT: Gera um token JWT ao fazer login, que é usado para autenticação em rotas protegidas.
Atualização de Usuário: Atualiza informações de usuários existentes.
Exclusão de Usuário: Permite a exclusão de contas de usuário.
Segurança com Hash de Senha: As senhas são criptografadas com o bcrypt para garantir segurança.
🛠️ Tecnologias Utilizadas
Node.js: Ambiente de execução para JavaScript.
Express: Framework para criação de servidores e APIs.
Prisma: ORM (Object-Relational Mapping) para manipulação do banco de dados com segurança e eficiência.
JWT (JSON Web Token): Para autenticação segura e gerenciamento de sessão.
Bcrypt: Para hash e verificação de senhas dos usuários.
📂 Estrutura do Projeto
plaintext
Copiar código
.
├── ControllerUsers/
│   ├── createUser.js          # Lógica para criação de usuários
│   ├── loginController.js     # Lógica para login e geração de token JWT
│   ├── updateUser.js          # Lógica para atualização de usuários
│   ├── deleteUser.js          # Lógica para exclusão de usuários
├── Middleware/
│   ├── authMiddleware.js      # Middleware para autenticação com JWT
├── routes/
│   ├── userRoutes.js          # Rotas de CRUD para usuários
├── .env                       # Variáveis de ambiente, incluindo chave JWT e dados do banco de dados
├── app.js                     # Configuração e inicialização do servidor Express
└── README.md                  # Documentação do projeto
📝 Pré-requisitos
Node.js (versão 14 ou superior)
PostgreSQL (ou outro banco de dados suportado pelo Prisma)
Prisma CLI: Ferramenta para gerenciar o Prisma
🔧 Instalação
Clone este repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
Instale as dependências:

bash
Copiar código
npm install
Configuração do banco de dados e Prisma:

Defina sua URL do banco de dados em .env:
plaintext
Copiar código
DATABASE_URL="postgresql://user:password@localhost:5432/nome_do_banco"
JWT_SECRET="sua_chave_secreta_jwt"
Gere as migrações do Prisma:
bash
Copiar código
npx prisma migrate dev --name init
Inicie o servidor:

bash
Copiar código
npm start
Acesse a API:

O servidor estará rodando em http://localhost:3002
🔑 Rotas da API
Autenticação
POST /login: Autentica um usuário e retorna um token JWT.
Usuários
POST /createusers: Cria um novo usuário.
PUT /updateuser/:id: Atualiza os dados de um usuário existente (requer autenticação).
DELETE /deleteuser/:id: Exclui um usuário existente (requer autenticação).
🛡️ Segurança
Hash de Senhas: Utilizamos bcrypt para garantir que as senhas sejam armazenadas de forma segura.
Autenticação JWT: As rotas protegidas exigem um token JWT, garantindo acesso apenas para usuários autenticados.
🧪 Testando a API
Você pode testar a API usando ferramentas como o Postman ou Insomnia. Basta enviar requisições HTTP para as rotas acima, incluindo o token JWT no cabeçalho Authorization para rotas que exigem autenticação.

📚 Documentação
Toda a documentação das rotas e da estrutura do banco de dados pode ser encontrada neste README ou em ferramentas como Swagger (caso implementado).

📜 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo conforme necessário.

