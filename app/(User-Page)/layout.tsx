import Header from "./header/header";
import Footer7 from "./footer/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="">{children}</main>
      <Footer7 />
    </>
  );
}
