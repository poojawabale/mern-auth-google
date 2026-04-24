const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">

      <h1 className="text-4xl font-bold mb-6">
        🎉 Welcome to Dashboard
      </h1>

      <p className="text-gray-400 mb-6">
        You are successfully logged in
      </p>

      <button
        onClick={handleLogout}
        className="px-6 py-3 bg-red-500 rounded-lg hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;