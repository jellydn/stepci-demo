import { afterAll, beforeAll, describe, expect, test } from "vitest";

import { server } from "../server";

beforeAll(async () => {
  await server.ready();
});

afterAll(async () => {
  await server.close();
});

describe("API", () => {
  test("/api should return 404", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/api",
    });
  
    expect(response.statusCode).toBe(404);
  });

  test("/api/hello should return 200 and an object", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/api/hello",
    });
  
    expect(response.statusCode).toBe(200);
    expect(typeof response.json()).toBe('object');
  });

  test("/api/ping should return 200 and an object with pong property", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/api/ping",
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toHaveProperty('pong');
  });

  test("should return 404 for invalid URL", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/api/invalid",
    });

    expect(response.statusCode).toBe(404);
  });
});
