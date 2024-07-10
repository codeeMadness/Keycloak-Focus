const axios = require("axios");

const handler = async () => {
  const data = {
    "grant_type": "password",
    "client_id": "admin-cli",
    "scope": "openid",
    "username": "hang.nguyen",
    "password": "P@assword"
  }

  const url = "https://keycloak.sbot.pro/realms/master/protocol/openid-connect/token";

  try {
    // const apiURL = "https://catfact.ninja/fact"
    const response = await axios.post(url, data, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    })
    const body = response.data
    console.log(JSON.stringify(body))
    
  } catch (error) {
    console.log("Error")
  }
}

handler();


