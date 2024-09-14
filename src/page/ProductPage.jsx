import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useProducts } from "../hooks";

const ProductPage = () => {
  const location = useLocation();
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    // Debug: Log the full query string
    console.log("Full query string:", location.search);

    const query = {
      category: params.get("category") || "",
      subcategory: params.get("subcategory") || "",
      keyword: params.get("keyword") || "",
      brand: params.get("brand") || "",
      discount: params.get("discount") || "",
      featured: params.get("featured") || "",
      newArrival: params.get("newArrival") || "",
      sortBy: params.get("sortBy") || "",
      limit: params.get("limit") || "12",
      page: params.get("page") || "1",
      layout: params.get("layout") || "grid",
      columns: params.get("columns") || "4",
    };

    // Debug: Log parsed query parameters
    console.log("Parsed query parameters:", query);

    setQueryParams(query);
  }, [location.search]);

  const { data, error, isLoading } = useProducts(queryParams);

  return (
    <div>
      ProductPage no of product : {data?.products?.length}
      <h2>
        {" "}
        <p>Category: {queryParams.category}</p>
        <p>Sub-Category: {queryParams.subcategory}</p>
      </h2>
    </div>
  );
};

export default ProductPage;
