export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex p-[8px] items-center border-[pink] border-2 border-solid">
        <div className="px-[8px]">여성옷</div>
        <div className="px-[8px]">남성옷</div>
      </div>
      <main>{children}</main>
    </div>
  );
}
