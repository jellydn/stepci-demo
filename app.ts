import startServer, { server } from "./server";

startServer().catch(console.error);

// Handle graceful shutdown
const exitHandler = async () => {
  await server.close();
  process.exit(0);
}

process.on('SIGINT', exitHandler);
process.on('SIGTERM', exitHandler);
