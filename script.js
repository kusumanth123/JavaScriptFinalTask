let productBox = document.querySelector("#product-box");
let loading = document.querySelector("#loading");
let error = document.querySelector("#error");
fetch("https://fakestoreapi.com/products/")
    .then((response) => {
        if (response.ok) {
            return response.json()
        } else {
            loading.style.display = "none"
            error.textContent = "Failed to fetch products"
            return null
        }
    })
    .then((products) => {
        loading.style.display = "none"
        if (products === null) {
            return
        }
        products.forEach((product) => {
            productBox.innerHTML += `
                <div class="product-card">
                    <img class="product-image" src="${product.image}" alt="${product.title}">
                    <h2 class="product-title"> ${product.title.slice(0, 60)}</h2>
                    <p class="product-category"> ${product.category} </p>
                    <p class="product-description">${product.description.slice(0, 120)}</p>
                </div>
                `
        })
    })
    .catch((err) => {
        loading.style.display = "none"
        error.textContent = "Error: " + err.message
        console.error(err)
    })
    .finally(() => {
        console.log("API called")
    })
