const express =  require("express");
const { mindRoute } = require("./routes/mindroute");
const { connection } = require("./main");
// const { Auth } = require("./middleware/middleware");
// const { todoRoute } = require("./routes/todoRoute");

const app = express();
const cors = require("cors");
const { userRoute } = require("./routes/userroute");
app.use(cors());
app.use(express.json());
app.use("/mind",mindRoute);
app.use("/users", userRoute);


// app.use(Auth);
// app.use("/todos", todoRoute);

app.get("/", (req,res) =>{
    res.send("Yippee Kayak Motherfuckers");
})

app.listen(8082, async () => {
    try {
        await connection;
        console.log("Server is running");
    } catch (err) {        
        console.log(err);
    }

})