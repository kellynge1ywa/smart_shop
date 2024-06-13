
export interface User {
  id: string;
  fullname: string;
  email: string;
  password: string;
  residence: string;
  phoneNumber: string;
  role: string;
}

export interface RegisterUser {
  fullname: string;
  email: string;
  password: string;
  residence: string;
  phoneNumber: string;
  dob: string;
}