export default class Calulator {
  constructor(earthAge, planet, smoking, toxicWaste) {
    this.earthAge = earthAge;
    this.planet = planet;
    this.planetAge = this.ageCalculator(earthAge);
    this.lifeExpectancy = 90;
    this.smoking = smoking;
    this.toxicWaste = toxicWaste;

    if (this.smoking === 'true') {
      this.lifeExpectancy -= 5;
    }
    if (this.toxicWaste === 'true') {
      this.lifeExpectancy -= 10;
    }
    this.planetLifeExpectancy = this.ageCalculator(this.lifeExpectancy);
  }

  ageCalculator(age) {
    let newAge;
    if(this.planet === 'Jupiter') {
      newAge = this.calcJupiterAge(age);
    } else if (this.planet === 'Mercury') {
      newAge = this.calcMercuryAge(age);
    } else if (this.planet === 'Venus') {
      newAge = this.calcVenusAge(age);
    } else if (this.planet === 'Mars') {
      newAge = this.calcMarsAge(age);
    }
    return newAge;
  }

  calcMercuryAge(age) {
    return Math.round(age/.24);
  }

  calcVenusAge(age) {
    return Math.round(age/.62);
  }

  calcMarsAge(age) {
    return Math.round(age/1.88);
  }

  calcJupiterAge(age) {
    return Math.round(age/11.86);
  }

  lifeExpec() {
    if (this.planetAge >= this.planetLifeExpectancy) {
      let yearsOver = this.planetAge - this.planetLifeExpectancy;
      return `Your life expectancy on ${this.planet} is ${this.planetLifeExpectancy} ${this.planet} years, and you're already ${this.planetAge} years old. That's ${yearsOver} longer than expected!`;
    } else {
      let yearsLeft = this.planetLifeExpectancy - this.planetAge;
      return `Your life expectancy on ${this.planet} is ${this.planetLifeExpectancy} ${this.planet} years, and you're already ${this.planetAge} years old. That means you could expect ${yearsLeft} more years!`;
    }
  }
}

