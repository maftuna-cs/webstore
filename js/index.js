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
    name: `Monogram Motif Leather Ankle Boots`,
    img: `img/img-02.jpg`,
    color: [`Black, Tan`],
    size: [`35,36,37,38,39`],
    qty: true,
    rating: 5,
    category: null,
  },{  // 1
    id: 102, 
    name: `Suede Chunky Heeled Ankle Boots`,
    img: `img/img-02.jpg`,
    color: [`Beige, Black`],
    size: [`35,36,37,38,39`],
    qty: true,
    rating: 4,
    category: `development`,
  },{ // 2
    id: 103, 
    name: `Suede Chunky Heeled Ankle Boots`,
    img: `img/img-02.jpg`,
    color: [`Beige, Black`],
    size: [`35,36,37,38,39`],
    qty: false,
    rating: 4,
    category: `design`,
  },{ // 3
    id: 104, 
    name: `Point Toe Embossed Stiletto Heels`,
    img: `img/img-02.jpg`,
    color: [`Beige, Black`],
    size: [`35,36,37,38,39`],
    qty: true,
    rating: 4,
    category: `design`,
    available: 0
  },{ // 4
    id: 105, 
    name: `Metal Decor Flat Mules`,
    img: `img/img-02.jpg`,
    color: [`Beige, Black`],
    size: [`35,36,37,38,39`],
    qty: true,
    rating: 4,
    category: `development`,
  },{
    id: 101, 
    name: `Flat Loafers`,
    img: `img/img-02.jpg`,
    color: [`Black, Tan`],
    size: [`35,36,37,38,39`],
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

  if (criteria == 'weeksAsc') {
    // Smallest to largest
    sortedProducts.sort((a, b) => a.weeks - b.weeks);
  } else if (criteria == 'weeksDesc') {
    // Largest to smallest
    sortedProducts.sort((a, b) => b.weeks - a.weeks);
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
  const semesterToSearch = theForm.elements.semester.value;

  console.log(theForm.elements)

  // Filter all products in multiple
  const filteredproducts = allProducts
    .filter(c => c.name.toLowerCase().includes( nameToSearch.trim().toLowerCase() ))  // filter by name
    .filter(c => c.category == categoryToSearch || categoryToSearch == "all")         // filter by category
    .filter(c => `${c.start.term } ${c.start.year}` == semesterToSearch || semesterToSearch == "all");        // filter by semester

  renderProductsFromArray(filteredproducts);
}



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
      <h3 id="name">${product.name} ${callout}</h3>
      <img src="${product.img}" alt="${product.name}" class="product-image">
      <ul class="product-info">
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

});


// Still to discuss: Arrays within our products