import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import { getFirestore, collection, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-vXJqfpY4a63J-XSqrn8ISF9Dkxh95WY",
    authDomain: "proje12km.firebaseapp.com",
    projectId: "proje12km",
    storageBucket: "proje12km.appspot.com",
    messagingSenderId: "570957989051",
    appId: "1:570957989051:web:bd91700f94cbe34920559e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
/*
var kolyeCollection = collection(db, "Kolye");
var kupeCollection = collection(db,"Kupe")


function displayKolye(kolyeName, fiyatElementID, adElementID, renkElementID) {
    getDoc(doc(kolyeCollection, kolyeName))
      .then((doc) => {
        if (doc.exists()) {
          var kolyeData = doc.data();
          var fiyat = kolyeData.fiyat;
          var ad = kolyeData.ad;
          var renk = kolyeData.renk;
    
          // Fiyatı ve diğer bilgileri web sayfasında gösterin
          document.getElementById(fiyatElementID).textContent = "Fiyat: " + fiyat + "TL";
          document.getElementById(adElementID).textContent = ad;
          document.getElementById(renkElementID).textContent = "Renk: " + renk;
        } else {
          document.getElementById(fiyatElementID).textContent = "Ürün bulunamadı.";
        }
      })
      .catch((error) => {
        console.log("Hata: ", error);
        document.getElementById(fiyatElementID).textContent = "Fiyat alınamadı.";
      });
    }

*/

function displayTaki(takiCollection, takiName, fiyatElementID, adElementID, renkElementID) {
    getDoc(doc(takiCollection, takiName))
      .then((doc) => {
        if (doc.exists()) {
          var takiData = doc.data();
          var fiyat = takiData.fiyat;
          var ad = takiData.ad;
          var renk = takiData.renk;
    
          // Fiyatı ve diğer bilgileri web sayfasında gösterin
          document.getElementById(fiyatElementID).textContent = "Fiyat: " + fiyat + "TL";
          document.getElementById(adElementID).textContent = ad;
          document.getElementById(renkElementID).textContent = "Renk: " + renk;
        } else {
          document.getElementById(fiyatElementID).textContent = "Ürün bulunamadı.";
        }
      })
      .catch((error) => {
        console.error("Firebase Hatası: ", error);
        document.getElementById(fiyatElementID).textContent = "Fiyat alınamadı. Hata Detayı: " + error.message;
    });
}

function displayKolye(takiName, fiyatElementID, adElementID, renkElementID) {
    const kolyeCollection = collection(db, "Kolye");
    displayTaki(kolyeCollection, takiName, fiyatElementID, adElementID, renkElementID);
}

function displayKupe(takiName, fiyatElementID, adElementID, renkElementID) {
    const kupeCollection = collection(db, "Kupe");
    displayTaki(kupeCollection, takiName, fiyatElementID, adElementID, renkElementID);
}
 
function displayBileklik(takiName, fiyatElementID, adElementID, renkElementID) {
    const bileklikCollection = collection(db, "Bileklik");
    displayTaki(bileklikCollection, takiName, fiyatElementID, adElementID, renkElementID);
}

function displayYuzuk(takiName, fiyatElementID, adElementID, renkElementID) {
    const yuzukCollection = collection(db, "Yuzuk");
    displayTaki(yuzukCollection, takiName, fiyatElementID, adElementID, renkElementID);
}

    displayBileklik("kalp_bileklik","kalpfiyatId","kalpadId","kalprenkId");
    displayBileklik("ay_bileklik","ayfiyatId","ayadId","ayrenkId");
    displayKolye("parlak_kolye", "parlakfiyatGostermeElementID", "parlakadId", "parlakrenkId");
    displayKolye("kristal_kolye", "krisFiyat", "krisAd", "krisRenk");
    displayKolye("Yesil Tasli", "yesilfiyatId","yesiladId","yesilrenkId");
    displayKupe("kalp_halka","halkaFiyat","halkaAd","halkaRenk");
    displayKupe("parlak_kupe","parlakfiyatId","parlakadId","parlakrenkId");
    displayYuzuk("angel_yuzuk","angelfiyatId","angeladId","angelrenkId")
    const card = document.getElementsByClassName("taki");
    const btnAdd = document.getElementsByClassName("btn-info");
    const btnCart = document.querySelector(".btn-cart");
    const cartList = document.querySelector(".shopping-cart-list");


class Shopping{
    constructor(title,price,image){
        this.image = image;
        this.title = title;
        this.price = price;
    }
}

class UI{
    addToCart(shopping){
        const listItem = document.createElement("div");
    listItem.classList = "list-item";

    listItem.innerHTML =`
    <div class="sepet1">
<img src="${shopping.image}" alt="">
<p class="sepetisim" >${shopping.title}</p>
<p class="sepetfiyat">${shopping.price}</p>
<button class="btn btn-delete">
<i class="bi bi-trash" ></i></button>
</div>
    
    `
cartList.appendChild(listItem);
    } 
    removeCart(){
        let btnRemove = document.getElementsByClassName("btn-delete");
        let self = this;
        
        
        for (let i = 0; i < btnRemove.length; i++) {
            btnRemove[i].addEventListener("click", function(){
                this.parentElement.parentElement.remove();
                self.cartCount();
                
            })
            
        }
    }

    cartCount(){
        let cartListItem = cartList.getElementsByClassName("list-item");
        let itemCount = document.getElementById("item-count");
        itemCount.innerHTML = cartListItem.length;
    }


}



for (let i = 0; i < card.length; i++) {
    btnAdd[i].addEventListener("click",function(e){
        let title = card[i].getElementsByClassName("taki-ad")[0].textContent;
        let price = card[i].getElementsByClassName("taki-fiyat")[0].textContent;
        let image = card[i].getElementsByClassName("taki-fotosu")[0].src;
        
        let shopping=new Shopping(title,price,image);
        let ui = new  UI();
        ui.addToCart(shopping);
        ui.removeCart();
        ui.cartCount();


        e.preventDefault();
    })
    
}



function cartToggle() {
    cartList.classList.toggle("visible");
}

btnCart.addEventListener("click", cartToggle);
