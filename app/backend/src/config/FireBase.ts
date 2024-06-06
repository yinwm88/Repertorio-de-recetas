import firebase from 'firebase/compat/app';
import { getDownloadURL, getStorage, ref, uploadBytes, uploadString } from "firebase/storage";

import {v4} from 'uuid';
export class FireBase {
    public firebaseConfig = {
        apiKey: "AIzaSyANcpENUNjxjkpxNJNeoe4n8tl-x124IWU",
        authDomain: "cookmaster-add3b.firebaseapp.com",
        databaseURL: "https:cookmaster-add3b-default-rtdb.firebaseio.com",
        projectId: "cookmaster-add3b",
        storageBucket: "cookmaster-add3b.appspot.com",
        messagingSenderId: "703136688698",
        appId: "1:703136688698:web:7ae455192b9214f6846303",
        measurementId: "G-WHZBTSE5QL"
    };
    
    constructor() {
        firebase.initializeApp( this.firebaseConfig );
    }    

    public  async subirImagen( imagen: any ) {
        const storage = getStorage();
        const storageRef = ref( storage, `images/${ v4() }` );
        await uploadBytes( storageRef, imagen );
        const url = await getDownloadURL( storageRef );

        return url;
    }
}