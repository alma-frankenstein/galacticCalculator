export default class Calulator {
  constructor(earthAge, planet) {
    this.earthAge = earthAge;
    this.planet = planet;
    this.planetAge = 0;
    this.lifeExpectancy = 90;
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
    return `Your age on ${this.planet} is ${this.planetAge}`
  }

  calcMercuryAge() {
    return Math.round(this.earthAge/.24);
  }

  calcVenusAge() {
    return Math.round(this.earthAge/.62);
  }

  calcMarsAge() {
    return Math.round(this.earthAge/1.88);
  }

  calcJupiterAge() {
    return Math.round(this.earthAge/11.86);
  }

  lifeExpec(smoking, toxicWaste) {
    this.smoking = smoking;
    this.toxicWaste = toxicWaste;

    if (this.smoking === 'true'){
      this.lifeExpectancy -= 5;
    }
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
