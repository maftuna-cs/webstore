/******* GLOABL VARIABLES/DATA ********/

const settings = {
  notifySeatsRemaining: 5,
  productsPerPage: 3,
  // imagePath: 'img/'
}

const shoppingCart = [
  {productid: 101, qty: 1}
];

const allProducts = [
  { // 0
    id: 101, 
    name: `A Chevron Detail Point Toe Flat Loafers`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/07/15731206694c5f1df63ea8ba8d344656a9b372ff7d_thumbnail_900x.webp`,
    price: `45`,
    color: [`Khaki, Beige`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 5,
    category: null,
  },{  // 1
    id: 102, 
    name: `Suede Chunky Heeled Ankle Boots`,
    img: `img/img-02.jpg`,
    price: `90`,
    color: [`Beige, Black`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 4,
    category: `development`,
  },{ // 2
    id: 103, 
    name: `Strap Ballet Flats`,
    img: `img/img-02.jpg`,
    price: `90`,
    color: [`Beige, Black`],
    size: [35,36,37,38,39],
    qty: false,
    rating: 4,
    category: `Flats`,
  },{ // 3
    id: 104, 
    name: `Point Toe Embossed Stiletto Heels`,
    img: `img/img-02.jpg`,
    price: `90`,
    color: [`Beige, Black`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 4,
    category: `flats`,
    available: 0
  },{ // 4
    id: 105, 
    name: `Metal Decor Flat Mules`,
    img: `https://img.ltwebstatic.com/images2_pi/2019/04/12/15550561893993284564_thumbnail_900x1199.webp`,
    price: `90`,
    color: [`Beige, Black`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 4,
    category: `development`,
  },{
    id: 106, 
    name: `Flat Loafers`,
    img: `https://img.ltwebstatic.com/images2_pi/2019/07/15/1563187969227323736_thumbnail_900x1199.webp`,
    price: `90`,
    color: [`Black, Tan`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 5,
    category: null,
  },{
    id: 107, 
    name: `Lmond Toe Side Goring Block Heel Ankle Boots`,
    img: `https://img.ltwebstatic.com/images2_pi/2019/08/01/15646517064065547572_thumbnail_900x1199.webp`,
    price: `90`,
    color: [`Black, Tan`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 5,
    category: null,
  },{
    id: 108, 
    name: `Rhinestone & Pearl Decor Plaid Flats`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/01/15725879729bd519b5c80256013d7e575f61fabe46_thumbnail_900x.webp`,
    price: `90`,
    color: [`Black, Tan`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 5,
    category: null,
  },{
    id: 106, 
    name: `Studded Decor Point Toe Flats`,
    img: `https://img.ltwebstatic.com/images2_pi/2019/04/17/15554883673784057751_thumbnail_900x1199.webp`,
    price: `90`,
    color: [`Black, Tan`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 5,
    category: null,
  },{
    id: 106, 
    name: `Faux Pearl Decor Buckle Strap Flats`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/07/1573121904bbf3ee061cae0cc094c7b3284f1c1cd8_thumbnail_900x.webp`,
    price: `90`,
    color: [`Black, Tan`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 5,
    category: null,
  },
  { // 0
    id: 101, 
    name: `Monogram Motif Leather Ankle Boots`,
    img: `img/img-02.jpg`,
    price: `90`,
    color: [`Black, Tan`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 5,
    category: null,
  },{  // 1
    id: 102, 
    name: `Letter Graphic Lace-Up Front Chunky Sneakers`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/08/15732185642ac0600aeb7b018542944946a30ac1d7_thumbnail_900x.webp`,
    price: `90`,
    color: [`Beige, Black`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 4,
    category: `development`,
  },{ // 2
    id: 103, 
    name: `Toddler Girls Jewelled Decor Glitter Flats`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/09/15732975501a3b61309626809b8b25041ca3e6ed22_thumbnail_900x.webp`,
    price: `90`,
    color: [`Beige, Black`],
    size: [35,36,37,38,39],
    qty: false,
    rating: 4,
    category: `design`,
  },{ // 3
    id: 104, 
    name: `Baby Girl Deer Design Faux Fur Lined Knit Boots`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/06/157303094067574d17d46f92044b2b18427b2f15cf_thumbnail_900x.webp`,
    price: `90`,
    color: [`One Color`],
    size: [19,20,21],
    qty: true,
    rating: 4,
    category: `design`,
    available: 0
  },{ // 4
    id: 105, 
    name: `Baby Girl Bow Decor Flats`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/10/28/15722574028efca64a36ecf197b3d0f3173fea02f6_thumbnail_900x.webp`,
    price: `90`,
    color: [`Beige, Black`],
    size: [19,20,21],
    qty: true,
    rating: 4,
    category: `development`,
  },{
    id: 106, 
    name: `Rhinestone & Bow Decor Glitter Flats`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/21/157432133935dbe629ced96fbbf59575cdd26068f2_thumbnail_900x.webp`,
    price: `90`,
    color: [`Black, Tan`],
    size: [19,20,21],
    qty: true,
    rating: 5,
    category: 'flats',
  },{
    id: 107, 
    name: `Cartoon Embroidered Fluffy Flats`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/09/25/1569400241a0fc38976f68ac85d48c9929b84a290f_thumbnail_900x.webp`,
    price: `90`,
    color: [`Black, Tan`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 5,
    category: null,
  },{
    id: 108, 
    name: `Double Strap Flat Loafers`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/10/12/1570870578d104b7091eed877d2009361e4ff3ac90_thumbnail_900x.webp`,
    price: `90`,
    color: [`Black, Tan`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 5,
    category: null,
  },{
    id: 106, 
    name: `Decor Point Toe Slingback Flats`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/26/15747622365eb869ac4121c6b94765a1699f4e777f_thumbnail_900x.webp`,
    price: `90`,
    color: [`Black, Tan`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 5,
    category: null,
  },{
    id: 106, 
    name: `Flat Loafers`,
    img: `img/img-02.jpg`,
    price: `90`,
    color: [`Black, Tan`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 5,
    category: null,
  }
 
];


/************* FUNCTIONS *************/


const addItemToCart = productid => {
  // [ {productid: 101, qty: 1} ]

  const cartItem = shoppingCart.find(item => item.productid == productid);

  if (cartItem) {  // if a cartItem was found
    cartItem.qty++;
  } else {
    shoppingCart.push({productid: productid, qty: 1});
  }
  
  // if (this id already exist in the Array) {
  //   Update the quantity of the item
  // } else if (it does not exist) {
  //   Add a new item to the shoppingCart
  // }

  // Is it important to return a value here? 
  //    Why would we? Why not?
  // What else might we need/want this function to do? 
  //    If anything, weigh the pros/cons of doing it here vs elsewhere
}

// Sorting order function
const loadProductsByOrder = (arrToSort, criteria) => {

  const sortedProducts = arrToSort.slice(); // clone the array

  if (criteria == 'priceAsc') {
    // Smallest to largest
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (criteria == 'priceDesc') {
    // Largest to smallest
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (criteria == 'nameAsc') {
    // Largest to smallest
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (criteria == 'nameDesc') {
    // Largest to smallest
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  }

  return sortedProducts; // new array
}

// Filter
const runTheFilter = theForm => {

  const categoryToSearch = theForm.elements.categoryName.value;
  const nameToSearch = theForm.elements.productName.value;
  const genderToSearch = theForm.elements.gender.value;
  // const semesterToSearch = theForm.elements.semester.value;

  console.log(theForm.elements)

  // Filter all products in multiple
  const filteredproducts = allProducts
    .filter(c => c.name.toLowerCase().includes( nameToSearch.trim().toLowerCase() ))  // filter by name
    .filter(c => c.category == categoryToSearch || categoryToSearch == "all")         // filter by category
    .filter(productsByGender, genderToSearch)         // filter by category
    // .filter(c => `${c.start.term } ${c.start.year}` == semesterToSearch || semesterToSearch == "all");        // filter by semester
    productsByGender
  renderProductsFromArray(filteredproducts);
}


function productsByGender(prod) {

  // let sizes;
  const sizes = {
    women: [35,36,37,38,39],
    men: [40,41,42,43,44],
    kids: [19,20,21]
  }

  let ret = false;
  prod.size.forEach(sz => {
    if (sizes[this].includes(sz)) {
      ret = true;
      return;
    }
  })
  
  return ret;
}



/* const productsByGender = () => {
  // debugger;
  console.log('clicked')
  let sizes;

  // if (document.getElementById("womenSize").checked) {
  //   size = allProducts.filter(allProducts.size == [35,36,37,38,39].includes);
  // } else if (document.getElementById("menSize").checked) {
  //   size = allProducts.filter(allProducts.size == '[`40,41,42,43,44`]');
  // } else if = (document.getElementById("kidsSize").checked) {
  //   size = allProducts.filter(allProducts.size == '[`19,20,21`]');
  // } else {
  //   return;
  // }

  if (document.getElementById("womenSize").checked) {
    sizes = [35,36,37,38,39];
  } else if (document.getElementById("menSize").checked) {
    sizes = [40,41,42,43,44];
  } else if (document.getElementById("kidsSize").checked) {
    sizes = [19,20,21];
  } else {
    return;
  }

  renderProductsFromArray(
    allProducts.filter((prod) => {
      let ret = false;
      prod.size.forEach(sz => {
        if (sizes.includes(sz)) {
          ret = true;
          // break;
        }
      })
      return ret;
      // (prod.size.find(sizes)) ? [...acc, num]: acc, []).length > 0
    })
  )

  
  // console.log(size, document.getElementById("womenSize"))
}
 */
// let ar1 = [35,36,37,38,39];
// let ar2 = [4,36,38,6];

// ar1.reduce((acc, num) => (ar2.includes(num)) ? [...acc, num]: acc, [])


// EVENT HANDLER FUNCTIONS **************

// Change the product layout from grid to rows 
const toggleProductView = event => {
  document.getElementById('products').classList.toggle('grid-view');
}

// If a product button was pressed
const loadProductsFromTerm = event => {
  const justFall2019 = allProducts.filter(c => c.start.term == `Winter` && c.start.year == 2020);
  renderProductsFromArray(justFall2019);
}

// If a "register" button is clicked
const handleClickOfProducts = event => {
  if (!event.target.matches('button.product-register')) {
    return;
  }
  const productid = parseInt(event.target.dataset.productid);
  addItemToCart(productid);
}

// When the filter form itself is submit...
const filterTheProducts = event => {
  event.preventDefault(); // Prevent the submit form refreshing
  runTheFilter(event.target);
}

// When a filter form component is submit...
const submitTheFilterForm = event => {
  //document.getElementById('filtersForm').submit();
  runTheFilter(event.target.form);
}

// When sorting, ensure the filters run first (which leads to a render)
const sortTheProducts = event => {
  runTheFilter(document.getElementById('filtersForm'));
}


// NOTE, COULD ALSO RUN THE FILTER FROM THE RENDER IF THE RENDER KNOWS WHICH FORM IT SHOULD CHECK FIRST
// OR, COULD HAVE THE FORM SUBMIT AUTOMATICALLY WITH A SORT, WHICH IS POSSIBLY CLEANER



// FUNCTIONS THAT BUILD OUR VIEW **************

/*  Function: getproductAsHtmlString
    Parameters: product:Object
    Return: String of HTML (<article>)
    Description: Allows our products to be built using a template (for map())  */
const getProductAsHtmlString = product => {

  let callout = ``;
  let soldout = ``;
  let register = `<button type="button" class="product-register" data-productid="${product.id}">Add to Bag</button>`;
  if (product.available <= 0) {
    callout = `<small class="callout">Sold out</small>`;
    soldout = `soldout`;
    register = ``;
  } else if (product.available < settings.notifySeatsRemaining) {
    callout = `<small class="callout urgent">Limited seats remaining</small>`;
  }

  return `
    <article class="product ${(product.category) ? `cat-${product.category}` : ''} ${soldout}">
    <img src="${product.img}" alt="${product.name}" class="product-image">
    <h3 id="name">${product.name} ${callout}</h3>
      
      <ul class="product-info">
      <li>Price: <strong>$${product.price}</strong></li>
        <li>Colour: <strong>${product.color}</strong></li>
        <li>Size: <strong>${product.size}</strong></li>
        
        <li>Available: <strong>${(product.qty) ? 'Yes' : 'No'}</strong></li>
        
        <li>Rating: <strong>${product.rating}</strong></li>
      </ul>
      ${register}
    </article>`;
}

const renderProductsFromArray = arr => {

  // 1. SORT!!!
  const sortBy = document.getElementById('sortOrder').value;    // dropdown value
  arr = loadProductsByOrder(arr, sortBy);  // sort the products, reassign the new Array

  // 2. PAGINATE
    // How many pages do we need? 
    //  totalNumproducts / productsPerPage
    //    Round this^ up to the next integer
    
    // TEST EXAMPLE:  10 products / 3 productsPerPage = 4 pages required
    //    Page 1:   0, 1, 2
    //    Page 2:   3, 4, 5
    //    Page 3:   6, 7, 8
    //    Page 4:   9

    // Therefor...
    // Index of the first product on each page: 
    //    firstIndexOnThisPage = (pageNum - 1) * productsPerPage
    // Index of the last product on each page:
    //    lastIndexOnThisPage = firstIndexOnThisPage + productsPerPage
    //      (Remember that slice() excludes the last index.)


  // 3. BUILD OUTPUT
  if (arr.length > 0) {
    document.getElementById('products').innerHTML = arr.map(getProductAsHtmlString).join('\n'); // Print products  
  } else {
    document.getElementById('products').innerHTML = 'Sorry, no matching results.' // Woops!
  }

  document.getElementById('numResults').innerHTML = `(${arr.length} ${(arr.length == 1) ? 'result' : 'results'})`; // Display number of total results
  
}


/************* EXECUTABLE *************/

window.addEventListener('load', () => {

  // The product elements
  renderProductsFromArray(allProducts);

  // UI elements
  document.getElementById('productView').addEventListener('click', toggleProductView);
  document.getElementById('fallProducts').addEventListener('click', loadProductsFromTerm);
  document.getElementById('products').addEventListener('click', handleClickOfProducts);
  document.getElementById('sortOrder').addEventListener('change', sortTheProducts);

  // The filter form
  document.getElementById('filtersForm').addEventListener('submit', filterTheProducts);

  // The filter form components
  document.getElementById('productName').addEventListener('input', submitTheFilterForm);
  document.getElementById('categoryName').addEventListener('change', submitTheFilterForm);
  document.querySelectorAll('[name="semester"]').forEach(radbtn => radbtn.addEventListener('change', submitTheFilterForm));
  document.querySelectorAll('[name="gender"]').forEach(radbtn => radbtn.addEventListener('change', submitTheFilterForm));
  
});


// Still to discuss: Arrays within our products