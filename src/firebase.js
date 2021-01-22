import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyB_O2cmmqdqg2292M9-eZVS31zCpYs-HLs',
  authDomain: 'pwa-react-firebase-dev.firebaseapp.com',
  databaseURL:
    'https://pwa-react-firebase-dev-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'pwa-react-firebase-dev',
  storageBucket: 'pwa-react-firebase-dev.appspot.com',
  messagingSenderId: '1094405605393',
  appId: '1:1094405605393:web:707af3f1c6f1fe150209b0',
});

export const auth = app.auth();
export default app;
