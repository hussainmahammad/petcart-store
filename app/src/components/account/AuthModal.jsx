import React, { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";

// The FloatingInput component is now defined outside the main component.
const FloatingInput = ({
  label,
  type,
  name,
  value,
  onChange,
  showPassword,
  setShowPassword,
  maxLength,
  autoComplete,     // 👈 allow autocomplete per field
  error,            // 👈 field-specific error
}) => {
  const isPassword = type === "password";
  const inputId = `input-${name}`;

  return (
    <div className="relative">
      <input
        id={inputId}
        type={isPassword && showPassword[name] ? "text" : type}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        autoComplete={autoComplete || "on"}
        // Keep autofill suggestions but remove the blue highlight/box
        className={`peer w-full border ${error ? "border-red-400" : "border-white/40"} rounded-xl p-3 bg-white/50 shadow-sm focus:outline-none autofill:shadow-[0_0_0px_1000px_transparent_inset] autofill:bg-transparent`}
        placeholder=" "
        // Neutralize WebKit forced text color while autofilled
        style={{ WebkitTextFillColor: "inherit", transition: "background-color 9999s ease-out" }}
      />
      <label
        htmlFor={inputId}
        className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 transition-all
         ${value ? "text-xs top-2 text-orange-600" : "text-sm"}`}
      >
        {label}
      </label>

      {isPassword && (
        <button
          type="button"
          onClick={() =>
            setShowPassword((prev) => ({
              ...prev,
              [name]: !prev[name],
            }))
          }
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {showPassword[name] ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}

      {/* Inline error */}
      {error ? (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      ) : null}
    </div>
  );
};

export default function AuthModal({ onClose, onLoginSuccess, defaultTab = "login" }) {
  const [activeTab, setActiveTab] = useState(defaultTab); // 👈 respect default tab
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    mobile: "",
    confirmPassword: "",
    otp: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  // Field-specific errors
  const [fieldErrors, setFieldErrors] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    mobile: "",
    confirmPassword: "",
    otp: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [globalError, setGlobalError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
    newPassword: false,
    confirmNewPassword: false,
  });

  const setFieldError = (name, msg) =>
    setFieldErrors((prev) => ({ ...prev, [name]: msg }));

  const clearAllErrors = () => {
    setGlobalError("");
    setFieldErrors({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      mobile: "",
      confirmPassword: "",
      otp: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "mobile") {
      value = value.replace(/\D/g, "");
    }
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear the specific field error as user types when valid
    if (fieldErrors[name]) {
      if (name === "email" && /\S+@\S+\.\S+/.test(value)) setFieldError(name, "");
      if (name === "mobile" && value.length === 10) setFieldError(name, "");
      if (name === "password" && value.length >= 8) setFieldError(name, "");
      if (name === "confirmPassword" && value === (formData.password || "")) setFieldError(name, "");
      if (name === "newPassword" && value.length >= 8) setFieldError(name, "");
      if (name === "confirmNewPassword" && value === (formData.newPassword || "")) setFieldError(name, "");
      if (name === "otp" && value) setFieldError(name, "");
    }
    if (globalError) setGlobalError("");
  };

  const handleLogin = () => {
    clearAllErrors();
    let valid = true;

    if (!/\S+@\S+\.\S+/.test(formData.email || "")) {
      setFieldError("email", "Please enter a valid email.");
      valid = false;
    }
    if (!formData.password) {
      setFieldError("password", "Please enter your password.");
      valid = false;
    }

    if (!valid) return;

    if (formData.email === "test@petcartshop.com" && formData.password === "PetCart.Shop") {
      onLoginSuccess();
    } else {
      setGlobalError("Invalid email or password");
    }
  };

  const handleSendOtp = () => {
    clearAllErrors();
    let valid = true;

    if (!/\S+@\S+\.\S+/.test(formData.email || "")) {
      setFieldError("email", "Enter a valid email address.");
      valid = false;
    }
    if ((formData.mobile || "").length !== 10) {
      setFieldError("mobile", "Mobile number must be 10 digits.");
      valid = false;
    }

    if (activeTab === "signup") {
      if ((formData.password || "").length < 8) {
        setFieldError("password", "Password must be at least 8 characters.");
        valid = false;
      }
      if (formData.password !== formData.confirmPassword) {
        setFieldError("confirmPassword", "Passwords do not match.");
        valid = false;
      }
    }

    if (!valid) return;

    setOtpSent(true);
    setOtpTimer(300);
    const interval = setInterval(() => {
      setOtpTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleSignup = () => {
    clearAllErrors();
    let valid = true;

    if (!formData.otp) {
      setFieldError("otp", "Please enter the OTP.");
      valid = false;
    }
    if (formData.otp && formData.otp !== "123456") {
      setFieldError("otp", "Invalid OTP.");
      valid = false;
    }

    if (!valid) return;

    alert("Account created! Please login now.");
    setActiveTab("login");
  };

  const handlePasswordReset = () => {
    clearAllErrors();
    let valid = true;

    if ((formData.newPassword || "").length < 8) {
      setFieldError("newPassword", "New password must be at least 8 characters.");
      valid = false;
    }
    if (formData.newPassword !== formData.confirmNewPassword) {
      setFieldError("confirmNewPassword", "Passwords do not match.");
      valid = false;
    }

    if (!valid) return;

    alert("Password updated! Please login now.");
    setActiveTab("login");
  };

  const maskEmail = (email) => {
    if (!email) return "";
    const [username, domain] = email.split("@");
    if (!username || !domain) return email;
    const maskedUsername = username.slice(0, 3) + "******";
    return `${maskedUsername}@${domain}`;
  };

  return (
    <>
      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl w-full max-w-md p-6 relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/30 transition"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>

          {/* Tabs */}
          <div className="flex space-x-3 mb-6">
            {["login", "signup"].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setOtpSent(false);
                  clearAllErrors();
                }}
                className={`flex-1 py-2 rounded-xl font-semibold transition shadow-sm ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                    : "bg-white/40 text-gray-700 hover:bg-orange-100/50 hover:text-orange-700"
                }`}
              >
                {tab === "login" ? "Login" : "Sign Up"}
              </button>
            ))}
          </div>

          {/* Global Error */}
          {globalError && (
            <div className="mb-3 text-sm text-red-600 bg-red-50/80 p-2 rounded-lg shadow-sm">
              {globalError}
            </div>
          )}

          {/* Login Tab */}
          {activeTab === "login" && (
            <div className="space-y-3">
              <FloatingInput
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                autoComplete="email"
                error={fieldErrors.email}
              />
              <FloatingInput
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                autoComplete="current-password"
                error={fieldErrors.password}
              />
              <button
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2.5 rounded-lg shadow-md hover:from-orange-600 hover:to-red-600 transition"
              >
                Login
              </button>
              <div className="flex justify-between items-center mt-3 text-[15px]">
                <button
                  onClick={() => setActiveTab("signup")}
                  className="text-gray-700 font-medium hover:text-orange-600 hover:underline transition"
                >
                  Don’t have an account?{" "}
                  <span className="text-orange-600">Sign Up</span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab("forgot");
                    setOtpSent(false);
                    clearAllErrors();
                  }}
                  className="text-gray-700 font-medium hover:text-orange-600 hover:underline transition"
                >
                  Forgot Password?
                </button>
              </div>
            </div>
          )}

          {/* Signup Tab */}
          {activeTab === "signup" && (
            <div className="space-y-3">
              <FloatingInput
                label="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                autoComplete="given-name"
                error={fieldErrors.firstName}
              />
              <FloatingInput
                label="Last Name"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                autoComplete="family-name"
                error={fieldErrors.lastName}
              />
              <FloatingInput
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                autoComplete="email"
                error={fieldErrors.email}
              />
              <FloatingInput
                label="Mobile"
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                maxLength={10}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                autoComplete="tel"
                error={fieldErrors.mobile}
              />
              <FloatingInput
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                autoComplete="new-password"
                error={fieldErrors.password}
              />
              <FloatingInput
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                showPassword={showPassword}
                setShowPassword={setShowPassword}
                autoComplete="new-password"
                error={fieldErrors.confirmPassword}
              />

              {!otpSent ? (
                <button
                  onClick={handleSendOtp}
                  className="w-full py-2.5 rounded-xl transition shadow-md bg-gray-600/90 text-white hover:bg-gray-700"
                >
                  Generate OTP
                </button>
              ) : (
                <div className="space-y-2">
                  <FloatingInput
                    label="Enter OTP"
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    autoComplete="one-time-code"
                    error={fieldErrors.otp}
                  />
                  <p className="text-sm text-gray-700 text-wrap break-words">
                    OTP sent to{" "}
                    <span className="text-orange-600">
                      {maskEmail(formData.email)}
                    </span>
                    . Expires in {Math.floor(otpTimer / 60)}:
                    {(otpTimer % 60).toString().padStart(2, "0")}
                  </p>
                  <button
                    onClick={handleSignup}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 rounded-xl shadow-md hover:from-orange-600 hover:to-orange-700 transition"
                  >
                    Validate OTP & Create Account
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Forgot Password Tab */}
          {activeTab === "forgot" && (
            <div className="space-y-3">
              {!otpSent ? (
                <>
                  <FloatingInput
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    autoComplete="email"
                    error={fieldErrors.email}
                  />
                  <button
                    onClick={handleSendOtp}
                    className="w-full bg-gray-600/90 text-white py-2.5 rounded-xl hover:bg-gray-700 transition shadow-md"
                  >
                    Generate OTP
                  </button>
                </>
              ) : (
                <>
                  <FloatingInput
                    label="Enter OTP"
                    type="text"
                    name="otp"
                    value={formData.otp}
                    onChange={handleChange}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    autoComplete="one-time-code"
                    error={fieldErrors.otp}
                  />
                  <FloatingInput
                    label="New Password"
                    type="password"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    autoComplete="new-password"
                    error={fieldErrors.newPassword}
                  />
                  <FloatingInput
                    label="Confirm New Password"
                    type="password"
                    name="confirmNewPassword"
                    value={formData.confirmNewPassword}
                    onChange={handleChange}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    autoComplete="new-password"
                    error={fieldErrors.confirmNewPassword}
                  />
                  <button
                    onClick={handlePasswordReset}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 rounded-xl shadow-md hover:from-orange-600 hover:to-orange-700 transition"
                  >
                    Update Password
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
