// Importing Vehicle and Wheel classes
import Vehicle from "./Vehicle.js";

class Motorbike extends Vehicle {
  override numberOfWheelHubs: number = 2;

  wheelie(): void {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }

  override printDetails(): void {
    super.printDetails();
  }
}

export default Motorbike;
