import routes from "./publishers";
import { Server } from "./services/Server";
const PORT = process.env.PORT || 3002;

const server = Server.build();
server.middleswares();
server.route(routes);

server.start(PORT);