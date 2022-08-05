class ProductsList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];
    this.allProducts =[];
    this._fetchProducts();
  }

  _fetchProducts() {
    this.goods = [
      {id: 1, title:'Notebook', price: 2000},
      {id: 2, title:'Mouse', price: 20},
      {id: 3, title:'Keyboard', price: 200},
      {id: 4, title:'Gamepad', price: 50},
      {id: 5, title:'Chair', price: 150},
    ];
  }

  /**
   * итоговая стоимость товара
   * @returns {*}
   */
  calcSum() {
    return this.allProducts.reduce((accum, item) => accum += item.price, 0);
  }

  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObj = new ProductItem(product);
      this.allProducts.push(productObj);
      block.insertAdjacentHTML('beforeend', productObj.render());
    }
  }
}

class ProductItem {
  constructor(product, img ='https://placehold.it/200x150') {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.img = img;
  }

  render() {
    return `<div class="product-item" data-id = ${this.id}>
            <img src="${this.img}" alt="Some img">
            <div class="desc">
              <h3 class="product-title">${this.title}</h3>
              <p class="product-price">${this.price}</p>
              <button class="buy-btn">Купить</button>
            </div>
         </div>`
  }
}

let list = new ProductsList();
list.render();
console.log(list.calcSum());


// const products = [
//   {id: 1, title:'Notebook', price: 2000},
//   {id: 2, title:'Mouse', price: 20},
//   {id: 3, title:'Keyboard', price: 200},
//   {id: 4, title:'Gamepad', price: 50},
//   {id:5, title:'Chair', price: 150}
// ];
//
// const renderProduct = (product, img = 'https://placehold.it/200x150') => {
//   return `<div class="product-item">
//             <img src="${img}" alt="Some img">
//             <div class="desc">
//               <h3 class="product-title">${product.title}</h3>
//               <p class="product-price">${product.price}</p>
//               <button class="buy-btn">Купить</button>
//             </div>
//          </div>`
// };
//
// const renderPage = list => {
//   document.querySelector('.products').innerHTML = list
//     .map(item => renderProduct(item)).join('');
// };
//
// renderPage(products);