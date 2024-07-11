const express = require("express");
const app = express();
const { getUsers, updateUser } = require("./controller/users");
const authMiddleWare = require("./middleware/authMiddleware");
const port = 3000;

const testApi = require("./test-client/testApi");

app.use(express.json());

// enable to test api with authentication
// testApi();

app.get('/', (req, res) => {
    res.send('This is eBuddy tech assessment');
});

app.get('/fetch-user-data', authMiddleWare, getUsers);
app.put('/update-user-data/:id', authMiddleWare, updateUser);

app.listen(port, () => {
    console.log(`Server is running using port ${port}`);
});



