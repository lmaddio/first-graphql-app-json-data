// server.js

/*  
    Required modules {express and express-graphql} 
    will be imported along with the schema object
    from the schema.js file in src/schema.js 
*/

const cors = require('cors');
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./src/schema.js');

let port = 3001;
const app = express().use(cors());
app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true //set to false if you don't want graphiql enabled
}));

app.use('/', (req, res, next)=>{
    console.log("requested!");
    next();
});

app.listen(port);
console.log('GraphQL API server running at localhost:'+ port);