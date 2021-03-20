# Node JS com Sequelize

## Instalação
````
copy .env.example .env ou cp .env.example .env
npm install
yarn sequelize db:migrate
yarn sequelize db:seed:all
yarn run test
yarn run dev
````
## Comandos úteis
````
yarn sequelize db:migrate:undo:all
yarn sequelize migration:create --name=create-users
````


## Referências
- https://medium.com/@fabiojanio/nodejs-express-cors-consign-autoload-bodyparser-e-compression-na-pr%C3%A1tica-fbfc12e46ff4
- https://sequelize.org/master/
- https://blog.rocketseat.com.br/nodejs-express-sequelize/
- https://www.youtube.com/watch?v=Fbu7z5dXcRs
- https://codeburst.io/better-error-handling-in-express-js-b118fc29e9c7
