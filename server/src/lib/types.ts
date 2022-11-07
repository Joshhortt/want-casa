import { Collection, ObjectId } from "mongodb";

export interface Listing {
    _id: ObjectId;
    title: string;
    image: string;
    address: string;
    price: number;
    numOfGuests: number;
    numOfBeds: number;
    numOfBaths: number;
    rating: number;
  }

  export interface Database  {
    // bookings: Collection<Booking>;
    listings: Collection<Listing>;
    // users: Collection<User>;
  }