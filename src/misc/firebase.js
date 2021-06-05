import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyCTRz3U7JVoHauNwsB_f9H6F5cr0SuO9Rk',
  authDomain: 'chat-app-1c6f3.firebaseapp.com',
  projectId: 'chat-app-1c6f3',
  storageBucket: 'chat-app-1c6f3.appspot.com',
  messagingSenderId: '102670169762',
  appId: '1:102670169762:web:79b743e6cf2c379c7589fb',
};

const app = firebase.initializeApp(config);

export const auth = app.auth();
export const database = app.database();
