export interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  country: string;
}

export interface Company {
  department: string;
  name: string;
  title: string;
  address: Address;
}

export interface Hair {
  color: string;
  type: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  company: Company;
  hair: Hair;
  address: Address;
}

export interface UserData {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}

export interface DepartmentSummary {
  [department: string]: {
    male: number;
    female: number;
    ageRange: string;
    hair: { [color: string]: number };
    addressUser: { [fullName: string]: string };
  };
}
