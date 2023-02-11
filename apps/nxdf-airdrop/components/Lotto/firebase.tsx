import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
// import 'dotenv/config';

const firebaseConfig = {
  apiKey: 'AIzaSyCKtLyuE6-TDJyRwsb51s_ueWm8agevkOQ',
  authDomain: 'eminent-glider-213307.firebaseapp.com',
  databaseURL: 'https://eminent-glider-213307.firebaseio.com/',
  projectId: 'eminent-glider-213307',
  storageBucket: 'eminent-glider-213307.appspot.com',
  messagingSenderId: '135223261282',
  appId: '1:135223261282:web:6611690312708b035e393b',
  measurementId: 'Y70S028HE4'
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const dbService=getDatabase();
