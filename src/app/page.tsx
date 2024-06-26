import Counter from "@/components/counter";
import os from "os";

export default function Home() {
  console.log("hi~ - 서버");
  console.log(os.hostname());
  return (
    <>
      <h1>홈페이지다!!</h1>
      <Counter />
    </>
  );
}
