import { Shipper } from './shipper.interface';


export class PacificParcelShipper implements Shipper {
  getCostForLetter(weight: number): number {
    return weight * 0.51;
  }

  getCostForPackage(weight: number): number {
    return weight * 0.19;
  }

  getCostForOversized(weight: number): number {
    return this.getCostForPackage(weight) + weight * 0.02;
  }
}
