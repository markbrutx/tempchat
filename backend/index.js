const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const req = await axios.put("http://api.chatengine.io/users", {
        username: username, secret: username
    },
    {headers: {"private-key": "PRIVAVTE_KEY"}}
    )
    return res.status(req.status).json(req.data);
    }
   catch (err) {
    console.error(err);
    return res.status(err.response.status).json(err.response.data);
  }
});

app.listen(3001);