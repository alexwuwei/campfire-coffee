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
    var tbleEl = document.createElement('table'); //creates table element
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

    //renders totals to table
    for (var i = 0; i < this.hourlyPoundsArray.length; i++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = parseFloat((this.hourlyPoundsArray[i].toFixed(2)));
      trNewEl.appendChild(tdEl);
      //var trowEl = document.createElement('th');
    };

    var combinedTotals = 0;

    for (var t = 0; t <this.hourlyPoundsArray.length; t++) {
      combinedTotals += this.hourlyPoundsArray[t];
    }

    //renders combined total row to table
    var lastRow = document.createElement('tr');
    tbleEl.appendChild(lastRow);
    var lastRowTd = document.createElement('td');
    lastRowTd.textContent = 'Daily Store Totals'
    lastRow.appendChild(lastRowTd);
    var lastRowTotals = document.createElement('td');
    lastRowTotals.textContent = parseFloat((combinedTotals.toFixed(2)));
    lastRow.appendChild(lastRowTotals);

    };

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
//
seaTacAirport.hourlyCust();
seaTacAirport.poundsSold();
seaTacAirport.cupsSold();
seaTacAirport.renderStoreData();
//
websiteSales.hourlyCust();
websiteSales.poundsSold();
websiteSales.cupsSold();
websiteSales.renderStoreData();

//variable that grabs the newStoreForm form
var newStoreForm = document.getElementById('newStoreForm');
//function that handles the submission of a new store
function handleNewStoreSubmit (event) {
  console.log(event); //for debugging purposes
  event.preventDefault(); //prevents default browser behaviour

  //Makes sure that all fields are filled out
  if (!event.target.storeName.value || !event.target.minCustomer.value || !event.target.maxCustomer.value || !event.target.avgCups.value || !event.target.avgPounds.value) {
    return alert ('Please fill out all fields!');
  };

  //variables below grab the form values for later use
  var newStoreName = event.target.storeName.value;
  var minimumCustomerNumber = event.target.minCustomer.value;
  var maximumCustomerNumber = event.target.maxCustomer.value;
  var averageCupsPerCustomer = event.target.avgCups.value;
  var averagePoundsPerCustomer = event.target.avgPounds.value;

  //creates a new CoffeeShop object using data from newStoreForm
  var createStoreObject = new CoffeeShop (newStoreName, minimumCustomerNumber,maximumCustomerNumber, averageCupsPerCustomer, averagePoundsPerCustomer);

  //renders new store data on data table
  var newRow = document.createElement('tr');
  tbleEl.appendChild(newRow);
  var newTableData = document.createElement('td');
  newTableData.textContent = newStoreName;
}

//listens for a submit event on html form
newStoreForm.addEventListener('submit', handleNewStoreSubmit, false);
