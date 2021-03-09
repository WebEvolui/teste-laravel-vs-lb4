# Teste laravel VS loopback 4
Instalação padrão dos dois frameworks - Depois criamos uma tabela e fizemos rotas para insert e select

Usando banco de dados MySQL

> OBS: você precisa ter o PHP, Node.js, MySQL instalado já em sua máquina, vou deduzir que o ambiente está pronto ai

## Como rodar o teste no laravel?
Entre na pasta do laravel pelo terminal

### Comandos/tarefas abaixo:
```
composer i
```

Criar um banco com o nome: ***loopvslaravel***

```
php artisan migrate 
```

Depois só dá um start no servidor: 
```
php -S localhost:8081 -t public
```

Acesse a rota: localhost:8081/payments

POST ou GET

> Depois use o postman para fazer o teste
> 
> Crie uma collection
> 
> Salve o request nesta collection
> 
> Depois menu file -> New Runner tab 
> 
> Arraste a collection para a tab de teste 
> 
> Coloque 50 interações, desmaque os dois check que vem marcados por padrão e rode o teste
> 
> Export o resultado e veja lá embaixo o tempo total em ms

## Do loopback 4 vou passar o passo a passo do zero, só precisa ter o node.js e npm ai
```diff
! Se você só quiser entrar na pasta e rodar o exemplo pronto faça assim: 
! 1° crie o banco de dados: teste_maluco 
! Rode os comandos:
# npm run build   
# npm run migrate
# npm start
```

### Fazendo do ZERO abaixo:

Instalando o CLI do LB4

```
npm i -g @loopback/cli
```

Crie uma pasta para seu projeto e entre nela

Criando o projeto, pode deixar tudo padrão 

```
lb4
```

```
cd pasta_de_seu_projeto
```
```
lb4 model 
```

Responda conforme abaixo:
![image](https://user-images.githubusercontent.com/13201575/110485701-ae3e4e00-80ca-11eb-908f-74bc97ba37f5.png)

```
lb4 datasource 
```
![image](https://user-images.githubusercontent.com/13201575/110484655-9f0ad080-80c9-11eb-94cd-4613ab0f902c.png)

```
lb4 repository
```

![image](https://user-images.githubusercontent.com/13201575/110484854-d24d5f80-80c9-11eb-8852-0b73f4649442.png)

```
lb4 controller
```
![image](https://user-images.githubusercontent.com/13201575/110485044-0163d100-80ca-11eb-9dfc-030b0af4e23d.png)

```
npm run build   

npm run migrate

npm start
```

Só fazer o mesmo teste pelo postman agora na porta :3000

localhost:3000/pagamentos

POST ou GET
