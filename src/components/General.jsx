import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client.js";

import Body from "./Body";
const General = () => {
  return (
    /*Implement apollo provider and client */
    <div>
      <ApolloProvider client={client}>
        <Body />
      </ApolloProvider>
    </div>
  );
};

export default General;
