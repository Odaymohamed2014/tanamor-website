// إعداد Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCNAuUMR2SHcc8dzUcRV0-mnEIQJuLhqNI",
      authDomain: "tanomr-46842.firebaseapp.com",
      projectId: "tanomr-46842",
      storageBucket: "tanomr-46842.appspot.com",
      messagingSenderId: "23851598908",
      appId: "1:23851598908:web:bef95e623f21ac43f26f39",
      measurementId: "G-R1NEVPBWSB"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


document.getElementById('report-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const incident = document.getElementById('incident').value;
    const phone = document.getElementById('phone').value;

  
    db.collection("reports").add({
        incident: incident,
        phone: phone,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
        alert("تم إرسال البلاغ بنجاح!");
        document.getElementById('report-form').reset(); 
    })
    .catch((error) => {
        console.error("خطأ في إرسال البلاغ: ", error);
    });
});
