export type ProductsType = [
  {
    title: string;
    id: number;
    rating: {
      rate: number;
    };
    image: string;
    price: number;
    description?: string;
  }
];

export type ProductType = {
  title: string;
  id: number;
  rating: {
    rate: number;
  };
  image?: string;
  price: number;
  description: string;
};

export type ProductCardProps = {
  item?: {
    title: string;
    id: number;
    rating: {
      rate: number;
    };
    image: string;
    price: number;
  };
  onDelete: (id: number) => void;
  isOpen: boolean;
  handleOpen?: () => void;
};
