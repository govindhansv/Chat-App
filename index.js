const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;
    // username  = "user";
    console.log(req.body);
    //   return res.json({ username: username, secret: "sha256..." });
    // Get or create user on Chat Engine!
    try {
        const r = await axios.put(
            "https://api.chatengine.io/users/",
            { username: username, secret: username, first_name: username },
            { headers: { "Private-Key": "7cd11748-58c1-4e6d-bbe8-260112c1c592" } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        console.log(e);
        return res.status(e.response.status).json(e.response.data);
    }
});

app.listen(3001);