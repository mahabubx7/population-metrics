import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
import { rest } from "msw";
import { setupServer } from "msw/node";

expect.extend(matchers); // matchers

// handler
const handlers = [
  // for rocket-api
  rest.get("https://api.api-ninjas.com/v1/country", (req, res, ctx) => {
    req.url.searchParams("limit=29");
    res(
      ctx.status(200),
      ctx.json([
        {
          name: "Bangladesh",
          iso2: "BD",
          population: 1648000,
        },
        {
          name: "United States of America",
          iso2: "US",
          population: 11000,
        },
      ]),
      ctx.delay(30)
    );
  }),
];

// server
const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => {
  server.resetHandlers();
  cleanup();
});

afterAll(() => server.close());
