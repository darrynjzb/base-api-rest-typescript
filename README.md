# Microservice base api

Microservice base api with typescript server

## Install dependencies

```sh
npm install
```
### Config by environments

local, development, stage and production. These are set by the ENV called **TS_ENV**

```sh
TS_ENV=local
```

The specfic configurations are in **config**.

## To run local

To traspile ts run:

```sh
npm run tsc-w
```

The output path folder **./build**

Then to run in watch mode, run:

```sh
npm run local-w
```

## Postman collection

The is a postman collection to test the endpoints locally. The collection is in **app/postmane-collection/collection.json**

## TODO

- add logs in worflow
- write logs into file
- swagger
- dockerfile
- unit test