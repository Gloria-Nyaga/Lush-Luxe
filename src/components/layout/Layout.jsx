import Navbar from '../navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '70px' }}>{children}</main>
    </>
  );
};

export default Layout;
