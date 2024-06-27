const app = require("./app")
const supertest = require("supertest")
const request = supertest(app)

describe("/teas endpoint", () => {
    it("should return a response", async () => {
        const response = await request.get("/teas")
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(5);
    })
})