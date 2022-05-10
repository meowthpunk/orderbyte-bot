function clearElement(element){
  while (element.firstChild){
    element.removeChild(element.firstChild);
  }
}
// function showProductsInCat(id){
//   console.log(id)
// }


url = 'https://orderbyte.io/api/v1/294/menus/204'
// url = 'https://orderbyte.io/api/v1/1/menus/1'
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let menu = data.menuItems
    let categories = data.menuItems.categories
    let products = data.menuItems.products
    console.log(categories)
    console.log(products)

    var app = Vue.createApp({
      data() {
        return {
          selectedCategory: 0,
          selectedProduct: 0,
          categories: data.menuItems.categories,
          products: data.menuItems.products,
          mainCont: document.getElementById("mainCont"),
          cart: [],
          cartActive: false,
          selectedOptions: [],
          counterChecker: 0,
        };
      },

      methods: {

        showCategory(id){
          this.selectedCategory = id
          console.log(this.selectedCategory)
        },

        showProductInfo(id){
          this.selectedProduct = id
          console.log(this.selectedProduct)
        },
        backCategories(){
          this.selectedCategory = 0
        },
        backProducts(){
          this.selectedProduct = 0
        },

        addProductInCart(takeId){

          var take = this.cart.filter(item => item.product.id == takeId)
          var takeParse = JSON.parse(JSON.stringify(take))

          console.log(takeParse.length)

          if(takeParse.length == 0){
            var check = this.products.filter(product => product.id == takeId)
            var checkParse = JSON.parse(JSON.stringify(check[0]))
            this.cart.push({
              counter: 1,
              product: checkParse,
            })
            console.log(this.cart)
            console.log(this.cart[0].product)
          }
          else {
            console.log('Error-001')
          }
        },
        showCart(){
          this.cartActive = true;
        },
        hideCart(){
          this.cartActive = false;
        },
        minusCounter(cartItem, index){
          if (cartItem.counter > 1) {
            cartItem.counter -= 1
          }
          else {
            this.cart.splice(index, 1)
          }
        },
        plusCounter(cartItem, index){
          cartItem.counter += 1
        },
        sendData(){
          console.log(this.cart)
        },
        logger(){
          console.log('test')
        },
      },

      delimiters: ['[[', ']]']
    }).mount('#app');
  })
