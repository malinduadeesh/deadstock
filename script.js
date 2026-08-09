/* =====================================================
   DEADSTOCK CO.
   MULTI-IMAGE PRODUCT + SIZE + CART SYSTEM
   ===================================================== */


/* ================= WHATSAPP ================= */

const WHATSAPP_NUMBER = "94789432498";



/* ================= PRODUCTS ================= */

const products = [

    {
        id: 1,
        name: "Men's striped Polo Tshirt",
        category: "tops",
        category: "mens",
        price: 6500,
        sizes: ["S", "M", "L", "XL", "XXL"],
        stock: 5,
        tag: "LIMITED",

        images: [
            "images/tee1-front.png",
            "images/tee1-back.png",
            "images/tee1-detail.png"
            
        ]
    },


    {
        id: 2,
        name: "Men's striped Polo Tshirt",
        category: "tops",
        category: "mens",
        price: 6500,
        sizes: ["S", "M", "L", "XL", "XXL"],
        stock: 5,
        tag: "LIMITED",

        images: [
            "images/tee2-front.png",
            "images/tee2-back.png",
            "images/tee2-detail.png"
        ]
    },


    {
        id: 3,
        name: "Men's striped Polo Tshirt",
        category: "tops",
        category: "mens",
        price: 6500,
        sizes: ["S", "M", "L", "XL", "XXL"],
        stock: 5,
        tag: "LIMITED",

        images: [
            "images/tee3-front.png",
            "images/tee3-back.png",
            "images/tee3-detail.png"
        ]
    },


    {
        id: 4,
        name: "Men's striped Polo Tshirt",
        category: "tops",
       category: "mens",
        price: 6500,
        sizes: ["S", "M", "L", "XL", "XXL"],
        stock: 5,
        tag: "LIMITED",

        images: [
            "images/tee4-front.png",
            "images/tee4-back.png",
            "images/tee4-detail.png"
        ]
    },


    {
        id: 5,
        name: "Men's striped Polo Tshirt",
        category: "tops",
        category: "mens",
        price: 6500,
        sizes: ["S", "M", "L", "XL", "XXL"],
        stock: 5,
        tag: "LIMITED",

        images: [
            "images/tee5-front.png",
            "images/tee5-back.png",
            "images/tee5-detail.png"
        ]
    },


    {
        id: 6,
        name: "Men's striped Polo Tshirt",
        category: "tops",
        category: "mens",
        price: 6500,
        sizes: ["S", "M", "L", "XL", "XXL"],
        stock: 5,
        tag: "LIMITED",

        images: [
            "images/tee6-front.png",
            "images/tee6-back.png",
            "images/tee6-detail.png"
        ]
    },


     {
        id: 7,
        name: "Men's striped Polo Tshirt",
        category: "tops",
        category: "mens",
        price: 6500,
        sizes: ["S", "M", "L", "XL", "XXL"],
        stock: 5,
        tag: "LIMITED",

        images: [
            "images/tee7-front.png",
            "images/tee7-back.png",
            "images/tee7-detail.png"
        ]
    }

];


/* ================= CART ================= */

let cart =
    JSON.parse(
        localStorage.getItem("deadstockCart")
    ) || [];


/* ================= SIZE ================= */

let selectedSizes = {};


/* ================= IMAGE INDEX ================= */

let imageIndexes = {};


/* ================= ELEMENTS ================= */

const productsContainer =
    document.getElementById("products");

const cartButton =
    document.getElementById("cartButton");

const cartCount =
    document.getElementById("cartCount");

const cartElement =
    document.getElementById("cart");

const closeCartButton =
    document.getElementById("closeCart");

const overlay =
    document.getElementById("overlay");

const cartItems =
    document.getElementById("cartItems");

const cartTotal =
    document.getElementById("cartTotal");

const whatsappOrder =
    document.getElementById("whatsappOrder");

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");


/* ================= PRICE ================= */

function formatPrice(price) {

    return "LKR " + price.toLocaleString();

}


/* =====================================================
   DISPLAY PRODUCTS
   ===================================================== */

