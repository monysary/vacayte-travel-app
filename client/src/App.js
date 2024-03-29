import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme } from "@mui/material/styles";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddTripForm from "./pages/AddTripForm";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("auth_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const theme = createTheme({
  palette: {
    primary: {
      main: '#569597',
    },
    secondary: {
      main: '#D9BEAA'
    },
    info: {
      main: '#606060'
    },
    black: {
      main: '#252525'
    }
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add-trip" element={<AddTripForm />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
