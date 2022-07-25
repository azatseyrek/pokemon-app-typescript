type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
  return <div className="space-y-8 ">{children}</div>;
};
export default Layout;
