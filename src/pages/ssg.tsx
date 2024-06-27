// import MeowArticle from "@/components/MeowArticle";
// import { getProducts, Product } from "@/service/products";
// import Link from "next/link";

// type Props = {
//   products: Product[];
// };

// // 13 version과 다른점. 페이지에 필요한 데이터를 프롭형태로 받음
// // 데이터는 서버로부터 전달 받음
// // 서버에서 어떤함수를 통해 전달해 주냐에 따라 SSG인지 SSR인지 나뉘어짐
// // 12 버전에서는 컴포넌트단위로 생각할(서버, 클라이언트) 필요 없음
// // 페이지 컴포넌트는 클라이언트에서 실행이 될 것임.
// export default function SSGPage({ products }: Props) {
//   return (
//     <>
//       <h1>제품 소개 페이지!</h1>
//       <ul>
//         {products.map(({ id, name }, index) => {
//           <li key={index}>
//             <Link href={`/products/${id}`}>{name}</Link>
//           </li>;
//         })}
//       </ul>
//       <MeowArticle />
//     </>
//   );
// }

// // 아래와 같은 코드들만 서버상에서 실행됨
// getStaticProps 함수를 사용하면 페이지 전체가 SSG로 작동을 함.
// export async function getStaticProps() {
//   const products = await getProducts();
//   return {
//     props: { products },
//   };
// }
