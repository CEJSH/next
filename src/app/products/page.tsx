import { getProducts } from "@/service/products";
import MeowArticle from "@/components/MeowArticle";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import chocoImg from "../../../public/images/choco.jpeg";

// export const revalidate = 3;

export default async function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌

  const products = await getProducts();

  return (
    <div className="flex flex-col">
      <h1>제품 소개 페이지!</h1>
      <Image src={chocoImg} alt="baby" />
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </div>
  );
}
