const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTHDOMAIN,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID,
    appId: process.env.APPID
  };

  //console.log(firebaseConfig.apiKey)

  /**     apiKey: "AIzaSyD6Z575qFeTguduz0cM2Od-G9X0BresTO4",
    authDomain: "product-hunt-e7c0e.firebaseapp.com",
    projectId: "product-hunt-e7c0e",
    storageBucket: "product-hunt-e7c0e.appspot.com",
    messagingSenderId: "323625103137",
    appId: "1:323625103137:web:eb4d986077fe2b9dd7d860"*/

  export default firebaseConfig;