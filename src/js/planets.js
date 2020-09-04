export default class Calulator {
  constructor(earthAge, planet, smoking, toxicWaste) {
    this.earthAge = earthAge;
    this.planet = planet;
    this.planetAge = 1;
    this.lifeExpectancy = 90;
    this.smoking = smoking;
    this.toxicWaste = toxicWaste;
    this.planetLifeExpectancy = 2;

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
    console.log()
    this.expectancyCalculator(this.planetLifeExpectancy);
    console.log(this.lifeExpectancy);
    console.log(this.planetLifeExpectancy);
    return `Your life expectancy on ${this.planet} is ${this.planetLifeExpectancy} years`
  }
}



// export default class Triangle {
//   constructor(side1, side2, side3) {
//     this.side1 = side1;
//     this.side2 = side2;
//     this.side3 = side3;
//   }

//   checkType() {
//     if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
//       return "not a triangle";
//     } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
//       return "scalene triangle";
//     }  else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
//       return "equilateral triangle";
//     } else {
//       return "isosceles triangle";
//     }
//   }
// }
