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
  item: ProductType;
  onDelete: (id: number) => void;
};
