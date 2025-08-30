import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../api/axios";
import "./Login.css";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Step 1: Request OTP
  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/auth/login-request-otp", { email });
      setOtpRequested(true);
      toast.success(`Your OTP is: ${res.data.otp} `);
    } catch (err) {
      setError(err.response?.data?.msg || "Failed to send OTP");
    }
  };


  // Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/auth/verify-otp", { email, otp });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/dashboard");
      toast.success("Login Successful...");
    } catch (err) {
      setError(err.response?.data?.msg || "Invalid OTP");
    }
  };

  return (
    <div className="login-container">
      {/* LEFT: form */}
      <div className="login-left">
        <div className="login-form">
          <h2>Sign in</h2>
          <p className="subtext">Please login to continue to your account</p>

          {error && <p className="error">{error}</p>}

          {!otpRequested ? (
            <form onSubmit={handleRequestOtp}>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
              />

              <button type="submit" className="btn">
                Get OTP
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp}>
              <label>Enter OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                placeholder="6-digit code"
              />

              <div className="two-btns">
                <button type="submit" className="btn">
                  Verify
                </button>
              </div>
            </form>
          )}

          <p className="muted">
            Need an account? <Link to="/signup">Create one</Link>
          </p>
        </div>
      </div>

      {/* RIGHT: image */}
      <div className="login-right" />
    </div>
  );
}

