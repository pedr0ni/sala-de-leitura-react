import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

import firebaseConfig from './config.json'

class StorageManager {

	private storage: app.storage.Storage

	constructor() {
		app.initializeApp(firebaseConfig)
		
		this.storage = app.storage()
	}

	findImage(image: string) {
		return this.storage.ref(`/profile-images/${image}`).getDownloadURL()
	}
}

export default new StorageManager()