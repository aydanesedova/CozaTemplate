const myDiv = document.getElementById("cartProducts")

function getProducts() {
    myDiv.innerHTML = ``
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    cart.map((item, index) => {
        let box = document.createElement("div")
        box.className = "box"
        box.innerHTML = `
                <img src="${item.image}" alt="">
                <p>${item.title}</p>
                <button onclick="removeItem(${index})">Remove from cart</button>`
        myDiv.append(box)
    })

}
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart"))
    cart.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(cart))
    getProducts()

}
 
window.onload = () => {
    getProducts()
}
