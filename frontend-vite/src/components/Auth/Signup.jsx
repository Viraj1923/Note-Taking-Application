import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api/axios";
import "./Signup.css"; // 
import { toast } from "react-toastify";

export default function Signup() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [otpRequested, setOtpRequested] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/auth/signup-request-otp", formData);
      setOtpRequested(true);

      toast.success(`Your OTP is: ${res.data.otp}`);
    } catch (err) {
      setError(err.response?.data?.msg || "Failed to send OTP");
    }
  };


  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/auth/verify-otp", {
        email: formData.email,
        otp,
        name: formData.name,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
      toast.success("Account Created Successfully...");
    } catch (err) {
      setError(err.response?.data?.msg || "Invalid OTP");
    }
  };

  return (
    <div className="signup-container">
      {/* LEFT FORM */}
      <div className="signup-left">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <p className="subtext">Sign up to access your notes</p>


          {error && <p style={{ color: "red" }}>{error}</p>}

          {!otpRequested ? (
            <form onSubmit={handleRequestOtp}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <button type="submit">Get OTP</button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp}>
              <label>Enter OTP</label>
              <input
                type="text"
                value={otp}
                placeholder="6-digit code"
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button type="submit">Verify OTP</button>
            </form>
          )}

          <p >
            Already have an account? <Link to="/login" >Login</Link>
          </p>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="signup-right"></div>
    </div>
  );
}

