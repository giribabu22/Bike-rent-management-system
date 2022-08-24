const ask = require('readline-sync')
class BikeRentMainClass{
  
  constructor(name,number){
    const obj = Object.create(BikeRentMainClass.prototype)
    obj.username = name;
    obj.pin = number;
    obj.BikeData = null;
    console.log(obj,"okkkkkkkkkk")
    return obj
  }
  takeBike(bikeName,noofBike){
    var temObj = {}
    temObj.bikeName = bikeName
    temObj.noofBike = noofBike
    this.BikeData = [temObj]
    console.log('temObj: ',temObj);
  }
  // returnBIke(bikeName,noofBike){
  //   for (var ele of this.BikeData)
  //     console.log(ele);
  //     if (bikeName === ele.bikeName){
  //       const noofBike = ask.questionInt('noof-bike: ')
  //       if (noofBike === ele.noofBike){
  //         delete this.BikeData[0]
  //       }
  //     }else{
  //       console.log('out of the box___');
  //     }
  // }
}
// console.log(obj);
module.exports ={BikeRentMainClass}

