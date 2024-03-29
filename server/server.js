require("dotenv").config();

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { join, resolve } = require("path");
const { authMiddleware } = require("./utils/auth.js");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config");

const PORT = process.env.PORT || 3001;
const app = express();

const cors = require('cors')

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())

app.use(require('./controllers'))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(join("client", "build")));

  app.get('/api/yelp', (req, res) => {
    res.json(require('./controllers'))
  })

  app.get("*", function (req, res) {
    res.sendFile(resolve(__dirname, "..", "client", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.sendFile(join(__dirname, "..", "client", "build", "index.html"));
  });
}

const startApolloServer = async (typeDefs, resolvers) => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${apolloServer.graphqlPath}`
      );
    });
  });
};

startApolloServer(typeDefs, resolvers);
