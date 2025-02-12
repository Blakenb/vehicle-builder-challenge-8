// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from "./Vehicle.js";
import Motorbike from "./Motorbike.js";
import Car from "./Car.js";
import Wheel from "./Wheel.js";
import AbleToTow from "../interfaces/AbleToTow.js";

class Truck extends Vehicle implements AbleToTow {
  towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super(vin, color, make, model, year, weight, topSpeed, wheels);
    this.towingCapacity = towingCapacity;
  }

  tow(vehicle: Truck | Motorbike | Car): void {
    if (vehicle.weight <= this.towingCapacity) {
      console.log(
        `Vehicle of make ${vehicle.make} and model ${vehicle.model} being towed`
      );
    } else {
      console.log(
        `vehicle of make ${vehicle.make} and model ${vehicle.model} is to heavy to`
      );
    }
  }
  override printDetails(): void {
    super.printDetails();
    console.log(`towing capacity ${this.towingCapacity} `);
  }
}

// Export the Truck class as the default export
export default Truck;
