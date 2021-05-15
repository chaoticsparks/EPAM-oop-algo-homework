export interface Shipper {
  getCostForLetter(weight: number): number;
  getCostForPackage(weight: number): number;
  getCostForOversized(weight: number): number;
}
