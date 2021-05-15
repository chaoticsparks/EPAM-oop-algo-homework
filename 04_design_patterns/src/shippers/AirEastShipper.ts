import { Shipper } from './shipper.interface';


export class AirEastShipper implements Shipper {
  getCostForLetter(weight: number): number {
    return weight * 0.39;
  }

  getCostForPackage(weight: number): number {
    return weight * 0.25;
  }

  getCostForOversized(weight: number): number {
    return this.getCostForPackage(weight) + 10;
  }
}
