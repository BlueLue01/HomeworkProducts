let products = [
    {
        id:0,
        name:"Apples",
        price:"2.99",
        image:"https://banner2.kisspng.com/20180310/jyw/kisspng-plum-tomato-apple-fuji-vector-two-apples-5aa49732abbf96.2950483615207360507035.jpg",
        color:"red"
    },
    {
        id:1,
        name:"Bananas",
        price:"2.50",
        image:"https://icon2.kisspng.com/20180125/cyq/kisspng-banana-powder-fruit-cavendish-banana-banana-5a6a705e555d06.3110857015169250223497.jpg",
        color:"gold"
    },
    {
        id:2,
        name:"oranges",
        price:"3.50",
        image: "https://icon2.kisspng.com/20180308/wlw/kisspng-south-africa-blood-orange-mandarin-orange-tangelo-south-africa-imports-of-oranges-5aa10d936cc6c7.6226563815205042114456.jpg",
        color:"orange"
    }
];


function popUp(put){
    let that = this;
    this.menuImageEle = document.createElement("img");
    this.menuEle = document.createElement("div");
    this.name = document.createElement("name");
    this.price = document.createElement("price");
    this.menuEle.classList.add("popUp");

    this.menuImageEle.src =products[put].image;
    this.name.innerHTML = "Name: "+ products[put].name;
    this.price.innerHTML= "Price: "+ products[put].price;

    this.menuEle.addEventListener("click", function(){
        that.menuEle.style.display="none";
    });

    this.menuEle.appendChild(this.menuImageEle);
    this.menuEle.appendChild(this.Name);
    this.menuEle.appendChild(this.price);
    document.body.appendChild(this.menuEle);
}

function op(){
    this.fruit=[];

    for(let i=0; i<products.length; i++){
        this.fruit.push(new product(products[i].name,
            products[i].price, products[i].image, i));
    }
}

function product(name, price, image, put) {
    let that = this;

    this.price = price;
    this.name = name;
    this.wrapperEle = document.createElement("div");
    this.imageEle = document.createElement("img");
    this.nameEle = document.createElement("name");
    this.priceEle = document.createElement("price")
    this.wrapperEle.classList.add("product");

    this.wrapperEle.addEventListener("mouseout", function () {
        that.wrapperEle.style.borderColor = products[put].color;
    });

    this.wrapperEle.addEventListener("mouseover", function () {
        that.wrapperEle.style.corderColor = products[put].color;

    });

    this.wrapperEle.addEventListener("click", function () {
        let pop = new popUp(put);
    });

    this.imageEle.src = image;
    this.nameEle.innerHTML = "Name: " + name;
    this.priceEle.innerHTML = "Price: " + price;

    this.wrapperEle.appendChild(this.imageEle);
    this.wrapperEle.appendChild(this.nameEle);
    this.wrapperEle.appendChild(this.priceEle);
    document.body.appendChild(this.wrapperEle);

}

let display = new op();







// DO NOT EDIT THE ARRAY TO COMPLETE THE ASSIGNMENT

// Create a div and give it a class of "popUp". Append that div to the body

// If I click on the popUp div, it should hide it

// Create a div for each item in the array above

// inside of each div, the prodcut Name and Price should be written as "Name: value" and "Price: $#.##";

// inside of each div, the product's image should be on top of the text

// when hovering over a product, its border color should change to the "color" of that product. Once you hover off, it should return to black

// When Clicking on a product, it should display the popUp Menu over all the content

// When clicking on the paticular product, that products image, name, and price should be displayed inside the popUp div just like it does in its own product div. No other products information shold be shown.

