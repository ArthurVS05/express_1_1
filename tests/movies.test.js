const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });

});

describe("GET /api/movies/:id", () => {
  it("should return a movie by id", async () => {
    const response = await request(app).get("/api/movies/1");
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });

});

describe("GET /api/movies/:id", () => {
  it("should return error 404 if movie 0 not found", async () => {
    const response = await request(app).get("/api/movies/0");
    expect(response.status).toEqual(404);
  });
  });