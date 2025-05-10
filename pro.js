
var currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
var getData = window.localStorage.getItem("userdata");
var getParseData = JSON.parse(getData);
var heading = document.getElementById('UserName');
heading.innerHTML = currentUser.firstName + " " + currentUser.lastName

var getOrder = JSON.parse(window.localStorage.getItem("PrintOrder"))

console.log(getOrder)
var cardArea = document.getElementById("cardArea")


for(var x = 0; x<getParseData.length;x++){
 if (getOrder.length == 0){
cardArea.innerHTML = `<h2>Empty<h2>`
document.getElementById("order").style.display="none"
  }
}
// console.log(getParseData[1].CardId)
    for (var j = 0; j < getOrder.length; j++) {
      cardArea.innerHTML += `
      <div class="card">
        <div class="image">
          <img src="${getOrder[j].image}" alt="">
        </div>
        <div class="cardText">
          <span class="bold">Product ID No# :</span><span>${getOrder[j].id}</span><br>
          <span class="bold">Product :</span><span>${getOrder[j].Name}</span><br>
          <span class="bold">Color :</span><span>${getOrder[j].color}</span><br>
          <span class="bold">Size :</span><span>${getOrder[j].size}</span><br>
          <span class="bold">Price :</span><span>${getOrder[j].price}</span><br>
          <button onclick="remove(this)">remove to Card</button>
        </div>
      </div>
    `;
    }
  
// order work is here*****************

// function order() {
//   for (var p = 0; p < getParseData.length; p++) {
//     if (currentUser.email == getParseData[p].email) {
//       if (!getParseData[p].CardId) {
//         getParseData[p].CardId = [];
//       }
//       for (var l = 0; l < getOrder.length; l++) {
//         getParseData[p].CardId.push(getOrder[l]);
//         console.log(getOrder[l])
        
//       }
//       getOrder.splice(0)
//       window.localStorage.setItem("PrintOrder", JSON.stringify(getOrder));
//       alert("✅Order Submit")

//     }
//   }
// }
 var orderList = JSON.parse(window.localStorage.getItem('orderList') || '[]');

function order() {
  console.log(getOrder);
  
  for(var o =0; o< getOrder.length;o++){
   orderList.push(getOrder[o]) 
   window.localStorage.setItem("orderList", JSON.stringify(orderList));
  }
  for (var p = 0; p < getParseData.length; p++) {
    if (currentUser.email == getParseData[p].email) {
      if (!getParseData[p].CardId) {
        getParseData[p].CardId = [];
      }
      console.log("umar")
      for (var l = 0; l < getOrder.length; l++) {
        getParseData[p].CardId.push(getOrder[l]);
        console.log(getOrder[l])
      }
      getOrder.splice(0)
      console.log("hello")
      window.localStorage.setItem("PrintOrder", JSON.stringify(getOrder));
      window.localStorage.setItem("userdata", JSON.stringify(getParseData));

      alert("✅Order Submit")
    }
  }
 window.location.href = "home.html"
}

// function order() {
  
  
//         for (var p = 0; p < getParseData.length; p++) {
//           if (currentUser.email == getParseData[p].email) {
//             if (!getParseData[p].CardId) {
//               getParseData[p].CardId = [];
//             }
//             for(var l = 0 ;0< getOrder.length ;l++){
//               getParseData[p].CardId.push(getOrder[l]);
//               window.localStorage.setItem("userdata", JSON.stringify(getParseData));

//             }
//             getParseData[p].CardId.push(itemsData[a]);
//             localStorage.setItem("PrintOrder", JSON.stringify(getOrder));
//           }
//         }
//         alert("✅Order Submit")
//       }
    



// card remove work is here ***********************************
function remove(e) {
  var idNode = e.parentNode.childNodes[2].textContent;
  console.log(idNode);

  for (var a = 0; a < getOrder.length; a++) {
    
      
        if (idNode == getOrder[a].id) {
        
          getOrder.splice(a, 1)
         localStorage.setItem("PrintOrder", JSON.stringify(getOrder));

          if(getOrder.length == 0){
             cardArea.innerHTML = `<h2>Empty<h2>`
             document.getElementById("order").style.display="none"
           }
        }
      }

      
        e.parentNode.parentNode.remove()
        alert("✅Cart is Removed")
    }
  



//   for (var a = 0; a < itemsData.length; a++) {
//       if (idNode == itemsData[a].id) {
//         console.log("hellow")
//       for (var b = 0; b < getParseData.length; b++) {
//         if (currentUser.email == getParseData[b].email) {
  //           if (!getParseData[b].CardId) {
    //             getParseData[b].CardId = [];
//           }
//           getParseData[b].CardId.push(itemsData[a]);
//           window.localStorage.setItem("userdata", JSON.stringify(getParseData));
//         }
//       }
//     }
//   }
//   alert("✅Order Submit")
// }

// if(cardArea.innerText = ""){
//   cardArea.innerHTML = `<h2>Empty<h2>`
// }
console.log(cardArea.innerText )