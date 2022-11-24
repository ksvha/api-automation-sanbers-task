const { request, expect} = require("../config");
var token;
var id;

//enpoint 2
describe("POST, /authaccount/login", function(){
    it("Login user", async function(){
        const response = await request
        .post("/authaccount/login")
        .send({
            "email":"indro@gmail.id",
            "password":123456
        });

        expect(response.status).to.eql(200);
        expect(response.body.message).to.eql("success");
        expect(response.body.data).to.be.a('object');
        token = response.body.data.Token;
        id = response.body.data.Id;
        console.log(response.body);
    })
})

//enpoint 3
describe("GET /users?page=1", function (){
    it("get all list users", async function (){
        const response = await request.get("/users?page=1")
        .set({
            'Authorization': `Bearer ${token}`
        });
        
        expect(response.status).to.eql(200);
        expect(response.body.data.length.to.eql(20));
    })
})

//endpoint 4
describe("GET /users/"+id, function (){
    it("get users by id", async function (){
        const response = await request.get("/users/"+id)
        .set({
            'Authorization': `Bearer ${token}`
        });
        
        expect(response.status).to.eql(200);
        // console.log(response);
    })
})

describe("DELETE /users/"+id, function (){
    it("Delete users by id", async function (){
        const response = await request.get("/users"+id)
        .set({
            'Authorization': `Bearer ${token}`
        });
        
        expect(response.status).to.eql(200);
        // console.log(response);
    })
})