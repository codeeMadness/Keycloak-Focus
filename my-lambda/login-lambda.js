const axios = require('axios');

const data = {
    'grant_type': 'password',
    'client_id': 'admin-cli',
    'scope': 'openid',
    'username': 'hang.nguyen',
    'password': 'P@assword'
}

const url = 'https://keycloak.sbot.pro/realms/master/protocol/openid-connect/token';

axios.post(url, data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });