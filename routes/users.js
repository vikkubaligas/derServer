const express = require('express');
const router = express.Router();
const jsonwebtoken = require("jsonwebtoken");

const JWT_SECRET =
      "goK!pusp9ThERUtRenOwUhAsWUCLheVIKKUl!uJLPlS8EbreWLDRVpIwabRAsi69";
// "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";


/* GET users listing. */
router.post('/voters', function(req, res, next) {

  const { token, update } = req.body;
  try {
    const { user } = jsonwebtoken.verify(token, JWT_SECRET);
    const list = []
    for (let i = 899; i < 1250; i++) {
      list.push({
        id: i,
        name : "name_"+i,
        epic :"epic_"+i,
        booth: "191",
        number: i,
        house: "hno_"+i,
        voted: true,
        updated: 1258458,
        time: 1245896,
      })
    }
    const result = {
      error:"",
      voters: list
    }
    res.send(result);
  } catch (error) {
    const result = {
      error: "unauthorised",
      voters: []
    }
    res.send(result);
  }
});

router.post('/booths', function(req, res, next) {

  const { token, update } = req.body;
  try {
    const { user } = jsonwebtoken.verify(token, JWT_SECRET);
    const list = [
      {id: 1,
        name: "Volakadu",
        booth: 192,
        total: 1000,
        voted: 0,
        updated: 12845},
      {id: 1,
        name: "Paniyadi",
        booth: 193,
        total: 900,
        voted: 0,
        updated: 12845},
      {id: 1,
        name: "North School",
        booth: 191,
        total: 600,
        voted: 0,
        updated: 12845}
    ]
    const result = {
      error:"",
      booths: list
    }
    res.send(result);
  } catch (error) {
    console.log(error)
    const result = {
      error: "unauthorised",
      booths: []
    }
    res.send(result);
  }
});

router.post('/login', function(req, res, next) {
  const { username, password } = req.body;
  console.log(`${username} is trying to login ..`);

  if (username === "admin" && password === "admin") {
    return res.json({
      username: username,
      boothNumber: "192",
      admin: true,
      token: jsonwebtoken.sign({ user: "admin" }, JWT_SECRET),
    });
  }
  return res.json({
    username: "error",
    boothNumber: "Invalid username or password",
    admin: false,
    token: "",
  });
});

module.exports = router;
