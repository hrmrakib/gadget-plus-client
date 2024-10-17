import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./routes/Routes";
import { RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

// const client = new ApolloClient({
//   // uri: "http://localhost:4000/graphql",
//   uri: "https://gadget-plus-server.vercel.app/graphql",
//   cache: new InMemoryCache(),
// });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/* <ApolloProvider client={client}> */}
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      {/* </ApolloProvider> */}
    </Provider>
  </StrictMode>
);
