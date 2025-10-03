export interface Event {
  name: string;
  promoEndTime?: string;
  tagThemeStyle: {
    backgroundColor: string;
    fontColor: string;
  };
}

export interface Location {
  directions: string;
  pointGeolocation: {
    x: number;
    y: number;
  };
}

export interface Hotel {
  id: string;
  name: string;
  starRating: string;
  comment: string;
  image: string;
  images: string[];
  contents: string;
  price: number;
  location: Location;
  event?: Event;
}
