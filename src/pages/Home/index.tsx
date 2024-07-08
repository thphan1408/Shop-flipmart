import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getAllProduct } from "../../apis/productServices";

export default function Home() {
  const [dataParam, setDataParam] = useState({
    skip: 0,
    limit: 20,
    search: "",
  });

  const { data: prductData, isLoading } = useQuery({
    queryKey: [
      "item_product",
      dataParam?.limit,
      dataParam?.skip,
      dataParam?.search,
    ],
    queryFn: async () => {
      const res = await getAllProduct(dataParam);
      return res?.data?.products;
    },
  });  

  if(isLoading) return <>!Loading....</>

  console.log("prductData", prductData)
  return (
    <div>Home</div>
  )
}
