import Counter from "@/components/counter";

import Image from "next/image";
import os from "os";

export default function Home() {
  console.log("hi~ - 서버");
  console.log(os.hostname());
  return (
    <>
      <h1>홈페이지다!! 버전2</h1>
      <Counter />
      <Image
        src="https://images.unsplash.com/photo-1719165626474-c7cbb9c6416b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="unsplash"
        width={1000}
        height={1000}
      />
    </>
  );
}
