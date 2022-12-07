const server = require("./src/app")
require("dotenv").config();
require("./src/db")

const start = async () => {
    await server.listen(process.env.PORT || 3001);
    console.log("Server running on port" , process.env.PORT || 3001);
}

start();