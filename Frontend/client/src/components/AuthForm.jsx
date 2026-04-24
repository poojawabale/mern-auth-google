import { useState } from "react";
import InputField from "./InputField";
import GoogleButton from "./GoogleButton";
import { registerUser, loginUser } from "../services/authService";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // ✅ Handle input change (clean way)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handle submit
  const handleSubmit = async () => {
    try {
      let data;

      if (isLogin) {
        // LOGIN
        data = await loginUser({
          email: formData.email,
          password: formData.password,
        });
      } else {
        // REGISTER
        if (formData.password !== formData.confirmPassword) {
          return alert("Passwords do not match");
        }

        data = await registerUser({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        });
      }

      console.log("User:", data);

      // ✅ Store JWT
      localStorage.setItem("token", data.token);

      alert("Success 🚀");
      window.location.href = "/dashboard";

    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div className="glass p-8 rounded-2xl w-[380px]">

      {/* Toggle */}
      <div className="flex justify-between mb-6 text-gray-300">
        <button
          className={isLogin ? "text-white font-bold" : ""}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={!isLogin ? "text-white font-bold" : ""}
          onClick={() => setIsLogin(false)}
        >
          Register
        </button>
      </div>

      {/* Inputs */}
      <div className="space-y-4">

        {/* Name (only in Register) */}
        {!isLogin && (
          <InputField
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
        )}

        {/* Email */}
        <InputField
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        {/* Password */}
        <InputField
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        {/* Confirm Password (only in Register) */}
        {!isLogin && (
          <InputField
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        )}
      </div>

      {/* Button */}
      <button onClick={handleSubmit} className="btn-gradient mt-6">
        {isLogin ? "Sign In →" : "Create Account →"}
      </button>

      {/* Divider */}
      <div className="text-center my-4 text-gray-400">OR</div>

      {/* Google Login */}
      <GoogleButton />
    </div>
  );
};

export default AuthForm;