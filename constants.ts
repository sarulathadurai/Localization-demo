export const transactions = [
  {
    id: '1',
    icon: 'fast-food-outline',
    title: 'food store',
    amount: 'Rs. 340',
    time: '15.36',
  },
  {
    id: '2',
    icon: 'home-outline',
    title: 'house Rent',
    amount: 'Rs. 3400',
    time: '12.36',
  },
  {
    id: '3',
    icon: 'car-outline',
    title: 'Uber',
    amount: 'Rs. 340',
    time: '10.36',
  },
  {
    id: '4',
    icon: 'shirt-outline',
    title: 'Cloth Merchant',
    amount: 'Rs. 1040',
    time: '10.36',
  },
];

export const menuData = [
  {
    id: '1',
    name: 'paper-plane',
    title: 'send',
  },
  {
    id: '2',
    name: 'download',
    title: 'Request',
  },
  {
    id: '3',
    name: 'apps',
    title: 'More',
  },
];

export type transactionType = {
  id: string;
  icon: string;
  title: string;
  amount: string;
  time: string;
};
