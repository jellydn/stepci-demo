import { afterAll, beforeAll, describe, expect, test } from "vitest";

import { server } from "../server";

beforeAll(async () => {
  await server.ready();
});

afterAll(async () => {
  await server.close();
});

describe("/api", () => {
  test("should return 200", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/api",
    });

    expect(response.statusCode).toBe(200);
  });

  test("should return 404", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/api/not-found",
    });

    expect(response.statusCode).toBe(404);
  });
});

describe("/api/hello", () => {
  test("should return 200 with a string", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/api/hello",
    });

    expect(response.statusCode).toBe(200);
    expect(typeof response.json()).toBe("string");
  });

  test("should return 404", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/api/hello/not-found",
    });

    expect(response.statusCode).toBe(404);
  });
});

describe("/api/ping", () => {
  test("should return 200 with an object", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/api/ping",
    });

    expect(response.statusCode).toBe(200);
    expect(typeof response.json()).toBe("object");
    expect(typeof response.json().pong).toBe("string");
  });

  test("should return 404", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/api/ping/not-found",
    });

    expect(response.statusCode).toBe(404);
  });
});
