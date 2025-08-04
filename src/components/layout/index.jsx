import Header from "../common/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <main className="container mx-auto w-full h-full min-h-screen pt-4 bg-[#f4f2ee]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
