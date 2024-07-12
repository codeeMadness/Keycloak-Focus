const axios = require("axios");

const handler = async () => {
  const data = {
    "grant_type": "client_credentials",
    "client_id": "mydemoclient",
    "client_secret": "u99JjZe5HN4QiNt9Mms5oQrfPdSOPjC3",
    // "scope": "openid",
    // "username": "hang.nguyen",
    // "password": "P@assword"
  }

  const url = "https://keycloak.sbot.pro/realms/hang/protocol/openid-connect/token";

  try {
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