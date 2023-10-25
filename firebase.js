// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "@firebase/storage";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* 
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
};
*/

const firebaseConfig ={
  apiKey: "AIzaSyDTK7_iATJGpdN9GFzGGsJTZYOQ_JUf2IA",
  authDomain: "instagram-87f68.firebaseapp.com",
  projectId: "instagram-87f68",
  storageBucket: "instagram-87f68.appspot.com",
  messagingSenderId: "397323890679",
  appId: "1:397323890679:web:15b70f8dc646225be048f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/** 대부분의 값을 저장하는 DB */
export const firestore = getFirestore(app);
/** 이미지만을 저장하기 위한 저장소 */
export const storage = getStorage(app);
/** 로그인을 관리하기 위한 도구 */
export const auth = getAuth(app);

// CRUD
// create, read, update, delete
//