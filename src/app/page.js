import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import ProductWrapper from "@/components/product-wrapper/ProductWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header/>
      <Link href={'/wishlist'}>
        Wishlist
      </Link>
      <ProductWrapper/>
    </main>
  );
}
