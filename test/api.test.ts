import { afterAll, beforeAll, describe, expect, test } from "vitest";

import { server } from "../server";

beforeAll(async () => {
  await server.ready();
});

afterAll(async () => {
  await server.close();
});

describe("API", () => {
  test("should return 200", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/",
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ status: "ok" });
  });

  test("should return 404", async () => {
    const response = await server.inject({
      method: "GET",
      url: "/not-found",
    });

    expect(response.statusCode).toBe(404);
  });
});
