import Sidebar from "./SideBar";

const Settings = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-grow bg-gray-100 p-6">
        <div className="bg-white shadow-xl border m-6 p-6">
          <h1 className="text-xl font-bold">Settings</h1>
        </div>
      </div>
    </div>
  );
};

export default Settings;
