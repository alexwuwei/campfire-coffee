//my js scripts will be in here
var pikePlaceMarket = {
  minPerHour: 14,
  maxPerHour: 55,
  cupsPerCust: 1.2,
  poundsPerCust: 3.7,
  operatingHours: ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'],
  hourlyCustArray: [], //stores customer number values for all hours
  hourlyPoundsArray: [], //stores pounds sold per hour
  hourlyCupsArray: [], //stores cups sold per hour, as pounds
  hourlyCupsAsPoundsArray: [],

  hourlyCust: function () {
    for (var time = 0; time < this.operatingHours.length; time++) {
    var minimum = this.minPerHour;
    var maximum = this.maxPerHour;
    var randomNumber = Math.floor(Math.random() * (maximum - minimum) + minimum);

    this.hourlyCustArray.push(randomNumber);
    console.log("hello");
  };
  },

  poundsSold: function () {
    for (var time = 0; time < this.operatingHours.length; time++) {
      var averagePounds = this.poundsPerCust;
      var hourlyPounds = this.hourlyCustArray[time] * averagePounds;

      this.hourlyPoundsArray.push(hourlyPounds);
      console.log("hello, its working");
    };
  },

  cupsSold: function () {
    for (var time = 0; time < this.operatingHours.length; time++) {
    var averageCups = this.cupsPerCust;
    var poundsPerCup = 0.05;
    var maximum = this.maxPerHour;


    this.hourlyCustArray.push(randomNumber);
  };
  },


  // cupsPoundsSold: function () {
  //
  // }


  // cupsCustomers: function () {},
  // beansSold: function() {},
  // allHoursTotals: function () {
  //   for (var time = 6, time < 21, time++) {
  //
  //   }
  // }


}

pikePlaceMarket.hourlyCust();
pikePlaceMarket.poundsSold();

// var hourlyCustEl = document.createElement('p');
// hourlyCustEl.textContent = (pikePlaceMarket.hourlyCust());
// document.body.appendChild(hourlyCustEl);
//
// var hourlyCustEle = document.createElement('p');
// hourlyCustEle.textContent = (pikePlaceMarket.poundsPerCust());
// document.body.appendChild(hourlyCustEle);
