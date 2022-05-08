// Vue.createApp({
//   data() {
//     return {
//       varInp: 'Hello world'
//     }
//   },
//   methods: {
//
//   }
// }).mount('#app')
//
//
// var x = new XMLHttpRequest();
// x.open("GET", "https://orderbyte.io/api/v1/294/menus/204", true);
// x.onload = function (){
//     console.log(JSON.parse(x.responseText))
// }
// x.send(null);
//
//
// const mainMenu =

// function getMenu(){
//   var x = new XMLHttpRequest();
//   x.open ("GET", "https://orderbyte.io/api/v1/294/menus/204", true)
//   var menu = []
//   x.onload = function(){
//     menu.push(JSON.parse(x.responseText))
//   }
//   x.send(null)
//   return menu
//   // return JSON.parse(x.responseText)
// }
// console.log(getMenu())//
// // const mainMenu = getMenu()
// // console.log(mainMenu)


var menu = []
var getMenu = new XMLHttpRequest()
getMenu.open('GET', 'https://orderbyte.io/api/v1/294/menus/204', true)
getMenu.onload = function(){
  console.log(JSON.parse(getMenu.responseText.menuItems))
}
getMenu.send()

console.log(getMenu)
