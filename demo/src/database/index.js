import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// const config =
// 	import.meta.env.MODE === 'development'
// 		? JSON.parse(import.meta.env.VITE_APP_FIREBASE_CONFIG)
// 		: JSON.parse(import.meta.env.VITE_APP_FIREBASE_CONFIG_PUBLIC)

const config = {
	apiKey: 'AIzaSyBvD5Pdw7xPvmgmd9IAIi1cjKuzx6EJDX0',
	authDomain: 'dating-demo-c61ce.firebaseapp.com',
	projectId: 'dating-demo-c61ce',
	storageBucket: 'dating-demo-c61ce.appspot.com',
	messagingSenderId: '200243273967',
	appId: '1:200243273967:web:0b4c048dbee50926d9fb1a',
	measurementId: 'G-K50VJ6B578'
}
initializeApp(config)

export const firestoreDb = getFirestore()
export const realtimeDb = getDatabase()
export const storage = getStorage()
