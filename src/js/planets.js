export default class Calulator {
  constructor(earthAge, planet) {
    this.earthAge = earthAge;
    this.planet = planet;
    this.planetAge = 0;
  }

  ageCalculator() {
    if(this.planet === 'Earth') {
      this.planetAge = this.calcEarthAge(this.earthAge);
    } else if (this.planet === 'Mercury') {
      this.planetAge = calcMercuryAge(this.earthAge);
    }
    return `Your age on ${this.planet} is ${this.planetAge}`
  }

  calcEarthAge() {
    return this.earthAge * 1;
  }

  calcMercuryAge() {
    return Math.round(this.earthAge/.24);
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