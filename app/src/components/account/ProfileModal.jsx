import React, { useState } from "react";
import { X } from "lucide-react";

// Floating Input (same style as AuthModal)
const FloatingInput = ({ label, type, name, value, disabled, onChange }) => {
  const inputId = `input-${name}`;
  return (
    <div className="relative">
      <input
        id={inputId}
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        onChange={onChange}
        placeholder=" "
        className="peer w-full border border-white/40 rounded-xl p-3 bg-white/50 
                   shadow-sm focus:outline-none disabled:bg-gray-100/70"
      />
      <label
        htmlFor={inputId}
        className={`absolute left-3 top-1/2 transform -translate-y-1/2 
          text-gray-500 transition-all peer-focus:text-xs peer-focus:top-2 
          ${value ? "text-xs top-2 text-orange-600" : "text-sm"}`}
      >
        {label}
      </label>
    </div>
  );
};

export default function ProfileModal({ onClose }) {
  const [profile, setProfile] = useState({
    firstName: "Hussain",
    lastName: "Mahammad",
    email: "hussain@example.com",
    phone: "+91 9876543210",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [pendingEmail, setPendingEmail] = useState(""); // store new email temporarily
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Save button clicked
  const handleSaveClick = () => {
    setError("");
    setSuccessMsg("");

    // If email was changed
    if (profile.email !== "hussain@example.com") {
      setPendingEmail(profile.email);
      setOtpSent(true);
      setSuccessMsg(`OTP sent to ${profile.email}. (Use 123456 for demo)`);
    } else {
      // Save directly for other fields
      setSuccessMsg("Profile updated successfully!");
      setIsEditing(false);
    }
  };

  // Validate OTP for email change
  const handleValidateOtp = () => {
    if (otp !== "123456") {
      setError("Invalid OTP. Reverting to old email.");
      setProfile((prev) => ({ ...prev, email: "hussain@example.com" })); // revert
      setOtpSent(false);
      setOtp("");
      return;
    }
    setError("");
    setSuccessMsg("Email updated successfully!");
    setOtpSent(false);
    setOtp("");
    setIsEditing(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-white/30 transition"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        <h2 className="text-lg font-semibold mb-4">My Profile</h2>

        {/* Success / Error Messages */}
        {successMsg && (
          <div className="mb-3 text-sm text-green-600 bg-green-50/80 p-2 rounded-lg shadow-sm">
            {successMsg}
          </div>
        )}
        {error && (
          <div className="mb-3 text-sm text-red-600 bg-red-50/80 p-2 rounded-lg shadow-sm">
            {error}
          </div>
        )}

        {/* Profile Form */}
        <div className="space-y-3">
          <FloatingInput
            label="First Name"
            type="text"
            name="firstName"
            value={profile.firstName}
            disabled={!isEditing}
            onChange={handleChange}
          />
          <FloatingInput
            label="Last Name"
            type="text"
            name="lastName"
            value={profile.lastName}
            disabled={!isEditing}
            onChange={handleChange}
          />
          <FloatingInput
            label="Email"
            type="email"
            name="email"
            value={profile.email}
            disabled={!isEditing}
            onChange={handleChange}
          />
          <FloatingInput
            label="Phone"
            type="tel"
            name="phone"
            value={profile.phone}
            disabled={!isEditing}
            onChange={handleChange}
          />
        </div>

        {/* Actions */}
        <div className="mt-4 space-y-3">
          {!isEditing ? (
            <button
              onClick={() => {
                setIsEditing(true);
                setSuccessMsg("");
              }}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white py-2.5 rounded-xl shadow-md hover:from-orange-600 hover:to-amber-600 transition"
            >
              Edit Profile
            </button>
          ) : (
            <>
              {!otpSent ? (
                <button
                  onClick={handleSaveClick}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2.5 rounded-xl shadow-md hover:from-orange-600 hover:to-orange-700 transition"
                >
                  Save Changes
                </button>
              ) : (
                <>
                  <FloatingInput
                    label="Enter OTP"
                    type="text"
                    name="otp"
                    value={otp}
                    disabled={false}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  <button
                    onClick={handleValidateOtp}
                    className="w-full bg-gray-600/90 text-white py-2.5 rounded-xl shadow-md hover:bg-gray-700 transition"
                  >
                    Validate OTP & Save
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
