const hashedPassword = require("../testing");

describe("testing the hashed password",  function(){
    it("shoould hash a password correctly", function(){
        const password = "fehrgbrehwclbflscebhb";
       const hashed = hashedPassword(password);

       expect(hashed).not.toBe(password)
    })
})      