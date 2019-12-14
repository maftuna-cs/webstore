/******* GLOABL letIABLES/DATA ********/

const settings = {
  notifyAvailable: 7,
  // imagePath: 'img/'
}

const shoppingCart = [
  {productid: 101, qty: 1}
];

const allProducts = [
  { // 0
    id: 101, 
    name: `A Chevron Point Toe Flat Loafers`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/07/15731206694c5f1df63ea8ba8d344656a9b372ff7d_thumbnail_900x.webp`,
    price: `45`,
    color: [`Khaki, Beige`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 5,
    category: `loafers`,
    available: 19,
  },{  // 1
    id: 102, 
    name: `Hollow-Out Velcro Flats`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/10/18/1571391782ea01bba33b681607dedf887b935c53f0_thumbnail_900x.webp`,
    price: `32`,
    color: [`Beige, Black`],
    size: [19,20,21],
    qty: true,
    rating: 4,
    category: `flats`,
    available: 2,
  },{ // 2
    id: 103, 
    name: `Faux Pearl Ballet Flats`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/05/1572931532b48b44206c1d05865abe4b1e4d0874f9_thumbnail_900x.webp`,
    price: `43`,
    color: [`Beige, Black`],
    size: [35,36,37,38,39],
    qty: false,
    rating: 4,
    category: `Flats`,
    available: 5,
  },{ // 3
    id: 104, 
    name: `Embossed Stiletto Heels`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/09/1573292825cdf0071ab5e7b0b2588275ee7720d1b4_thumbnail_900x.webp`,
    price: `65`,
    color: [`Beige, Black`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 3,
    category: `pumps`,
    available: 0,
  },{ // 4
    id: 105, 
    name: `Metal Decor Flat Mules`,
    img: `https://img.ltwebstatic.com/images2_pi/2019/04/12/15550561893993284564_thumbnail_900x1199.webp`,
    price: `54`,
    color: [`Beige, Black`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 5,
    category: `pumps`,
    available: 20,
  },{ // 5
    id: 106, 
    name: `Men Lace-Up Sneakers`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/15/1573804711522b82bde9ae7adb7a7b6c8d0f9ec27c_thumbnail_900x.webp`,
    price: `59`,
    color: [`White`],
    size: [40,41,42,43,44],
    qty: true,
    rating: 5,
    category: `sneakers`,
    available: 0,
  },{ // 6
    id: 107, 
    name: `Lmond Toe Side Goring Block Heel Ankle Boots`,
    img: `https://img.ltwebstatic.com/images2_pi/2019/08/01/15646517064065547572_thumbnail_900x1199.webp`,
    price: `75`,
    color: [`Black, Tan`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 5,
    category: `boots`,
    available: 6,
  },{ // 7
    id: 108, 
    name: `Rhinestone & Pearl Decor Plaid Flats`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/01/15725879729bd519b5c80256013d7e575f61fabe46_thumbnail_900x.webp`,
    price: `83`,
    color: [`Black, Tan`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 5,
    category: `flats`,
    available: 10,
  },{ // 8
    id: 109, 
    name: `Studded Decor Point Toe Flats`,
    img: `https://img.ltwebstatic.com/images2_pi/2019/04/17/15554883673784057751_thumbnail_900x1199.webp`,
    price: `29`,
    color: [`Black, Tan`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 3,
    category: `pumps`,
    available: 14,
  },{ // 9
    id: 110, 
    name: `Faux Pearl Decor Buckle Strap Flats`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/07/1573121904bbf3ee061cae0cc094c7b3284f1c1cd8_thumbnail_900x.webp`,
    price: `78`,
    color: [`Black, Tan`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 5,
    category: `pumps`,
    available: 20,
  },
  { // 10
    id: 111, 
    name: `Lace-Up Front Ankle Boots`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/23/15744866557b5e714ca3ec746372d84f35ae159fd4_thumbnail_900x.webp`,
    price: `65`,
    color: [`Black, Tan`],
    size: [40,41,42,43,44],
    qty: true,
    rating: 5,
    category: `boots`,
    available: 3,
  },{  // 11
    id: 112, 
    name: `Letter Graphic Lace-Up Front Chunky Sneakers`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/08/15732185642ac0600aeb7b018542944946a30ac1d7_thumbnail_900x.webp`,
    price: `72`,
    color: [`Beige, Black`],
    size: [40,41,42,43,44],
    qty: true,
    rating: 4,
    category: `sneakers`,
    available: 4,
  },{ // 12
    id: 113, 
    name: `Toddler Girls Jewelled Decor Glitter Flats`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/09/15732975501a3b61309626809b8b25041ca3e6ed22_thumbnail_900x.webp`,
    price: `38`,
    color: [`Beige, Black`],
    size: [19,20,21],
    qty: false,
    rating: 5,
    category: `flats`,
    available: 11,
  },{ // 13
    id: 114, 
    name: `Deer Design Faux Fur Boots`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/06/157303094067574d17d46f92044b2b18427b2f15cf_thumbnail_900x.webp`,
    price: `42`,
    color: [`One Color`],
    size: [19,20,21],
    qty: true,
    rating: 4,
    category: `boots`,
    available: 0,
  },{ // 14
    id: 115, 
    name: `Baby Girl Bow Decor Flats`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/10/28/15722574028efca64a36ecf197b3d0f3173fea02f6_thumbnail_900x.webp`,
    price: `28`,
    color: [`Beige, Black`],
    size: [19,20,21],
    qty: true,
    rating: 3,
    category: `flats`,
    available: 32,
  },{ // 15
    id: 116, 
    name: `Rhinestone & Bow Decor Glitter Flats`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/21/157432133935dbe629ced96fbbf59575cdd26068f2_thumbnail_900x.webp`,
    price: `43`,
    color: [`Black, Tan`],
    size: [19,20,21],
    qty: true,
    rating: 4,
    category: 'flats',
    available: 2,
  },{ // 16
    id: 117, 
    name: `Cartoon Embroidered Fluffy Flats`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/09/25/1569400241a0fc38976f68ac85d48c9929b84a290f_thumbnail_900x.webp`,
    price: `32`,
    color: [`Black, Tan`],
    size: [19,20,21],
    qty: true,
    rating: 5,
    category: `boots`,
    available: 0,
  },{ // 17
    id: 118, 
    name: `Double Strap Flat Loafers`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/10/12/1570870578d104b7091eed877d2009361e4ff3ac90_thumbnail_900x.webp`,
    price: `78`,
    color: [`Black, Tan`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 2,
    category: `pumps`,
    available: 15,
  },{ // 18
    id: 119, 
    name: `Decor Point Toe Slingback Flats`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/26/15747622365eb869ac4121c6b94765a1699f4e777f_thumbnail_900x.webp`,
    price: `39`,
    color: [`Black, Tan`],
    size: [35,36,37,38,39],
    qty: true,
    rating: 3,
    category: `flats`,
    available: 19,
  },{ // 19
    id: 120, 
    name: `Plaid Wide Fit Slippers`,
    img: `https://img.ltwebstatic.com/images3_pi/2019/11/11/1573466813cc67536d1ec8ad336c680b23c1fba2ee_thumbnail_900x.webp`,
    price: `25`,
    color: [`Black, Tan`],
    size: [40,41,42,43,44],
    qty: true,
    rating: 5,
    category: `loafers`,
    available: 7,
  }
];


/************* FUNCTIONS *************/


const addItemToCart = productid => {

  const cartItem = shoppingCart.find(item => item.productid == productid);

  if (cartItem) {  
    cartItem.qty++;
  } else {
    shoppingCart.push({productid: productid, qty: 1});
  }
}

// Sorting
const loadProductsByOrder = (arrToSort, criteria) => {

  const sortedProducts = arrToSort.slice(); 

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

  return sortedProducts; 
}

// Filter
const runTheFilter = theForm => {

  const categoryToSearch = theForm.elements.categoryName.value;
  const nameToSearch = theForm.elements.productName.value;
  const genderToSearch = theForm.elements.gender.value;
  

  console.log(theForm.elements)

  // Filter all products in multiple
  const filteredproducts = allProducts
    .filter(c => c.name.toLowerCase().includes( nameToSearch.trim().toLowerCase() ))  // filter by name
    .filter(c => c.category == categoryToSearch || categoryToSearch == "all")         // filter by category
    .filter(productsByGender, genderToSearch)         // filter by gender
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
const loadProductsFromNameSearch = event => {

  const whatToSearch = event.target.value.trim().toLowerCase();

  const resultsFromSearch = allProducts.filter(c => c.name.toLowerCase().includes(whatToSearch));
  
  renderProductsFromArray(resultsFromSearch)
  
}


// Change the view 
const toggleProductView = event => {
  document.getElementById('products').classList.toggle('grid-view');
}


const handleClickOfProducts = event => {
  if (!event.target.matches('button.product-add')) {
    return;
  }
  const productid = parseInt(event.target.dataset.productid);
  addItemToCart(productid);
}


const filterTheProducts = event => {
  event.preventDefault(); 
  runTheFilter(event.target);
}


const submitTheFilterForm = event => {
  runTheFilter(event.target.form);
}


const sortTheProducts = (event, productsArray) => {
  const sortedProducts = loadProductsByOrder(productsArray, event.target.value);
  renderProductsFromArray(sortedProducts);
}


// FUNCTIONS THAT BUILD OUR VIEW **************

const getProductAsHtmlString = product => {

  let callout = ``;
  let soldout = ``;  
  let add = `<button class="button-primary" class="product-add" data-productid="${product.id}">Add to Bag</button>`;
  if (product.available <= 0) {
    callout = `<small class="callout">Sold out</small>`;
    soldout = `soldout`;
    add = ``;
  } else if (product.available < settings.notifyAvailable) {
    callout = `<small class="callout urgent">few items remaing</small>`;
  }

  return `
    <article class="product" ${(product.category) ? `cat-${product.category}` : ''} ${soldout}">
    <img src="${product.img}" alt="${product.name}" class="product-image">
    <h3 id="name" class="product-title">${product.name} ${callout}</h3>
      
      <ul class="product-info">
      <li class="product-price"><strong>$${product.price}</strong></li>
        <li class="product-color">Colour: <strong>${product.color}</strong></li>
        <li class="product-size">Size: <strong>${product.size}</strong></li>
         <li class="product-av">available: <strong>${(product.qty) ? 'Yes' : 'No'}</strong></li>
         <li class="product-rate">rating: <strong>(${product.rating})</strong></li>
      </ul>
      ${add}
    </article>`;
}

const renderProductsFromArray = arr => {

  
  if (arr.length > 0) {
    document.getElementById('products').innerHTML = arr.map(getProductAsHtmlString).join('\n');  
  } else {
    document.getElementById('products').innerHTML = 'Sorry, no matching results.'
  }
  document.getElementById('numResults').innerHTML = `(${arr.length} ${(arr.length == 1) ? 'result' : 'results'})`;
}


/************* EXECUTABLE *************/

window.addEventListener('load', () => {
  document.getElementById('productName').addEventListener('input', loadProductsFromNameSearch)
  // allProducts
  renderProductsFromArray(allProducts);

  // ui
  document.getElementById('productView').addEventListener('click', toggleProductView);
  document.getElementById('loadAllProducts').addEventListener('click', () => {
    // clear the form data 
    document.getElementById('filtersForm').reset();
    // re-render all products to the html page
    renderProductsFromArray(allProducts);
  });
  document.getElementById('products').addEventListener('click', handleClickOfProducts);
  document.getElementById('sortOrder').addEventListener('change', (event) => sortTheProducts(event, allProducts));

  // The filter form
  document.getElementById('filtersForm').addEventListener('submit', filterTheProducts);

  // The filter form components
  document.getElementById('productName').addEventListener('input', submitTheFilterForm);
  document.getElementById('categoryName').addEventListener('change', submitTheFilterForm);
  document.querySelectorAll('[name="semester"]').forEach(radbtn => radbtn.addEventListener('change', submitTheFilterForm));
  document.querySelectorAll('[name="gender"]').forEach(radbtn => radbtn.addEventListener('change', submitTheFilterForm));
  
});

function responsiveMenu() {
  let menu = document.getElementById("toggled");
	let menuStyle = window.getComputedStyle(menu);
	let display = menuStyle.getPropertyValue('display');
  
  if (display === 'none') {
    toggle.style.backgroundColor = "gray";
    menu.style.display = "block";
  } else {
    toggle.style.backgroundColor = "transparent";
    menu.style.display = "none";
  };
};

// add event listener to menu button
let toggle = document.getElementById("menu-toggle");
toggle.addEventListener("click", responsiveMenu, false);


//// <button class="button-primary">Add to Bag</button>

