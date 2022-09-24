import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCvlmhjVkJjOlFNiQMrtkBallZAreY9jgQ',
  authDomain: 'algotest-527c1.firebaseapp.com',
  projectId: 'algotest-527c1',
  storageBucket: 'algotest-527c1.appspot.com',
  messagingSenderId: '341044630117',
  appId: '1:341044630117:web:e03d9fecfd929aa6392c8c',
  measurementId: 'G-W8YRJWCS8R'
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore();

export { app, firestore };
