import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <Header />
      </div>
      <main className="flex items-center justify-center flex-col w-full h-full p-4 bg-[#f4f2ee]">
        {children}
      </main>
    </>
  );
};

export default Layout;
