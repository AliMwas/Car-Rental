
let cars =[];
let form = document.getElementById('theForm');
function Car(CustomerName, carModel){

  this.CustomerName = CustomerName;
  this.carModel = carModel;
  this.carPrice = 0;
 
  function getRandomArbitrary(min, max) {
    min = 1000;
    max = 10000;
    return Math.random() * (max - min) + min;
  }

  cars.push(this);
  saveToLocalStoarge()
}

function handler(event){
event.preventdefault();

let name = event.target.name.value;
let model = event.target.model.value;

let obj1 = new car (name, model);
obj1.render();
}

let table = document.getElementById('table');

let headr = document.createElement('tr');

table.appendChild(headr);


function renderHeader(){

let orderImg = document.createElement('th');

headr.appendChild(orderImg);

orderImg.textContent = 'orderImage';

let orderDetalis = document.createElement('th');

headr.appendChild(orderDetalis);

orderDetalis.textContent = 'order details';

}
renderHeader();

Car.prototype.render = function(){

let trEl = document.createElement('tr');
table.appendChild(trEl);

let tdName = document.createElement('td');
table.appendChild(tdName);

tdName.textContent = this.CustomerName;


let tdModel = document.createElement('td');
table.appendChild(tdModel);
tdModel.textContent = this.carModel;


let price = document.createElement('td');
table.appendChild(price);
this.price = this.getRandomArbitrary(1000, 10000)
price.textContent = this.carPrice;


}


function saveToLocalStoarge(){

let stringObj = JSON.stringify(cars);
localStorage.setItem(data, stringObj);


}

function readFromLocalStorage(){

let data = localStorage.getItem('data') ;
let objAfter = JSON.parse('data');
 if(objAfter){
cars = objAfter;


 }

}
readFromLocalStorage();