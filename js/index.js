const allProducts = [
    {
        img: `img/img-02.jpg`,
        name: `Product One`,
        description: `lorem ipsum`,
        available: true,
        color: [
          `beige`,
          `black`,
          `brown`,
        ],
        size: [
          `36`,
          `37`,
          `38`,
          `39`,
          `40`
        ],
        price: `0`,
        ratings: [3,4,5,2,1]
    }
    ];
    
    document.getElementById(`products`).innerHTML = getProductAsHtml(allProducts[0]);
    document.getElementById(`products`).innerHTML += getProductAsHtml(allProducts[0]);
    
    
    function getProductAsHtml(product) {
      return `<article class="product">
                  <img src="${product.img}" alt="Product Image">
                </header>
                <h3>Product Name</h3>
                <p>Here is a shot of this product that might entice a user to click and add it to their cart.</p>
                <form>
                  <fieldset>
                    <legend>Colours</legend>
                    <ul>
                      <li><label><input type="radio" name="colour" value="r"> <span>Red</span></label></li>
                      <li><label><input type="radio" name="colour" value="w"> <span>White</span></label></li>
                      <li><label><input type="radio" name="colour" value="b"> <span>Blue</span></label></li>
                    </ul>
                  </fieldset>
    
                  <fieldset>
                    <legend>Sizes</legend>
                    <ol>
                      <li><label><input type="radio" name="size" value="m"> <span>M</span></label></li>
                      <li><label><input type="radio" name="size" value="l"> <span>L</span></label></li>
                      <li><label><input type="radio" name="size" value="xl"> <span>XL</span></label></li>
                    </ol>
                  </fieldset>
    
                  <footer>
                    <dl>
                      <dt>Rating</dt>
                      <dd>4.4 <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
                    </dl>
                    <data value="39"><del>$50.00</del> <ins>$39.00</ins></data>
                    <button type="button"><span class="material-icons">add_shopping_cart</span> Add to Cart</button>
                    <button type="button"><span class="material-icons">favorite</span></button>
                    <a href="#">see more</a>
                  </footer>
                </form>
              </article>`;
    
    }
      
    
    const checkScrollPosition = event => {
      const logo = document.querySelector('.logo');
      const main = document.querySelector('.main');
    
      if (window.pageYOffset > 80) {
        if (!logo.classList.contains('mini')){
          logo.classList.add('mini');
          filters.classList.add('up');
        }
      } else {
        logo.classList.remove('mini');
        filters.classList.remove('up');
      }
    }
    
    window.addEventListener('scroll', checkScrollPosition)
    document.getElementById('openCloseSidebar').addEventListener('click', event => {
      document.querySelector('.main').classList.toggle('closed');
    })