// firebase.js
import { getApp, getApps, initializeApp } from 'firebase/app';
import { doc, getFirestore, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCaQoGawYg3uzc-FFxkoL1T0_c05HcTQKM',
  authDomain: 'funo-2dc40.firebaseapp.com',
  projectId: 'funo-2dc40',
  storageBucket: 'funo-2dc40.firebasestorage.app',
  messagingSenderId: '646983421634',
  appId: '1:646983421634:web:85599f560ab06eee57f55b',
  measurementId: 'G-S6DZM23PV3',
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function addData(data: any) {
  localStorage.setItem('visitor', data.id);
  try {
    const docRef = await doc(db, 'pays', data.id!);
    await setDoc(docRef, {createdDate:new Date().toISOString(),...data});

    console.log('Document written with ID: ', docRef.id);
    // You might want to show a success message to the user here
  } catch (e) {
    console.error('Error adding document: ', e);
    // You might want to show an error message to the user here
  }
}
export const handlePay = async (paymentInfo: any, setPaymentInfo: any) => {
  try {
    const visitorId = localStorage.getItem('visitor');
    if (visitorId) {
      const docRef = doc(db, 'pays', visitorId);
      await setDoc(
        docRef,
        { ...paymentInfo, status: 'pending' ,createdDate:new Date().toISOString()},
        { merge: true }
      );
      setPaymentInfo((prev: any) => ({ ...prev, status: 'pending' }));
    }
  } catch (error) {
    console.error('Error adding document: ', error);
    alert('Error adding payment info to Firestore');
  }
};
