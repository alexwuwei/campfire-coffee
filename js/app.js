//new constructor found below
function CoffeeShop (storeName, minPerHour, maxPerHour,cupsPerCust, poundsPerCust) {
  this.storeName = storeName;
  this.minPerHour = minPerHour;
  this.maxPerHour = maxPerHour;
  this.cupsPerCust = cupsPerCust;
  this.poundsPerCust = poundsPerCust;
  this.operatingHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
  this.hourlyCustArray = []; //stores customer number values for all hours
  this.hourlyPoundsArray = []; //stores pounds sold per hour
  this.hourlyCupsArray = []; //stores cups sold per hour; as pounds
  this.hourlyCupsAsPoundsArray = [];

  //calculates customers per hour
  this.hourlyCust = function () {
    for (var time = 0; time < this.operatingHours.length; time++) {
    var minimum = this.minPerHour;
    var maximum = this.maxPerHour;
    var randomNumber = Math.floor(Math.random() * (maximum - minimum) + minimum);

    this.hourlyCustArray.push(randomNumber);
    console.log("hello");
  };
};

  //calculates pounds sold per hour
  this.poundsSold = function () {
    for (var time = 0; time < this.operatingHours.length; time++) {
      var averagePounds = this.poundsPerCust;
      var hourlyPounds = this.hourlyCustArray[time] * averagePounds;

      this.hourlyPoundsArray.push(hourlyPounds);
      console.log("hello, its working");
    };
  };

//calculates cups sold per hour returns value as cups and value as pounds
  this.cupsSold = function () {
    for (var time = 0; time < this.operatingHours.length; time++) {
    var averageCups = this.cupsPerCust;
    var poundsPerCup = 0.05;
    var cupsHourly = this.hourlyCustArray[time] * averageCups;
    var cupsAsPoundsHourly = cupsHourly * poundsPerCup;

    this.hourlyCupsArray.push(cupsHourly);
    this.hourlyCupsAsPoundsArray.push(cupsAsPoundsHourly);
  };
};

  this.renderStoreData = function () {
    var grabTableDivEl = document.getElementById('tablePrint'); //grabs table div id
    var tbleEl = document.createElement('table'); //creates table element in table div id
    document.body.appendChild(tbleEl);
    var trEl = document.createElement('tr'); //creates table row
    tbleEl.appendChild(trEl)
    var thEl = document.createElement('th'); //creates table header
    thEl.textContent = 'Hours';
    trEl.appendChild(thEl);
    //renders operating hours
    for (var i = 0; i < this.operatingHours.length; i++) {
      var tdEl = document.createElement('th');
      tdEl.textContent = this.operatingHours[i];
      trEl.appendChild(tdEl);
      //var trowEl = document.createElement('th');
    };

    var trNewEl = document.createElement('tr');
    tbleEl.appendChild(trNewEl);
    var trNewDataEl = document.createElement('td');
    trNewDataEl.textContent = this.storeName;
    trNewEl.appendChild(trNewDataEl);

    for (var i = 0; i < this.hourlyPoundsArray.length; i++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = this.hourlyPoundsArray[i];
      trNewEl.appendChild(tdEl);
      //var trowEl = document.createElement('th');
    };
    // for (var g = 0; g < this.operatingHours.length; g++) {
    //   var trEl = document.createElement('tr');
    //   var tdEl = document.createElement('td');
    //   trEl.appendChild
    //
    // };


    };

    // for (var i = 0; i < this.operatingHours.length; i++) {
    //   var tdEl = document.createElement('td');
    //   tdEl.textContent = this.operatingHours[i];
    //   trEl.appendChild(tdEl);
    // };


  // this.renderStoreName = function () {
  //   var storeTitleEl = document.createElement('h2');
  //   storeTitleEl.textContent = (storeName);
  //   document.body.appendChild(storeTitleEl);
  // };
  //
  // this.renderCustData = function () {
  //   for (var i = 0; i <= this.operatingHours.length - 1; i++) {
  //     var hourlyDataEl = document.createElement('p');
  //     hourlyDataEl.textContent = (this.operatingHours[i] + ': ' + (this.hourlyPoundsArray[i] + this.hourlyCupsAsPoundsArray[i]) + ' lbs [' + this.hourlyCustArray[i] + ' customers, ' + this.hourlyCupsArray[i] + ' cups (' + this.hourlyCupsAsPoundsArray[i] + ' lbs), ' + this.hourlyPoundsArray[i] + ' lbs to-go]');
  //     document.body.appendChild(hourlyDataEl);
  //   };
  // };
}

var pikePlaceMarket = new CoffeeShop ("Pike Place Market",14,55,1.2,3.7);
var capitolHill = new CoffeeShop ("Capitol Hill",32,48,3.2,0.4);
var seattlePublicLibrary = new CoffeeShop ("Seattle Public Library",49,75,2.6,0.2);
var southLakeUnion = new CoffeeShop ("South Lake Union",35,88,1.3,3.7);
var seaTacAirport = new CoffeeShop ("Sea-Tac Airport",68,124,1.1,2.7);
var websiteSales = new CoffeeShop ("Website Sales",3,6,0.01,6.7);

pikePlaceMarket.hourlyCust();
pikePlaceMarket.poundsSold();
pikePlaceMarket.cupsSold();
//pikePlaceMarket.renderStoreName();
//pikePlaceMarket.renderCustData();
pikePlaceMarket.renderStoreData();

capitolHill.hourlyCust();
capitolHill.poundsSold();
capitolHill.cupsSold();
capitolHill.renderStoreData();
//
seattlePublicLibrary.hourlyCust();
seattlePublicLibrary.poundsSold();
seattlePublicLibrary.cupsSold();
seattlePublicLibrary.renderStoreData();

//
southLakeUnion.hourlyCust();
southLakeUnion.poundsSold();
southLakeUnion.cupsSold();
southLakeUnion.renderStoreData();
// southLakeUnion.renderCustData();
//
seaTacAirport.hourlyCust();
seaTacAirport.poundsSold();
seaTacAirport.cupsSold();
seaTacAirport.renderStoreData();
// seaTacAirport.renderCustData();
//
websiteSales.hourlyCust();
websiteSales.poundsSold();
websiteSales.cupsSold();
websiteSales.renderStoreData();
// websiteSales.renderCustData();
