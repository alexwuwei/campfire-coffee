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

  this.renderStoreName = function () {
    var storeTitleEl = document.createElement('h2');
    storeTitleEl.textContent = (storeName);
    document.body.appendChild(storeTitleEl);
  };

  this.renderCustData = function () {
    for (var i = 0; i <= this.operatingHours.length - 1; i++) {
      var hourlyDataEl = document.createElement('p');
      hourlyDataEl.textContent = (this.operatingHours[i] + ': ' + (this.hourlyPoundsArray[i] + this.hourlyCupsAsPoundsArray[i]) + ' lbs [' + this.hourlyCustArray[i] + ' customers, ' + this.hourlyCupsArray[i] + ' cups (' + this.hourlyCupsAsPoundsArray[i] + ' lbs), ' + this.hourlyPoundsArray[i] + ' lbs to-go]');
      document.body.appendChild(hourlyDataEl);
    };
  };
}

// var pikePlaceMarket = {
//   minPerHour: 14,
//   maxPerHour: 55,
//   cupsPerCust: 1.2,
//   poundsPerCust: 3.7,
//   operatingHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
//   hourlyCustArray: [], //stores customer number values for all hours
//   hourlyPoundsArray: [], //stores pounds sold per hour
//   hourlyCupsArray: [], //stores cups sold per hour, as pounds
//   hourlyCupsAsPoundsArray: [],
//
//   //calculates customers per hour
//   hourlyCust: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//     var minimum = this.minPerHour;
//     var maximum = this.maxPerHour;
//     var randomNumber = Math.floor(Math.random() * (maximum - minimum) + minimum);
//
//     this.hourlyCustArray.push(randomNumber);
//     console.log("hello");
//   };
//   },
//
//   //calculates pounds sold per hour
//   poundsSold: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//       var averagePounds = this.poundsPerCust;
//       var hourlyPounds = this.hourlyCustArray[time] * averagePounds;
//
//       this.hourlyPoundsArray.push(hourlyPounds);
//       console.log("hello, its working");
//     };
//   },
//
// //calculates cups sold per hour returns value as cups and value as pounds
//   cupsSold: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//     var averageCups = this.cupsPerCust;
//     var poundsPerCup = 0.05;
//     var cupsHourly = this.hourlyCustArray[time] * averageCups;
//     var cupsAsPoundsHourly = cupsHourly * poundsPerCup;
//
//     this.hourlyCupsArray.push(cupsHourly);
//     this.hourlyCupsAsPoundsArray.push(cupsAsPoundsHourly);
//   };
//   },
//
//   renderStoreName: function () {
//     var storeTitleEl = document.createElement('h2');
//     storeTitleEl.textContent = ("Pike Place Market");
//     document.body.appendChild(storeTitleEl);
//   },
//
//   renderCustData: function () {
//     for (var i = 0; i <= this.operatingHours.length - 1; i++) {
//       var hourlyDataEl = document.createElement('p');
//       hourlyDataEl.textContent = (this.operatingHours[i] + ': ' + (this.hourlyPoundsArray[i] + this.hourlyCupsAsPoundsArray[i]) + ' lbs [' + this.hourlyCustArray[i] + ' customers, ' + this.hourlyCupsArray[i] + ' cups (' + this.hourlyCupsAsPoundsArray[i] + ' lbs), ' + this.hourlyPoundsArray[i] + ' lbs to-go]');
//       document.body.appendChild(hourlyDataEl);
//     };
//   },
//
// }
//
// var capitolHill = {
//   minPerHour: 32,
//   maxPerHour: 48,
//   cupsPerCust: 3.2,
//   poundsPerCust: 0.4,
//   operatingHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
//   hourlyCustArray: [], //stores customer number values for all hours
//   hourlyPoundsArray: [], //stores pounds sold per hour
//   hourlyCupsArray: [], //stores cups sold per hour, as pounds
//   hourlyCupsAsPoundsArray: [],
//
//   //calculates customers per hour
//   hourlyCust: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//     var minimum = this.minPerHour;
//     var maximum = this.maxPerHour;
//     var randomNumber = Math.floor(Math.random() * (maximum - minimum) + minimum);
//
//     this.hourlyCustArray.push(randomNumber);
//     console.log("hello");
//   };
//   },
//
//   //calculates pounds sold per hour
//   poundsSold: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//       var averagePounds = this.poundsPerCust;
//       var hourlyPounds = this.hourlyCustArray[time] * averagePounds;
//
//       this.hourlyPoundsArray.push(hourlyPounds);
//       console.log("hello, its working");
//     };
//   },
//
// //calculates cups sold per hour returns value as cups and value as pounds
//   cupsSold: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//     var averageCups = this.cupsPerCust;
//     var poundsPerCup = 0.05;
//     var cupsHourly = this.hourlyCustArray[time] * averageCups;
//     var cupsAsPoundsHourly = cupsHourly * poundsPerCup;
//
//     this.hourlyCupsArray.push(cupsHourly);
//     this.hourlyCupsAsPoundsArray.push(cupsAsPoundsHourly);
//   };
//   },
//
//   renderStoreName: function () {
//     var storeTitleEl = document.createElement('h2');
//     storeTitleEl.textContent = ("Capitol Hill");
//     document.body.appendChild(storeTitleEl);
//   },
//
//   renderCustData: function () {
//     for (var i = 0; i <= this.operatingHours.length - 1; i++) {
//       var hourlyDataEl = document.createElement('p');
//       hourlyDataEl.textContent = (this.operatingHours[i] + ': ' + (this.hourlyPoundsArray[i] + this.hourlyCupsAsPoundsArray[i]) + ' lbs [' + this.hourlyCustArray[i] + ' customers, ' + this.hourlyCupsArray[i] + ' cups (' + this.hourlyCupsAsPoundsArray[i] + ' lbs), ' + this.hourlyPoundsArray[i] + ' lbs to-go]');
//       document.body.appendChild(hourlyDataEl);
//     };
//   },
//
// }
//
// var seattlePublicLibrary = {
//   minPerHour: 49,
//   maxPerHour: 75,
//   cupsPerCust: 2.6,
//   poundsPerCust: 0.2,
//   operatingHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
//   hourlyCustArray: [], //stores customer number values for all hours
//   hourlyPoundsArray: [], //stores pounds sold per hour
//   hourlyCupsArray: [], //stores cups sold per hour, as pounds
//   hourlyCupsAsPoundsArray: [],
//
//   //calculates customers per hour
//   hourlyCust: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//     var minimum = this.minPerHour;
//     var maximum = this.maxPerHour;
//     var randomNumber = Math.floor(Math.random() * (maximum - minimum) + minimum);
//
//     this.hourlyCustArray.push(randomNumber);
//     console.log("hello");
//   };
//   },
//
//   //calculates pounds sold per hour
//   poundsSold: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//       var averagePounds = this.poundsPerCust;
//       var hourlyPounds = this.hourlyCustArray[time] * averagePounds;
//
//       this.hourlyPoundsArray.push(hourlyPounds);
//       console.log("hello, its working");
//     };
//   },
//
// //calculates cups sold per hour returns value as cups and value as pounds
//   cupsSold: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//     var averageCups = this.cupsPerCust;
//     var poundsPerCup = 0.05;
//     var cupsHourly = this.hourlyCustArray[time] * averageCups;
//     var cupsAsPoundsHourly = cupsHourly * poundsPerCup;
//
//     this.hourlyCupsArray.push(cupsHourly);
//     this.hourlyCupsAsPoundsArray.push(cupsAsPoundsHourly);
//   };
//   },
//
//   renderStoreName: function () {
//     var storeTitleEl = document.createElement('h2');
//     storeTitleEl.textContent = ("Seattle Public Library");
//     document.body.appendChild(storeTitleEl);
//   },
//
//   renderCustData: function () {
//     for (var i = 0; i <= this.operatingHours.length - 1; i++) {
//       var hourlyDataEl = document.createElement('p');
//       hourlyDataEl.textContent = (this.operatingHours[i] + ': ' + (this.hourlyPoundsArray[i] + this.hourlyCupsAsPoundsArray[i]) + ' lbs [' + this.hourlyCustArray[i] + ' customers, ' + this.hourlyCupsArray[i] + ' cups (' + this.hourlyCupsAsPoundsArray[i] + ' lbs), ' + this.hourlyPoundsArray[i] + ' lbs to-go]');
//       document.body.appendChild(hourlyDataEl);
//     };
//   },
//
// }
//
// var southLakeUnion = {
//   minPerHour: 35,
//   maxPerHour: 88,
//   cupsPerCust: 1.3,
//   poundsPerCust: 3.7,
//   operatingHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
//   hourlyCustArray: [], //stores customer number values for all hours
//   hourlyPoundsArray: [], //stores pounds sold per hour
//   hourlyCupsArray: [], //stores cups sold per hour, as pounds
//   hourlyCupsAsPoundsArray: [],
//
//   //calculates customers per hour
//   hourlyCust: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//     var minimum = this.minPerHour;
//     var maximum = this.maxPerHour;
//     var randomNumber = Math.floor(Math.random() * (maximum - minimum) + minimum);
//
//     this.hourlyCustArray.push(randomNumber);
//     console.log("hello");
//   };
//   },
//
//   //calculates pounds sold per hour
//   poundsSold: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//       var averagePounds = this.poundsPerCust;
//       var hourlyPounds = this.hourlyCustArray[time] * averagePounds;
//
//       this.hourlyPoundsArray.push(hourlyPounds);
//       console.log("hello, its working");
//     };
//   },
//
// //calculates cups sold per hour returns value as cups and value as pounds
//   cupsSold: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//     var averageCups = this.cupsPerCust;
//     var poundsPerCup = 0.05;
//     var cupsHourly = this.hourlyCustArray[time] * averageCups;
//     var cupsAsPoundsHourly = cupsHourly * poundsPerCup;
//
//     this.hourlyCupsArray.push(cupsHourly);
//     this.hourlyCupsAsPoundsArray.push(cupsAsPoundsHourly);
//   };
//   },
//
//   renderStoreName: function () {
//     var storeTitleEl = document.createElement('h2');
//     storeTitleEl.textContent = ("South Lake Union");
//     document.body.appendChild(storeTitleEl);
//   },
//
//   renderCustData: function () {
//     for (var i = 0; i <= this.operatingHours.length - 1; i++) {
//       var hourlyDataEl = document.createElement('p');
//       hourlyDataEl.textContent = (this.operatingHours[i] + ': ' + (this.hourlyPoundsArray[i] + this.hourlyCupsAsPoundsArray[i]) + ' lbs [' + this.hourlyCustArray[i] + ' customers, ' + this.hourlyCupsArray[i] + ' cups (' + this.hourlyCupsAsPoundsArray[i] + ' lbs), ' + this.hourlyPoundsArray[i] + ' lbs to-go]');
//       document.body.appendChild(hourlyDataEl);
//     };
//   },
//
// }
//
// var seaTacAirport = {
//   minPerHour: 49,
//   maxPerHour: 75,
//   cupsPerCust: 2.6,
//   poundsPerCust: 0.2,
//   operatingHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
//   hourlyCustArray: [], //stores customer number values for all hours
//   hourlyPoundsArray: [], //stores pounds sold per hour
//   hourlyCupsArray: [], //stores cups sold per hour, as pounds
//   hourlyCupsAsPoundsArray: [],
//
//   //calculates customers per hour
//   hourlyCust: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//     var minimum = this.minPerHour;
//     var maximum = this.maxPerHour;
//     var randomNumber = Math.floor(Math.random() * (maximum - minimum) + minimum);
//
//     this.hourlyCustArray.push(randomNumber);
//     console.log("hello");
//   };
//   },
//
//   //calculates pounds sold per hour
//   poundsSold: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//       var averagePounds = this.poundsPerCust;
//       var hourlyPounds = this.hourlyCustArray[time] * averagePounds;
//
//       this.hourlyPoundsArray.push(hourlyPounds);
//       console.log("hello, its working");
//     };
//   },
//
// //calculates cups sold per hour returns value as cups and value as pounds
//   cupsSold: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//     var averageCups = this.cupsPerCust;
//     var poundsPerCup = 0.05;
//     var cupsHourly = this.hourlyCustArray[time] * averageCups;
//     var cupsAsPoundsHourly = cupsHourly * poundsPerCup;
//
//     this.hourlyCupsArray.push(cupsHourly);
//     this.hourlyCupsAsPoundsArray.push(cupsAsPoundsHourly);
//   };
//   },
//
//   renderStoreName: function () {
//     var storeTitleEl = document.createElement('h2');
//     storeTitleEl.textContent = ("Sea-Tac Airport");
//     document.body.appendChild(storeTitleEl);
//   },
//
//   renderCustData: function () {
//     for (var i = 0; i <= this.operatingHours.length - 1; i++) {
//       var hourlyDataEl = document.createElement('p');
//       hourlyDataEl.textContent = (this.operatingHours[i] + ': ' + (this.hourlyPoundsArray[i] + this.hourlyCupsAsPoundsArray[i]) + ' lbs [' + this.hourlyCustArray[i] + ' customers, ' + this.hourlyCupsArray[i] + ' cups (' + this.hourlyCupsAsPoundsArray[i] + ' lbs), ' + this.hourlyPoundsArray[i] + ' lbs to-go]');
//       document.body.appendChild(hourlyDataEl);
//     };
//   },
//
// }
//
// var websiteSales = {
//   minPerHour: 49,
//   maxPerHour: 75,
//   cupsPerCust: 2.6,
//   poundsPerCust: 0.2,
//   operatingHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
//   hourlyCustArray: [], //stores customer number values for all hours
//   hourlyPoundsArray: [], //stores pounds sold per hour
//   hourlyCupsArray: [], //stores cups sold per hour, as pounds
//   hourlyCupsAsPoundsArray: [],
//
//   //calculates customers per hour
//   hourlyCust: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//     var minimum = this.minPerHour;
//     var maximum = this.maxPerHour;
//     var randomNumber = Math.floor(Math.random() * (maximum - minimum) + minimum);
//
//     this.hourlyCustArray.push(randomNumber);
//     console.log("hello");
//   };
//   },
//
//   //calculates pounds sold per hour
//   poundsSold: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//       var averagePounds = this.poundsPerCust;
//       var hourlyPounds = this.hourlyCustArray[time] * averagePounds;
//
//       this.hourlyPoundsArray.push(hourlyPounds);
//       console.log("hello, its working");
//     };
//   },
//
// //calculates cups sold per hour returns value as cups and value as pounds
//   cupsSold: function () {
//     for (var time = 0; time < this.operatingHours.length; time++) {
//     var averageCups = this.cupsPerCust;
//     var poundsPerCup = 0.05;
//     var cupsHourly = this.hourlyCustArray[time] * averageCups;
//     var cupsAsPoundsHourly = cupsHourly * poundsPerCup;
//
//     this.hourlyCupsArray.push(cupsHourly);
//     this.hourlyCupsAsPoundsArray.push(cupsAsPoundsHourly);
//   };
//   },
//
//   renderStoreName: function () {
//     var storeTitleEl = document.createElement('h2');
//     storeTitleEl.textContent = ("Website Sales");
//     document.body.appendChild(storeTitleEl);
//   },
//
//   renderCustData: function () {
//     for (var i = 0; i <= this.operatingHours.length - 1; i++) {
//       var hourlyDataEl = document.createElement('p');
//       hourlyDataEl.textContent = (this.operatingHours[i] + ': ' + (this.hourlyPoundsArray[i] + this.hourlyCupsAsPoundsArray[i]) + ' lbs [' + this.hourlyCustArray[i] + ' customers, ' + this.hourlyCupsArray[i] + ' cups (' + this.hourlyCupsAsPoundsArray[i] + ' lbs), ' + this.hourlyPoundsArray[i] + ' lbs to-go]');
//       document.body.appendChild(hourlyDataEl);
//     };
//   },
//
// }
//
// pikePlaceMarket.hourlyCust();
// pikePlaceMarket.poundsSold();
// pikePlaceMarket.cupsSold();
// pikePlaceMarket.renderStoreName();
// pikePlaceMarket.renderCustData();
//
// capitolHill.hourlyCust();
// capitolHill.poundsSold();
// capitolHill.cupsSold();
// capitolHill.renderStoreName();
// capitolHill.renderCustData();
//
// seattlePublicLibrary.hourlyCust();
// seattlePublicLibrary.poundsSold();
// seattlePublicLibrary.cupsSold();
// seattlePublicLibrary.renderStoreName();
// seattlePublicLibrary.renderCustData();
//
// southLakeUnion.hourlyCust();
// southLakeUnion.poundsSold();
// southLakeUnion.cupsSold();
// southLakeUnion.renderStoreName();
// southLakeUnion.renderCustData();
//
// seaTacAirport.hourlyCust();
// seaTacAirport.poundsSold();
// seaTacAirport.cupsSold();
// seaTacAirport.renderStoreName();
// seaTacAirport.renderCustData();
//
// websiteSales.hourlyCust();
// websiteSales.poundsSold();
// websiteSales.cupsSold();
// websiteSales.renderStoreName();
// websiteSales.renderCustData();

var everett = new CoffeeShop ("Everett",23,34,1.2,2.6);

everett.hourlyCust();
everett.poundsSold();
everett.cupsSold();
everett.renderStoreName();
everett.renderCustData();
