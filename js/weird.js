const storeData = [
    {
      name: "1,500 live ladybugs",
      price: "$3.05",
      description: "Who says you can't buy anything for under $10 anymore? In fact, Amazon shoppers can buy 1,500 crawling, flying somethings for the bargain price of a latte.",
      features: ["Live Lady Bugs", "That's it :)"],
      photo: "https://images-na.ssl-images-amazon.com/images/I/51Fyrf%2BC42L.jpg"
    },
    {
      name: "A cat butt tissue holder",
      price: "$34.94",
      description: "This seems like the nicest thing to be plucked from a cat's rear since, well, ever. And who doesn't like to be stared down with peering, inquisitive eyes each time they need to blow their nose?",
      features: ["HUMOROUS TISSUE HOLDER ", "FITS SQUARE TISSUE BOXES", "MAKES A GREAT GIFT"],
      photo: "https://images-na.ssl-images-amazon.com/images/I/71wLt4kdwkL._SL1500_.jpg"
    },
    {
      name: "Dill pickle lip balm",
      price: "$11.95",
      description: "Some people want their mouths to be minty fresh, or sweetly scented. And others just want their lips to have the distinct flavor of something that might accompany a pastrami sandwich.",
      features: ["IT’S DILL-ICIOUS", "FUNNY STOCKING STUFFERS FOR TEENS AND ADULTS "],
      photo: "https://images-na.ssl-images-amazon.com/images/I/71cqZG4mrxL._SL1000_.jpg"
    },
    {
      name: "Dancing with Cats Book",
      price: "$13.22",
      description: "If you truly love your pet, you'll do anything for them, or with them—including interpretive dance, according to this book.",
      features: ["The cult classic is back! This petite 15th anniversary hardcover reissue keeps all the original mystery and magic of cat dancing delightfully intact. Perpetually ahead of its time, Dancing with Cats presents scores of delightful and inspiring photographs of people and cats engaging in their favorite dance routines as well as moving testimonies of the personal transformations brought about through this uniquely joyous form of human-animal connection. Dancing with Cats will have a new generation of cat lovers (and their cats) jumping for joy—and cutting a rug—in no time."],
      photo: "https://images-na.ssl-images-amazon.com/images/I/51zSQro90lL._SY488_BO1,204,203,200_.jpg"
    },
    {
      name: "Roast beef bath soak",
      price: "$17.95",
      description: "The only thing more relaxing than a warm bath is a warm bath full of au jus. ",
      features: ["THE BATH JUST GOT DELICIOUS", "ME TIME, THE TASTE OF FREEDOM ", "AU JUS SO RELAXING"],
      photo: "https://images-na.ssl-images-amazon.com/images/I/71YDjo2ndmL._SL1200_.jpg"
    }
  ];

  function feature(features){
    return `
    <h4>Features</h4>
    <ul class="feature-list">
      ${features.map(feature => `<li>${feature}</li>`).join('')}
    </ul>
    `
  }

  function storeTemplate(store){
    return `
    <div class="product">
      <img class="product-photo" src="${store.photo}">
      <h2 class="product-name">${store.name} <span class="price">(${store.price})</span></h2>
      <p><strong>${store.description}</strong></p>
      ${feature(store.features)}
    </div>
  `
  }

  document.getElementById("app").innerHTML = `
    <h1 class="app-title">(${storeData.length} Results)</h1>
    ${storeData.map(storeTemplate).join('')}
    <p class="footer"> ${storeData.length} added recently. Will not update list because why?.</p>
  `
