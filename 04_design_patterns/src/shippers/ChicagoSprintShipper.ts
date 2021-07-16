import { Shipper } from './shipper.interface';


export class ChicagoSprintShipper implements Shipper {
  getCostForLetter(weight: number): number {
    return weight * 0.42;
  }

  getCostForPackage(weight: number): number {
    return weight * 0.20;
  }

  getCostForOversized(weight: number): number {
    return this.getCostForPackage(weight);
  }
}
