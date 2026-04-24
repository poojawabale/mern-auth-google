import AuthForm from "../components/AuthForm";

const AuthPage = () => {
  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 flex-col justify-center px-20">
        <p className="text-sm text-purple-400 mb-4">
          ✨ Next-gen Authentication
        </p>

        <h1 className="text-5xl font-bold leading-tight">
          Welcome to the <br />
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Future
          </span>
        </h1>

        <p className="text-gray-400 mt-6">
          Experience premium authentication with cutting-edge security.
        </p>

        <div className="mt-10 space-y-4 text-gray-300">
          <p>🔐 Bank-level security encryption</p>
          <p>⚡ Lightning-fast authentication</p>
          <p>✅ Trusted by 50,000+ users</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex w-full md:w-1/2 items-center justify-center">
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthPage;