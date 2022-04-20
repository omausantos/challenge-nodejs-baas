## 🤓 Bora codar?

01. Inicie realizando o download do projeto
```bash
git clone https://github.com/omausantos/challenge-nodejs-baas
```

02. Agora é instalar as dependencias via NPM ou YARN (observe que deve estar dentro da pasta onde encotnra-se o arquivo package.json)
```bash
npm install
OU
yarn install
```

03. Lembre de criar as variaveis de ambiente, para acesso ao MongoDB e Secret JWT, no arquivo .env
```bash
URL_ACCESSE_MONGODB = 'XXXXXXXX'
SECRET_AUTH = 'XXXXXXXX'
```

04. Então é hora de inicializar o projeto!
```bash
npm run dev
OU
yarn dev
```

05. Tudo pronto? Acesse http://localhost:3000/ e os EndPoints estarão disponiveis

06. Documentação das API`s estão disponiveis em http://localhost:3000/swagger
```bash
API POST/accounts Criar conta para usuário cadastrado, não está com autenticação para que possam criar um usuário para teste
```

### 📦 EndPoints do Desafio
> O desafio é composto por 11 EndPoints, separados em 4 grupos e documentação.

- [x] **GET /accounts:** Lista todas as contas cadastradas
- [x] **GET /accounts/ID:** Todos os dados de uma conta especifica
- [x] **GET /accounts/balance/ID:** Saldo de uma conta especifica
- [x] **POST /accounts:** Criar conta para usuário cadastrado
- [x] **POST /accounts/transfer:** Transferencia bancaria entre contas P2P
- [x] **POST /auth:** Requisitar token JWT
- [x] **POST /documents:** Inclusão de documento por usuário
- [x] **GET /documents/ID:** Lista de todos os documentos por usuário
- [x] **GET /users:** Lista todos os usuários cadastrados
- [x] **GET /users/ID:** Todos os dados de um usuário especifico
- [x] **POST /users:** Inclusão de novo usuário
- [x] **Documentação Swagger:** Desenvolver documentação das API`s via Swagger

#### Package.json
* [`ESLint`](https://eslint.org/) ferramenta para padronização de código, identificação de erros e unificação.
* [`bcryptjs`](https://www.npmjs.com/package/bcryptjs) biblioteca para criptografia de dados e variaveis.
* [`cors`](https://www.npmjs.com/package/cors) utilizada junto com Express, auxilia no controle de CORS entre aplicações.
* [`dotenv`](https://www.npmjs.com/package/dotenv) gestão de variaveis de ambiente.
* [`express`](https://expressjs.com/pt-br/) framework para desenvolvimento de API Rest em NodeJS.
* [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken) gestão de tokens JWT.
* [`mongoose`](https://mongoosejs.com/) gestão do acesso ao MongoDB.
* [`multer`](https://mongoosejs.com/) gestão de uploads de arquivos no NodeJS.
* [`mime-types`](https://www.npmjs.com/package/mime-types) para validação do upload de arquivos, junto com @multer.
* [`swagger-ui-express`](https://www.npmjs.com/package/swagger-ui-express) server para documentação API Swagger.
