import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  //   signInWithGooglePopup,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const db = getFirestore();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInWithGoogleRedirect = () =>
//   signInWithRedirect(auth, provider);

// const analytics = getAnalytics(app);

export const createUserDocumentFromAuth = async (
  userAuth: any,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = getDoc(userDocRef);
  if (!(await userSnapShot).exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (e: any) {
      console.log("Error creating the user", e.message);
    }
  }
  return userDocRef;
};

// export const signInAuthWithEmailAndPassword = async (form) => {
//   const { email, password } = form;
//   if (!email || !password) return;

//   try {
//     return await signInWithEmailAndPassword(auth, email, password);
//   } catch (e) {
//     console.log("Error creating the user", e.message);
//     throw e;
//   }
// };

export const signOutUser = async () => {
  await signOut(auth);
};
//   return userDocRef;

export const onAuthStateChangedListener = (callback: any) =>
  // if(!callback) return "Error";
  onAuthStateChanged(auth, callback);
