const fs = require('fs');
const fetch = require('node-fetch');
const dotEnv = require( 'dotenv');
const btoa = require('btoa');

const createEmail = require('../server/createOceanEmail');

lookupUser('888888888888888888888888')
  .then(createEmail)
  .then(saveEmail);

async function lookupUser(uid) {

  if (!uid) throw Error('Invalid arg', uid);
  const { route, auth, cid, mode } = doConfig();

  const endpoint = route + uid;
  try {
    console.log(mode + '.lookup: ' + endpoint);
    let response = await fetch(endpoint, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Basic ' + btoa(auth)
      },
    });
    let json = await response.json();
    if (json.status !== 200) throw Error(JSON.stringify(json));
    return json.data;
  }
  catch (e) {
    console.error(e);
    throw e;
  }
}

function saveEmail(email, path = 'ocean.html') {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, email, (err) => {
      if (err) return reject(err);
      console.log('WROTE: '+process.cwd()+'/'+path);
      return resolve();
    });
  });
}

function doConfig() {

  // get auth from .env or heroku configs
  dotEnv.config();

  const port = 8083;
  const env = process.env;
  const path = '/api/users/';
  const host = 'localhost'
  const mode = env.NODE_ENV !== 'production' ? 'DEV' : 'PROD';

  // use https if we're in production mode
  const proto = env.NODE_ENV !== 'production' ? 'http' : 'https';

  if (!env.API_USER || !env.API_SECRET) {
    console.error('Running client without authentication; Server/DB'
      + ' will not be avaiable. Are you missing a .env file ? ');
  }

  // Here we construct server host from window.location,
  // assuming server/db is on the same host as the web-app)
  const route = proto + '://' + host + ':' + port + path;

  //const host = env.REACT_APP_API_HOST || 'http://localhost:8083';
  const auth = env.API_USER + ':' + env.API_SECRET;

  if (!auth || !auth.length) console.error("Auth required!");

  //console.log('UserSession.route: '+route);
  return { auth: auth, route: route, mode: mode };
}
