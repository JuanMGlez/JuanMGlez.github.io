importScripts("https://www.gstatic.com/firebasejs/10.2.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.2.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyC3F5wc5mtmuujwVsagv4G2Bcn2In2anXo",
    authDomain: "tecwave-datacenter.firebaseapp.com",
    databaseURL: "https://tecwave-datacenter-default-rtdb.firebaseio.com",
    projectId: "tecwave-datacenter",
    storageBucket: "tecwave-datacenter.appspot.com",
    messagingSenderId: "794331476636",
    appId: "1:794331476636:web:ddeaad7c20df50b3cb3359"
  });

  const messaging = firebase.messaging();
