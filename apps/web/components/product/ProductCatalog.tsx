"use client";

import { useMemo, useState } from "react";

import ProductSearch from "./ProductSearch";
import ProductFilter from "./ProductFilter";
import ProductGrid from "./ProductGrid";

import { featuredProducts } from "@/lib/data/products";

export default function ProductCatalog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");
  const categories = [
    "Semua",
    ...new Set(featuredProducts.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return featuredProducts.filter((product) => {
      const matchSearch =
        !keyword ||
        product.title.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword);

      const matchCategory =
        category === "Semua" || product.category === category;

      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <>
      <ProductSearch value={search} onChange={setSearch} />

      <ProductFilter
        categories={categories}
        value={category}
        onChange={setCategory}
      />

      <ProductGrid products={filteredProducts} />
    </>
  );
}
