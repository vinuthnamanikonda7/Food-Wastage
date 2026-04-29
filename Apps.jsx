import React, { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("DONOR");

  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const sendOtp = () => {
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(code);
    alert("Your OTP is: " + code);
    setShowOtp(true);
  };

  const verifyOtp = () => {
    if (otp === generatedOtp) {
      setUser({ name, role });
    } else {
      alert("Wrong OTP");
    }
  };

  if (!user) {
    return (
      <div className="container">
        <h1>LeftOverGo</h1>

        <input placeholder="Name" onChange={e => setName(e.target.value)} />
        <input placeholder="Phone" onChange={e => setPhone(e.target.value)} />

        <div>
          <button onClick={() => setRole("DONOR")}>Donor</button>
          <button onClick={() => setRole("RECEIVER")}>Receiver</button>
          <button onClick={() => setRole("DELIVERY")}>Delivery</button>
        </div>

        <button onClick={sendOtp}>Send OTP</button>

        {showOtp && (
          <div>
            <input placeholder="Enter OTP" onChange={e => setOtp(e.target.value)} />
            <button onClick={verifyOtp}>Verify</button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Welcome {user.name}</h2>
      <h3>Role: {user.role}</h3>

      <nav>
        <button>Home</button>
        <button>About</button>
        <button>Impact</button>
        <button>Contact</button>
      </nav>

      {user.role === "DONOR" && <p>Post surplus food</p>}
      {user.role === "RECEIVER" && <p>Claim food</p>}
      {user.role === "DELIVERY" && <p>Deliver food</p>}
    </div>
  );
}
