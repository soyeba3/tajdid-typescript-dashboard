import { useEffect, useState } from "react";

import { useDeleteProduct, useGetProducts } from "../components/hooks/Hooks";
import Pagination from "../components/pagination/Pagination";
import ProductCard from "../components/products/ProductCard";
import ProductsHeader from "../components/products/ProductsHeader";
import CardSkeleton from "../components/skeleton/CardSkeleton";
import { ProductType } from "../types/productTypes";

function Dashboard() {
  const [products, setProducts] = useState<ProductType[]>([]);

  // Fetching product data from fakestoreapi.com with a limit of 6
  const [isPending, isError, queryData] = useGetProducts();

  const [deletePost] = useDeleteProduct();

  useEffect(() => {
    if (queryData) {
      setProducts(queryData);
    }
    if (deletePost?.data?.id) {
      const filteredProducts = products.filter(
        (item) => item.id !== deletePost.data.id
      );
      setProducts(filteredProducts);
    }
  }, [queryData, deletePost, products]);

  if (isPending) {
    return (
      <div className="flex flex-col gap-4 px-5 py-8">
        <ProductsHeader />
        <div className="grid grid-cols-3 gap-4 py-4">
          {Array(6)
            .fill(1)
            .map((_, index) => (
              <CardSkeleton key={index} />
            ))}
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-[80vh] text-negative-600">
        Error Happened
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 px-5 py-8">
      <ProductsHeader />
      <div className="grid grid-cols-3 gap-4 py-4">
        {products.map((item) => (
          <ProductCard key={item.id} onDelete={deletePost.mutate} item={item} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}

export default Dashboard;
