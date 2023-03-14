
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export default db;


// Crea una referencia a la base de datos
var database = firebase.database();

// Función para enviar los datos del formulario a Firebase
function sendData() {
  var Nombre = document.getElementById("Nombre").value;
  var Apellido = document.getElementById("Apellifo").value;
  var Email = document.getElementById("Email").value;
  var Teléfono = document.getElementById("Teléfono").value;
  var Consulta = document.getElementById("Consulta").value;

  // Define los campos que quieres guardar
  var data = {
    Nombre: Nombre,
    Apellido: Apellido,
    Email: Email,
    Teléfono: Teléfono,
    Consulta: Consulta,
  }

  // Guarda los datos en la base de datos
  database.ref().child("Formulario").push(data);

  // Limpia el formulario
  document.getElementById("Nombre").value = "";
  document.getElementById("Apellido").value = "";
  document.getElementById("Email").value = "";
  document.getElementById("Teléfono").value = "";
  document.getElementById("Consulta").value = "";

  alert("¡Consulta Enviada!");
}