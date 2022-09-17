const email = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuDesplegable = document.querySelector(".menu");
const menuCarrito = document.querySelector(".navbar-shopping-cart");
const detalleProducto = document.querySelector(".product-detail");
const galeriaProductos = document.querySelector(".cards-container");

menuCarrito.addEventListener("click", toggleCarritoAside);

email.addEventListener("click", toggleDesktopMenu);
menuDesplegable.addEventListener("click", toggleMobileMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");
}
function toggleCarritoAside() {
  detalleProducto.classList.toggle("inactive");
}

const productsList = [];
productsList.push(
  {
    name: "Bike",
    price: "120",
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "jacket",
    price: "200",
    image:
      "https://images.pexels.com/photos/1476055/pexels-photo-1476055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Camera",
    price: "150",
    image:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Clock",
    price: "500",
    image:
      "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Bike",
    price: "120",
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    name: "jacket",
    price: "200",
    image:
      "https://images.pexels.com/photos/1476055/pexels-photo-1476055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Camera",
    price: "150",
    image:
      "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Clock",
    price: "500",
    image:
      "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
);

function renderProducts(products) {

    products.forEach((product) => {
    const containerCard = document.createElement("div");
    const productImg = document.createElement("img");
    const containerProduct = document.createElement("div");
    const productInfo = document.createElement("div");
  
    const productPrice = document.createElement("p");
    const productName = document.createElement("p");
    const containerCart = document.createElement("figure");
    const imageCart = document.createElement("img");
  
    containerProduct.className = "product-info";
    containerCard.className = "product-card";
    imageCart.src = "./icons/bt_add_to_cart.svg";
    imageCart.alt = "cart";

    containerCard.append(productImg,containerProduct)
    containerProduct.append(productInfo,containerCart)
    productInfo.append(productPrice,productName)
    containerCart.append(imageCart)
    productImg.src = product.image;
    productPrice.innerText = "$"+ product.price;
    productName.innerText = product.name;

    galeriaProductos.append(containerCard)

  });
}

renderProducts(productsList);
