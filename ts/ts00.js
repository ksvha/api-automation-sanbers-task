const { request, expect } = require("../config");

//endpoint 1
describe("POST, /authaccount/registration", function(){
    it("create new user", async function(){
        const response = await request
        .post("/authaccount/registration")
        .send({
            "name":"indro",
            "email":"indro@email.id",
            "password":123456
        });

        expect(response.status).to.eql(200);
        expect(response.body.message).to.eql("success");
        expect(response.body.data).to.be.a('object');
        
    })
})