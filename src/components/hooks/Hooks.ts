import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const useGetProducts = () => {
  const {
    isPending,
    isError,
    data: queryData,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () =>
      fetch("https://fakestoreapi.com/products?limit=6").then((res) =>
        res.json()
      ),
  });
  return [isPending, isError, queryData];
};

export const useDeleteProduct = () => {
  const deletePost = useMutation({
    mutationFn: async (id: number) => {
      return await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE",
      }).then((res) => res.json());
    },
  });
  return [deletePost];
};

export const useCreateProduct = () => {
  const createProduct = useMutation({
    mutationFn: async (value: FieldValues) => {
      return await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...value, image: "https://i.pravatar.cc" }),
      }).then((res) => res.json());
    },
  });

  return [createProduct];
};

export const useUpdateProduct = (id: string | undefined) => {
  const navigate = useNavigate();
  const updateProduct = useMutation({
    mutationFn: async (value: FieldValues) => {
      return await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...value }),
      })
        .then((res) => res.json())
        .then(() => navigate("/"));
    },
  });

  return [updateProduct];
};

export const useGetProduct = (id: string | undefined) => {
  const { data: queryData } = useQuery({
    queryKey: ["product"],
    queryFn: () =>
      fetch(`https://fakestoreapi.com/products/${id}`).then((res) =>
        res.json()
      ),
  });
  return [queryData];
};
