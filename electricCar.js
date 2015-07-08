var electricCar = {
  miles: 0,
  charge: function () {
    electricCar.miles += 100;
    console.log(electricCar.miles + " miles left til empty");
  },
  drive: function(num) {
    electricCar.miles = electricCar.miles - num;
    if (electricCar.miles === 0) {
      this.charge();
    }
    console.log(electricCar.miles + " miles left til empty")
  }
}

electricCar.charge();

electricCar.drive(10);

electricCar.drive(30);

electricCar.drive(50);

electricCar.drive(1);
