export default class Calulator {
  constructor(earthAge, planet, smoking, toxicWaste) {
    this.earthAge = earthAge;
    this.planet = planet;
    this.planetAge = this.ageCalculator();
    this.lifeExpectancy = 90;
    this.smoking = smoking;
    this.toxicWaste = toxicWaste;
    this.planetLifeExpectancy = this.expectancyCalculator();

    if (this.smoking === 'true') {
      this.lifeExpectancy -= 5;
    }
    if (this.toxicWaste === 'true') {
      this.lifeExpectancy -= 10;
    }
  }

  ageCalculator() {
    if(this.planet === 'Jupiter') {
      this.planetAge = this.calcJupiterAge(this.earthAge);
    } else if (this.planet === 'Mercury') {
      this.planetAge = this.calcMercuryAge(this.earthAge);
    } else if (this.planet === 'Venus') {
      this.planetAge = this.calcVenusAge(this.earthAge);
    } else if (this.planet === 'Mars') {
      this.planetAge = this.calcMarsAge(this.earthAge);
    }
    return this.planetAge;
  }

  expectancyCalculator() {
    if(this.planet === 'Jupiter') {
      this.planetLifeExpectancy = this.calcJupiterAge(this.lifeExpectancy);
    } else if (this.planet === 'Mercury') {
      this.planetLifeExpectancy = this.calcMercuryAge(this.lifeExpectancy);
    } else if (this.planet === 'Venus') {
      this.planetLifeExpectancy = this.calcVenusAge(this.lifeExpectancy);
    } else if (this.planet === 'Mars') {
      this.planetLifeExpectancy = this.calcMarsAge(this.lifeExpectancy);
    }
    return this.planetLifeExpectancy;
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
    this.expectancyCalculator(this.planetLifeExpectancy);
    return `Your life expectancy on ${this.planet} is ${this.planetLifeExpectancy} years`
  }
}

