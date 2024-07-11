const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const { getUsers, updateUser } = require("./controller/users");
const authMiddleWare = require("./middleware/authMiddleware");
const port = process.env.PORT;

// to test api with authentication
const testApi = require("./test-client/testApi");

app.use(express.json());

// to test api with authentication
testApi();

app.get('/', (req, res) => {
    res.send('This is eBuddy tech assessment');
});

app.get('/fetch-user-data', authMiddleWare, getUsers);
app.put('/update-user-data/:id', authMiddleWare, updateUser);

app.listen(port, () => {
    console.log(`Server is running using port ${port}`);
});



