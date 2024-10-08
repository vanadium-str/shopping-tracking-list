export type Item = {
  id: string;
  name: string;
  image: string;
  store: string;
  price: string;
  deliveryEstimationDate: string | Date,
  received: boolean,
}

export enum TabNames {
  Items = 'items',
  Store = 'store',
}

export enum Routes {
  List = 'list',
  Received = 'received',
}