let carObj = {
  make: "Maruti",
  model: "i20",
  Year: 2019,
  DisplayProperties: function () {
    console.log(
      `Car "${this.make}" with model "${this.model}" of the year "${this.Year}" is available `
    );
  },
};

carObj.DisplayProperties(carObj);
