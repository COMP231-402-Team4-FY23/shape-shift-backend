const request = require("supertest");
const app = require("../src/app");

describe("Users", () => {
  test("It should response the GET method /users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.statusCode).toBe(200);
  });
  test("It should response the POST method /register", async () => {
    const myObj = { username: "test", password: "123" };
    const response = await request(app).post("/api/register").send(myObj);
    expect(response.statusCode).toBe(200);
    expect(response.body.username).toEqual("test");
  });
  test("It should response the GET method /users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.statusCode).toBe(200);
    expect(response.body.length > 0).toEqual(true);
  });

  test("It should response the GET method /users", async () => {
    const response = await request(app).get("/api/users");
    expect(response.statusCode).toBe(200);
    expect(response.body.length > 0).toEqual(true);
  });

  test("It should response the DELETE method /users", async () => {
    const myObj = { username: "test", password: "123" };
    const responseUser = await request(app).post("/api/register").send(myObj);
    const userid = responseUser.body._id;
    const response = await request(app).delete(`/api/user/${userid}`);
    expect(response.statusCode).toBe(204);
  });
});
