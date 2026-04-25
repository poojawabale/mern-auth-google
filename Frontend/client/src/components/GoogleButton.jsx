import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const GoogleButton = () => {
const handleSuccess = async (res) => {
  console.log("Google credential:", res);

  try {
    const response = await axios.post(
      "https://mern-auth-backend-4cin.onrender.com/api/auth/google",
      {
        credential: res.credential,
      }
    );

    console.log("Backend response:", response.data);

    localStorage.setItem("token", response.data.token);

    window.location.href = "/dashboard";

  } catch (err) {
    console.error("Google login error:", err.response?.data || err);
  }
};

  return (
    <div className="flex justify-center">
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.log("Login Failed")}
      />
    </div>
  );
};

export default GoogleButton;