function displayProducts(category = "all") {

    productsContainer.innerHTML = "";


    const filteredProducts =
        products.filter(product => {

            if (category === "all") {

                return true;

            }

            return product.category === category;

        });


    filteredProducts.forEach(product => {

        if (imageIndexes[product.id] === undefined) {

            imageIndexes[product.id] = 0;

        }


        const currentImage =
            product.images[
                imageIndexes[product.id]
            ];


        const article =
            document.createElement("article");


        article.className = "product";


        /* ================= IMAGE ================= */

        article.innerHTML = `

            <div class="product-image">

                <span class="product-tag">

                    ${product.tag}

                </span>


                <img

                    id="product-image-${product.id}"

                    src="${currentImage}"

                    alt="${product.name}"

                    class="zoomable-image"

                    onclick="openImageZoom(${product.id})"

                >


                ${
                    product.images.length > 1

                    ? `

                    <button

                        class="image-arrow image-prev"

                        onclick="
                            changeProductImage(
                                ${product.id},
                                -1
                            )
                        ">

                        ‹

                    </button>


                    <button

                        class="image-arrow image-next"

                        onclick="
                            changeProductImage(
                                ${product.id},
                                1
                            )
                        ">

                        ›

                    </button>

                    `

                    : ""

                }


                ${
                    product.images.length > 1

                    ? `

                    <div class="image-dots">

                        ${product.images.map(
                            (image, index) => `

                            <button

                                class="
                                    image-dot
                                    ${
                                        index ===
                                        imageIndexes[
                                            product.id
                                        ]
                                        ? "active"
                                        : ""
                                    }
                                "

                                onclick="
                                    setProductImage(
                                        ${product.id},
                                        ${index}
                                    )
                                ">

                            </button>

                        `).join("")}

                    </div>

                    `

                    : ""

                }

            </div>


            <div class="product-info">

                <h3>

                    ${product.name}

                </h3>


                <div class="product-meta">

                    <span>

                        ${product.stock} AVAILABLE

                    </span>

                </div>


                <div class="product-price">

                    ${formatPrice(product.price)}

                </div>


                <div class="size-title">

                    SELECT SIZE

                </div>


                <div class="size-options">

                    ${product.sizes.map(
                        size => `

                        <button

                            class="size-button"

                            onclick="
                                selectSize(
                                    ${product.id},
                                    '${size}',
                                    this
                                )
                            ">

                            ${size}

                        </button>

                    `).join("")}

                </div>


                <button

                    class="add-button"

                    onclick="
                        addToCart(
                            ${product.id}
                        )
                    ">

                    ADD TO BAG +

                </button>

            </div>

        `;


        productsContainer.appendChild(article);

    });

}


/* =====================================================
   CHANGE PRODUCT IMAGE
   ===================================================== */

function changeProductImage(
    productId,
    direction
) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) {

        return;

    }


    let current =
        imageIndexes[productId] || 0;


    current += direction;


    if (current < 0) {

        current =
            product.images.length - 1;

    }


    if (current >= product.images.length) {

        current = 0;

    }


    imageIndexes[productId] = current;


    updateProductImage(productId);

}


/* =====================================================
   SET SPECIFIC IMAGE
   ===================================================== */

function setProductImage(
    productId,
    index
) {

    imageIndexes[productId] = index;


    updateProductImage(productId);

}


/* =====================================================
   UPDATE IMAGE WITHOUT RELOADING EVERYTHING
   ===================================================== */

function updateProductImage(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) {

        return;

    }


    const image =
        document.getElementById(
            `product-image-${productId}`
        );


    if (image) {

        image.src =
            product.images[
                imageIndexes[productId]
            ];

    }


    /*
       Update dots
    */

    const productCard =
        image?.closest(".product");


    if (!productCard) {

        return;

    }


    const dots =
        productCard.querySelectorAll(
            ".image-dot"
        );


    dots.forEach(
        (dot, index) => {

            dot.classList.toggle(
                "active",

                index ===
                imageIndexes[productId]

            );

        }
    );

}


/* =====================================================
   SELECT SIZE
   ===================================================== */

function selectSize(
    productId,
    size,
    button
) {

    selectedSizes[productId] =
        size;


    const parent =
        button.parentElement;


    parent
        .querySelectorAll(".size-button")
        .forEach(btn => {

            btn.classList.remove(
                "selected"
            );

        });


    button.classList.add(
        "selected"
    );

}


/* =====================================================
   ADD TO CART
   ===================================================== */

function addToCart(productId) {

    const product =
        products.find(
            item => item.id === productId
        );


    if (!product) {

        return;

    }


    const selectedSize =
        selectedSizes[productId];


    if (!selectedSize) {

        alert(
            "Please select a size first."
        );

        return;

    }


    const alreadyInCart =
        cart.some(item =>

            item.productId === productId &&
            item.size === selectedSize

        );


    if (alreadyInCart) {

        alert(
            "This item and size is already in your bag."
        );

        openCart();

        return;

    }


    cart.push({

        productId: productId,

        size: selectedSize

    });


    saveCart();


    openCart();

}


/* =====================================================
   REMOVE FROM CART
   ===================================================== */

function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

}


/* =====================================================
   SAVE CART
   ===================================================== */

function saveCart() {

    localStorage.setItem(

        "deadstockCart",

        JSON.stringify(cart)

    );


    updateCart();

}


/* =====================================================
   UPDATE CART
   ===================================================== */

