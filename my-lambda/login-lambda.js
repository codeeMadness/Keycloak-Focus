const axios = require('axios');
var FormData = require('form-data');

const formData = new FormData();
formData.append('grant_type', 'password')
formData.append('client_id', 'admin-cli')
formData.append('scope', 'openid')
formData.append('username', 'hang.nguyen')
formData.append('password', 'P@assword')

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
    debugger;
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });