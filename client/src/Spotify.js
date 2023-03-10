import axios from "axios";

const LOCALSTORAGE_KEYS = {
  accessToken: "spotify_access_token",
  refreshToken: "spotify_refresh_token",
  expireTime: "spotify_token_expire_time",
  timeStamp: "spotify_token_timestamp",
};

const LOCALSTORAGE_VALUES = {
  accessToken: localStorage.getItem(LOCALSTORAGE_KEYS.accessToken),
  refreshToken: localStorage.getItem(LOCALSTORAGE_KEYS.refreshToken),
  expireTime: localStorage.getItem(LOCALSTORAGE_KEYS.expireTime),
  timeStamp: localStorage.getItem(LOCALSTORAGE_KEYS.timeStamp),
};

const logOut = () => {
  for (const property in LOCALSTORAGE_KEYS) {
    localStorage.removeItem(LOCALSTORAGE_KEYS[property]);
  }

  window.location = window.location.origin;
};

const hasTokenExpired = () => {
  const { accessToken, timeStamp, expireTime } = LOCALSTORAGE_VALUES;

  if (!accessToken || !timeStamp) {
    return false;
  }
  const miliSecondElapsed = Date.now() - Number(timeStamp);
  return miliSecondElapsed / 1000 > Number(expireTime);
};

const refreshToken = async () => {
  try {
    if (
      !LOCALSTORAGE_KEYS.refreshToken ||
      LOCALSTORAGE_VALUES.refreshToken === "undefined" ||
      Date.now() - Number(LOCALSTORAGE_VALUES.timeStamp) / 1000 < 1000
    ) {
      console.log("No refresh Token");

      logOut();
    } else {
      const { data } = await axios.get(
        `/refresh_token?refresh_token=${LOCALSTORAGE_VALUES.refreshToken}`
      );

      console.log(data);
      localStorage.setItem(LOCALSTORAGE_KEYS.accessToken, data.access_token);
      localStorage.setItem(LOCALSTORAGE_KEYS.timeStamp, Date.now());
    }
  } catch (error) {
    console.log(error);
  }
};

const getAccessToken = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const queryParams = {
    [LOCALSTORAGE_KEYS.accessToken]: urlParams.get("access_token"),
    [LOCALSTORAGE_KEYS.refreshToken]: urlParams.get("refresh_token"),
    [LOCALSTORAGE_KEYS.expireTime]: urlParams.get("expires_in"),
  };
  // console.log(urlParams.get("access_token"));
  // console.log(`accessToken : ${LOCALSTORAGE_VALUES.accessToken}`);

  const hasError = urlParams.get("error") || false;

  // console.log(`hasTokenExpired()  : ${hasTokenExpired()}`);
  // console.log(`hasError : ${hasError}`);
  // console.log(
  //   `LOCALSTORAGE_VALUES.accessToken : ${LOCALSTORAGE_VALUES.accessToken}`
  // );
  // if htere is an error in fetching accessToken or localstorage is expired
  if (
    hasError ||
    hasTokenExpired() ||
    LOCALSTORAGE_VALUES.accessToken === "undefined"
  ) {
    console.log("Expired TOken");
    refreshToken();
  }

  // if ther is a valid access token in LS
  if (
    LOCALSTORAGE_VALUES.accessToken &&
    LOCALSTORAGE_KEYS.accessToken !== "undefined"
  ) {
    return LOCALSTORAGE_VALUES.accessToken;
  }

  // if user is login for the first time
  if (queryParams[LOCALSTORAGE_KEYS.accessToken]) {
    for (let property in queryParams) {
      localStorage.setItem(property, queryParams[property]);
    }
    localStorage.setItem(LOCALSTORAGE_KEYS.timeStamp, Date.now());

    return queryParams[LOCALSTORAGE_KEYS.accessToken];
  }

  return false;
};

const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export const accessToken = getAccessToken;
export const logout = logOut;
export const miliToMinAndSec = millisToMinutesAndSeconds;
// export const logout = logOut;
let access_token_value = accessToken();
// setting defautl axios setting to keep the code clean
axios.defaults.baseURL = "https://api.spotify.com/v1";
axios.defaults.headers["Authorization"] = `Bearer ${access_token_value}`;
axios.defaults.headers["Content-Type"] = "application/json";

export const getCurrentUserProfile = () => axios.get("/me");

export const getCurrentUserTopArtists = () => axios.get("/me/top/artists/");

export const getTopArtists = (time_range = "short_term") => {
  return axios.get(`/me/top/artists?time_range=${time_range}`);
};
