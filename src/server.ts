import http from "http";
import app from "./app";
import loadEnv from "./helpers/loadEnv";

const server = http.createServer(app);

const startServer = async () => {
  try {
    server.listen(loadEnv.PORT, () => {
      console.log(`server running on http://localhost:${loadEnv.PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

// start the server
startServer();
