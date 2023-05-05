const products = [
    { name: "Macbook Air", price: 180000, ram: 16 },
    { name: "Samsung Galaxy M21", price: 13999, ram: 4 },
    { name: "Redmi Note 9", price: 11999, ram: 4 },
    { name: "OnePlus 8T 5G", price: 45999, ram: 12 },
    { name: "Macbook Air", price: 180001, ram: 16 },
    { name: "Samsung Galaxy M21", price: 23444, ram: 4 },
    { name: "Redmi Note 9", price: 12000, ram: 4 },
    { name: "OnePlus 8T 5G", price: 50000, ram: 12 },
    { name: "Macbook Air", price: 180022, ram: 16 },
    { name: "Samsung Galaxy M21", price: 14003, ram: 4 },
    { name: "Redmi Note 9", price: 12003, ram: 4 },
    { name: "OnePlus 8T 5G", price: 50023, ram: 12 },
    { name: "Macbook Air", price: 44444, ram: 16 },
    { name: "Samsung Galaxy M21", price: 289459, ram: 4 },
    { name: "Redmi Note 9", price: 28748, ram: 4 },
    { name: "OnePlus 8T 5G", price: 2939, ram: 12 },
    { name: "Macbook Air", price: 37848, ram: 16 },
    { name: "Samsung Galaxy M21", price: 28737, ram: 4 },
    { name: "Redmi Note 9", price: 94764, ram: 4 },
    { name: "OnePlus 8T 5G", price: "3774", ram: 12 },
    { name: "Macbook Air", price: 56859, ram: 16 },
    { name: "Samsung Galaxy M21", price: 288393, ram: 4 },
    { name: "Redmi Note 9", price: 847764, ram: 4 },
    { name: "OnePlus 8T 5G", price: 49492, ram: 12 },
    { name: "Macbook Air", price: 587575, ram: 16 },
    { name: "Samsung Galaxy M21", price: 834884, ram: 4 },
    { name: "Redmi Note 9", price: 646643, ram: 4 },
    { name: "OnePlus 8T 5G", price: 3344556, ram: 12 },
    { name: "Macbook Air", price: 445667, ram: 16 },
    { name: "Samsung Galaxy M21", price: 45566, ram: 4 },
    { name: "Redmi Note 9", price: 7654, ram: 4 },
    { name: "OnePlus 8T 5G", price: 23456, ram: 12 },
    { name: "Macbook Air", price: 6788, ram: 16 },
    { name: "Samsung Galaxy M21", price: 34235, ram: 4 },
    { name: "Redmi Note 9", price: 57567, ram: 4 },
    { name: "OnePlus 8T 5G", price: 243665, ram: 12 },
    { name: "Macbook Air", price: 55678, ram: 16 },
    { name: "Samsung Galaxy M21", price: 887765, ram: 4 },
    { name: "Redmi Note 9", price: 34567, ram: 4 },
    { name: "OnePlus 8T 5G", price: 2344356, ram: 12 }
];

//const sortByDropdown = document.querySelector(".sort-by");
const sortOrderDropdown = document.querySelector(".sort-order");
const container = document.querySelector(".products");

const displayProducts = (products) => {
    let result = "";


    //products.forEach(() => {
    //var i = 0;
    //result += '<div class = "productRow">'
    products.forEach(({ name, price, ram }) => {
        result += `
     <div class="product" style="width: 25%;">
      <div><strong>Name:</strong><span>${name}</span></div>
      <div><strong>Price:</strong><span>${price}</div>
      <div><strong>Ram:</strong><span>${ram} GB</div>
     </div>
    `;
    })
    //result += "</div>";
    // i = i + 1;
    //});

    container.innerHTML = result;
    //gridView();
};

// const ascendingSort = (sortByValue) => {
//     return products.sort((a, b) => {
//         if (a[sortByValue] < b[sortByValue]) return -1;
//         if (a[sortByValue] > b[sortByValue]) return 1;
//         return 0;
//     });
// };

// const descendingSort = (sortByValue) => {
//     return products.sort((a, b) => {
//         if (a[sortByValue] < b[sortByValue]) return 1;
//         if (a[sortByValue] > b[sortByValue]) return -1;
//         return 0;
//     });
// };


function sortingOrderFunction() {

    var sortByValue = document.getElementById("sortOrder");
    var value = sortByValue.value;
    //const x = document.getElementsByClassName("product").value;
    if (value === "desc") {
        displayProducts(products.sort((a, b) => {
            if (a["price"] < b["price"]) return 1;
            if (a["price"] > b["price"]) return -1;
            return 0;
        }))
    }
    else {
        displayProducts(products.sort((a, b) => {
            if (a["price"] < b["price"]) return -1;
            if (a["price"] > b["price"]) return 1;
            return 0;
        }))
    }
}

// sortByDropdown.addEventListener("change", () => {
//     const sortByValue = sortByDropdown.value; // price or ram value
//     const sortOrderValue = sortOrderDropdown.value; // asc or desc value

//     const sorted =
//         sortOrderValue === "desc"
//             ? descendingSort(sortByValue)
//             : ascendingSort(sortByValue);

//     displayProducts(sorted);
// });

// sortOrderDropdown.addEventListener("change", () => {
//     const event = new Event("change");
//     const sortByValue = sortByDropdown.value;

//     if (sortByValue) {
//         sortByDropdown.dispatchEvent(event);
//     }
// });

displayProducts(products);

var elements = document.getElementsByClassName("product");

//var items = document.getElementsByClassName("product");

// Declare a loop variable
var i;

// List View
function listView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "50%";
        //items[i].style.width = "100%";
    }
    var btnGrid = document.getElementById("buttonGrid");
    btnGrid.className = className.replace(" active", "");
}

// Grid View
function gridView() {
    for (i = 0; i < elements.length; i++) {
        elements[i].style.width = "25%";
    }
}

// window.onclick = function (e) {
//     if (!e.target.matches('.dropbtn')) {
//         var myDropdown = document.getElementById("myDropdown");
//         if (myDropdown.classList.contains('show')) {
//             myDropdown.classList.remove('show');
//         }
//     }
// }

/* Optional: Add active class to the current button (highlight it) */
var buttonContainer = document.getElementById("filters");
var btns = buttonContainer.getElementsByClassName("btn");
console.log(btns.length);
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("btn");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


