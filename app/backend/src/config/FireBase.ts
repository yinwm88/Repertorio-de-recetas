import firebase from 'firebase/compat/app';
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";

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

    public subirImagen( imagen: string, nombre: string ) {
        const storage = getStorage();
        const storageRef = ref( storage, `imagenes/${ nombre }`);
        uploadString( storageRef, imagen, 'base64' )
        .then( (snapshot) => {
            console.log('Uploaded a blob or file!');
          
            getDownloadURL( storageRef ).then((url) => {
              console.log('File available at', url);
            }).catch((error) => {
              console.error(error);
            });
        }).catch((error) => {
            console.error(error);
        });
    }
}