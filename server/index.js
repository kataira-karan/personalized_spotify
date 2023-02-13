const express = require("express");
require("dotenv").config();
const queryString = require("querystring");
const app = express();
let port = 5000;
const axios = require("axios");
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.method(PATH , Handler)

app.get("/login", (req, res) => {
  console.log("Login state");
  // let state = generateRandomString(16);

  let state = "abcwertyuioplkjh";
  res.cookie("stateKey", state);
  const scope = [
    "user-read-recently-played",
    "user-read-private",
    "user-read-email",
    "user-top-read",
    "user-follow-read",
  ].join(" ");

  const queryParams = queryString.stringify({
    response_type: "code",
    client_id: CLIENT_ID,
    scope: scope,
    redirect_uri: REDIRECT_URI,
    state: state,
  });

  console.log(queryParams);

  res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
});

app.get("/callback", (req, res) => {
  console.log("Callback funtion");
  const code = req.query.code || null;
  console.log(code);
  axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    data: queryString.stringify({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: REDIRECT_URI,
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${new Buffer.from(
        `${CLIENT_ID}:${CLIENT_SECRET}`
      ).toString("base64")}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        const { access_token, token_type, refresh_token, expires_in, scope } =
          response.data;
        console.log(`scope : ${scope}`);
        // axios
        //   .get("https://api.spotify.com/v1/me", {
        //     headers: {
        //       Authorization: `${token_type} ${access_token}`,
        //     },
        //   })
        //   .then((response) => {
        //     res.send(`<pre> ${JSON.stringify(response.data)} </pre>`);
        //   })
        //   .catch((error) => {
        //     res.send(error);
        //   });

        console.log(response.data);

        let queryParams = queryString.stringify({
          access_token,
          refresh_token,
          expires_in,
        });

        res.redirect(`http://localhost:3000/?${queryParams}`);

        // axios
        //   .get(
        //     `http://localhost:5000/refresh_token?refresh_token=${refresh_token}`
        //   )
        //   .then((response) => {
        //     res.send(`<pre> ${JSON.stringify(response.data)} </pre>`);
        //   })
        //   .catch((err) => {
        //     console.log("err");
        //     res.send(err);
        //   });
      } else {
        console.log("response");
        res.send(response);
        res.redirect(
          `http://localhost:3000/?${queryString.stringify({
            error: "invalid Tokens",
          })}`
        );
      }
    })
    .catch((error) => {
      console.log(error);
      res.send(error);
    });
});

app.get("/refresh_token", (req, res) => {
  const { refresh_token } = req.query;
  console.log("Refresh Token");
  axios({
    method: "post",
    url: "https://accounts.spotify.com/api/token",
    data: queryString.stringify({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }),
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${new Buffer.from(
        `${CLIENT_ID}:${CLIENT_SECRET}`
      ).toString("base64")}`,
    },
  })
    .then((respone) => {
      console.log(respone.data);
      res.send(respone.data);
    })
    .catch((error) => {
      console.log("err");
      res.send(error);
    });
});

app.listen(port, () => {
  console.log(` http://localhost:${port} `);
});
