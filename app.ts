import startServer, { server } from "./server";
import 'ajv/dist/core';

startServer().catch(console.error);

// Handle graceful shutdown
const exitHandler = async () => {
  await server.close();
  process.exit(0);
}

process.on('SIGINT', exitHandler);
process.on('SIGTERM', exitHandler);
