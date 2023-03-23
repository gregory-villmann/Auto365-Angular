export interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  image: string;
}

export interface CarsResponse {
  cars: Car[];
  size: number;
}

export interface CarForm {
  make: string;
  model: string;
  year: number;
  mileage: number;
  price: number;
  image: string;
}

export enum AddEditState {
  EDIT = 'EDIT',
  ADD = 'ADD'
}
