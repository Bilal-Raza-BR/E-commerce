// Card Work Is Here 

var itemsData = [
    {
        id: 1,
        Name: "Jaket",
        size: "Small , Medium ,Large",
        color: "Black , Nevy Blue , white",
        image: "https://img.drz.lazcdn.com/static/pk/p/2a12c187b33b70caeff7fbdea9536846.jpg_960x960q80.jpg_.webp",
        price: "1000"
    },
    {
        id: 2,
        Name: "Shirt",
        size: "Small , Medium ,Large",
        color: "Black , Nevy Blue , white",
        image: "https://img.drz.lazcdn.com/static/pk/p/3c8626b187b2d474de201214a1c318be.jpg_960x960q80.jpg_.webp",
        price: "800"
    }
    ,
    {
        id: 3,
        Name: "Suit",
        size: "Small , Medium ,Large",
        color: "All Colors",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPVFR3l94ue7dmIOP4yQKI-vgsHVbzzxHopQ&s",
        price: "8000"
    }
    ,
    {
        id: 4,
        Name: "pents",
        size: "Small , Medium ,Large",
        color: "All Colors",
        image: "https://s.alicdn.com/@sc04/kf/A3066f9c0029648af8da7e30f592a5b96t.jpg",
        price: "1100"
    }
    ,
    {
        id: 5,
        Name: "Shoes",
        size: "Small , Medium ,Large",
        color: "Black , brown , white",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3zNmNSpi0p8B8afXLc3hZ-DCe_STgV817_A&s",
        price: "3000"
    }
    ,
    {
        id: 6,
        Name: "trouser",
        size: "Small , Medium ,Large",
        color: "Black , Nevy Blue , Gray",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMe26sxJaxoEF_bVhn2dmgeXwPkDAUDetXiyilMx7Bqb79--qbRnweBY_4Agn7ZtMcUJk&usqp=CAU",
        price: "800"
    }
    ,
    {
        id: 7,
        Name: "T-Shirt",
        size: "Small , Medium ,Large",
        color: "Black , Nevy Blue , white",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvvMhhEAXdRApYOvjMhEQlIbUwU9zwgkTdLw&s",
        price: "700"
    }
    ,
    {
        id: 8,
        Name: "Jacket",
        size: "Small , Medium ,Large",
        color: "Black , Nevy Blue , white",
        image: "https://m.media-amazon.com/images/I/71zwwEe2nLL._AC_SL1500_.jpg",
        price: "2500"
    }
    ,
    {
        id: 9,
        Name: "Hoodie",
        size: "Small , Medium ,Large",
        color: "Black , Nevy Blue , white",
        image: "https://image.made-in-china.com/202f0j00pYFbnRVhOIgt/Pullover-Men-s-Sweater-Casual-Sportswear-Hooded-Jacket-Fashion-Trend-Long-Sleeved-Top-Men-Hoodie.jpg",
        price: "1500"
    }
    ,
    {
        id: 10,
        Name: "Denim Jackit",
        size: "Small , Medium ,Large",
        color: "Black , Nevy Blue , white",
        image: "https://5.imimg.com/data5/AE/GM/VI/ANDROID-93489440/product-jpeg.jpg",
        price: "1500"
    }
    ,
    {
        id: 11,
        Name: "Shirt",
        size: "Small , Medium ,Large",
        color: "Black , Nevy Blue , white",
        image: "https://img.drz.lazcdn.com/g/kf/Sb61fc451e935451592289f7ed32b9aa7U.jpg_720x720q80.jpg",
        price: "1000"
    }
    ,
    {
        id: 12,
        Name: "Shoes",
        size: "Small , Medium ,Large",
        color: "Black , Nevy Blue , white",
        image: "https://img.drz.lazcdn.com/static/pk/p/2c445ac12f16492b1f977d2bf2e8c060.jpg_960x960q80.jpg_.webp",
        price: "3000"
    }
    ,
    {
        id: 12,
        Name: "Shoes",
        size: "Small , Medium ,Large",
        color: "Black , Nevy Blue , white",
        image: "https://img.drz.lazcdn.com/static/pk/p/2c445ac12f16492b1f977d2bf2e8c060.jpg_960x960q80.jpg_.webp",
        price: "3000"
    }
]




var cardArea = document.getElementById("cardArea")
for (var i = 0; i < itemsData.length; i++) {
    cardArea.innerHTML += `
    <div class="card">
            <div class="image">
                <img src="${itemsData[i].image}" alt="">
            </div>
            <div class="cardText">
            <span class="bold">Product ID No# :</span><span>${itemsData[i].id}</span><br>
                <span class="bold">Product :</span><span>${itemsData[i].Name}</span><br>
                <span class="bold">Color :</span><span>${itemsData[i].color}</span><br>
                <span class="bold">Size :</span><span>${itemsData[i].size}</span><br>
                <span class="bold">Price :</span><span>${itemsData[i].price}</span><br>
                <button onclick="add(this)">Add to Card</button>           </div>
        </div>
    `
}

// add to card work is here *************


var currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
var getData = window.localStorage.getItem("userdata");
var getParseData = JSON.parse(getData);
console.log(itemsData[0].id)

function add(e) {
    var idNode = e.parentNode.childNodes[2].textContent;
    console.log(idNode);
    for (var a = 0; a < itemsData.length; a++) {
        if (idNode == itemsData[a].id) {
          console.log("hellow")
        for (var b = 0; b < getParseData.length; b++) {
          if (currentUser.email == getParseData[b].email) {
            if (!getParseData[b].CardId) {
              getParseData[b].CardId = [];
            }
            getParseData[b].CardId.push(itemsData[a]);
            window.localStorage.setItem("userdata", JSON.stringify(getParseData));
          }
        }
      }
    }
    alert("✅Order Submit")
  }
  



