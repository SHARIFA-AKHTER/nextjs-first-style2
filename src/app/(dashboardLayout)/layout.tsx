import Sidebar from "../component/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div  className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100"> 
        {children}
        </main>
    </div>
  );
};

export default DashboardLayout;
