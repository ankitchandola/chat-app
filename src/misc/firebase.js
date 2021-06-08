import { Notification as Toast } from 'rsuite';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { isLocalhost } from './helpers';

const config = {
  apiKey: 'AIzaSyCTRz3U7JVoHauNwsB_f9H6F5cr0SuO9Rk',
  authDomain: 'chat-app-1c6f3.firebaseapp.com',
  databaseURL:
    'https://chat-app-1c6f3-default-rtdb.asia-southeast1.firebasedatabase.app/',
  projectId: 'chat-app-1c6f3',
  storageBucket: 'chat-app-1c6f3.appspot.com',
  messagingSenderId: '102670169762',
  appId: '1:102670169762:web:79b743e6cf2c379c7589fb',
};

export const fcmVapidKey =
  'BEHao6FWkw7iimY4s3EO7hfs3_HxcpTUv0qhjQvmWmYAAhDwZD19Ea9jMZsI96yPdqN-gv9ZC7sC2D2qHDijzDs';

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions('europe-west3');

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalhost) {
  functions.useEmulator('localhost', 5001);
}
