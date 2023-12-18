const renderProducts = () => {
    axios.get("https://655c83b725b76d9884fd6e9b.mockapi.io/products")
        .then((res) => {
            db = res.data
            db.map((item) => {
                let myDiv = document.createElement("div")
                myDiv.className = "myDiv"
                myDiv.innerHTML = `
            <img src="${item.image}" alt="">
            <h2>${item.title}</h2>
            <button onclick = "addToCart(${item.id})">Add to Cart</button>
            `
                products.append(myDiv)
            })
        })
}

const addToCart = (id) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem("cart", JSON.stringify(cart))
}


window.onload = () => {
    renderProducts()
}

const btn = document.getElementById("btn")
const inpSearch = document.getElementById("inpSearch")
const searchPro = document.getElementById("searchProducts")


function findByName() {
    console.log("okay");
    axios
        .get(
            `https://655c83b725b76d9884fd6e9b.mockapi.io/products`
        )
        .then((res) => {
            db = res.data;
            console.log(db);
            let filteredData = db.filter(item => item.title.toLowerCase().startsWith(inpSearch.value.toLowerCase()))
            console.log(filteredData);
            filteredData.map((item) => {
                let searchDiv = document.createElement("div");
                searchDiv.className = "SearchDiv";
                searchDiv.innerHTML = `
      
          <img src="${item.image}" alt="">    
          <h1>${item.title}</h1>
          `;
                searchPro.appendChild(searchDiv);
            });
        });

}

btn.addEventListener('click', findByName)

