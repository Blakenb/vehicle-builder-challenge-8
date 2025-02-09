// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from "./Vehicle.js";
import Motorbike from "./Motorbike.js";
import Car from "./Car.js";
import Wheel from "./Wheel.js";
import AbleToTow from "../interfaces/AbleToTow.js";

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
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

    if (this.wheels.length !== 4) {
      let wheels: Wheel[] = [];
      for (let i = 0; i < 4; i++) {
        wheels.push(new Wheel());
      }
      this.wheels = wheels;
    }
  }

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make an model of the vehicle if it exists

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
  // TODO: Override the printDetails method from the Vehicle class
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Truck
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
}

// Export the Truck class as the default export
export default Truck;