function updateCart() {

    cartCount.textContent =
        cart.length;


    if (cart.length === 0) {

        cartItems.innerHTML = `

            <p class="empty-cart">

                Your bag is empty.

            </p>

        `;


        cartTotal.textContent =
            "LKR 0";


        return;

    }


    let total = 0;


    cartItems.innerHTML = "";


    cart.forEach(
        (cartItem, index) => {

            const product =
                products.find(
                    item =>
                        item.id ===
                        cartItem.productId
                );


            if (!product) {

                return;

            }


            total += product.price;


            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "cart-item";


            item.innerHTML = `

                <div class="cart-thumbnail">

                    <img
                        src="${product.images[0]}"

                        alt="${product.name}"
                        class="zoomable-image"
                        onclick="openImageZoom(${product.id})"

                    >

                </div>


                <div>

                    <h4>

                        ${product.name}

                    </h4>


                    <small>

                        SIZE:

                        <strong>

                            ${cartItem.size}

                        </strong>

                        <br>

                        ${formatPrice(
                            product.price
                        )}

                    </small>

                </div>


                <button

                    class="remove-button"

                    onclick="
                        removeFromCart(
                            ${index}
                        )
                    ">

                    REMOVE

                </button>

            `;


            cartItems.appendChild(item);

        }
    );


    cartTotal.textContent =
        formatPrice(total);

}


/* =====================================================
   OPEN CART
   ===================================================== */

function openCart() {

    cartElement.classList.add(
        "open"
    );

    overlay.classList.add(
        "show"
    );

}


/* =====================================================
   CLOSE CART
   ===================================================== */

function closeCart() {

    cartElement.classList.remove(
        "open"
    );

    overlay.classList.remove(
        "show"
    );

}


/* =====================================================
   WHATSAPP ORDER
   ===================================================== */

function sendWhatsAppOrder() {

    if (cart.length === 0) {

        alert(
            "Your bag is empty."
        );

        return;

    }


    let message =
        "Hi Deadstock Clo.!%0A%0A";


    message +=
        "I want to order:%0A%0A";


    let total = 0;


    cart.forEach(
        cartItem => {

            const product =
                products.find(
                    item =>
                        item.id ===
                        cartItem.productId
                );


            if (!product) {

                return;

            }


            total +=
                product.price;


            message +=
                "• " +
                product.name +
                "%0A";


            message +=
                "  Size: " +
                cartItem.size +
                "%0A";


            message +=
                "  Price: " +
                formatPrice(
                    product.price
                ) +
                "%0A%0A";

        }
    );


    message +=
        "TOTAL: " +
        formatPrice(total);


    message +=
        "%0A%0AName:%0A";


    message +=
        "Address:%0A";


    message +=
        "Phone:%0A";


    const whatsappURL =

        "https://wa.me/" +

        WHATSAPP_NUMBER +

        "?text=" +

        message;


    window.open(
        whatsappURL,
        "_blank"
    );

}


/* =====================================================
   FILTERS
   ===================================================== */

const filterButtons =
    document.querySelectorAll(
        ".filter"
    );


filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(
                    item => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                displayProducts(
                    button.dataset.filter
                );

            }
        );

    }
);


/* =====================================================
   CART EVENTS
   ===================================================== */

cartButton.addEventListener(
    "click",
    openCart
);


closeCartButton.addEventListener(
    "click",
    closeCart
);


overlay.addEventListener(
    "click",
    closeCart
);


whatsappOrder.addEventListener(
    "click",
    sendWhatsAppOrder
);


/* =====================================================
   MOBILE MENU
   ===================================================== */

menuButton.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle(
            "open"
        );

    }
);


document
    .querySelectorAll(
        ".navbar nav a"
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove(
                    "open"
                );

            }
        );

    });


/* =====================================================
   START
   ===================================================== */

displayProducts();

updateCart();

/* =====================================================
   PRODUCT IMAGE ZOOM
   ===================================================== */

function openImageZoom(productId) {

    const product = products.find(
        item => item.id === productId
    );

    if (!product) return;

    window.zoomProductId = productId;

    const currentIndex =
        imageIndexes[productId] || 0;

    document.getElementById("zoomImage").src =
        product.images[currentIndex];

    document
        .getElementById("imageZoomOverlay")
        .classList.add("show");
}


function closeImageZoom() {

    document
        .getElementById("imageZoomOverlay")
        .classList.remove("show");
}


function changeZoomImage(direction) {

    const productId =
        window.zoomProductId;

    const product =
        products.find(
            item => item.id === productId
        );

    if (!product) return;

    let current =
        imageIndexes[productId] || 0;

    current += direction;

    if (current < 0) {
        current = product.images.length - 1;
    }

    if (current >= product.images.length) {
        current = 0;
    }

    imageIndexes[productId] = current;

    document.getElementById("zoomImage").src =
        product.images[current];
}
