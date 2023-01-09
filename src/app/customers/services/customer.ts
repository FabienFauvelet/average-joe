interface Address{
  number:string;
  street:string;
  postalCode:string;
  city:string;
}
interface Customer {
  id:string;
  firstName:string;
  lastName:string;
  birthDate:Date;
  address: Address;
}
