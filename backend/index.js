// node

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("hello world");
// });

// server.listen(8082, () => {
//   console.log("Server is running node");
// });


// express

const {Auth}=require("./middleware/middleware");
const express =  require("express");
const { careRoute } = require("./routes/careroute");
const {faqRoute} =require("./routes/faqroute");
const {historyRoute} =require("./routes/historyroute")
const { connection } = require("./main");
const {mindRoute} =require("./routes/mindRoute")
const { userRoute } = require("./routes/userroute");
const {profileroute}=require("./routes/profileroute")
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/users", userRoute);
app.use("/mind",mindRoute);
app.use("/care",careRoute);
app.use("/faq",faqRoute);

app.use(Auth);

app.use("/history",historyRoute);
// app.use("/profile",profileroute);

app.get("/", (req,res) =>{
    res.send("Yippee Kayak Motherfuckers");
})

app.listen(8083, async () => {
    try {
        await connection;
        console.log("Server is running");
    } catch (err) {        
        console.log(err);
    }

})