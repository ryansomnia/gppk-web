import React, { useState } from "react";
import { Modal, Box, Typography, Fade, Backdrop } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./Header.css";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isRegisterMode, setRegisterMode] = useState(false); // Mode Register/Login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noHP, setNoHP] = useState("");
  // const [status, setStatus] = useState("");


  const [confirmPassword, setConfirmPassword] = useState(""); // Input untuk konfirmasi password
  const queryClient = useQueryClient();

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const toggleRegisterMode = () => {
    setRegisterMode(!isRegisterMode);
    setUsername("");
    setPassword("");
    setEmail("");
    setConfirmPassword("");
  };

  // Mutation untuk login
  const loginMutation = useMutation({
    mutationFn: async ({ username, password }) => {
      const response = await fetch("http://localhost:3001/cbn/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login gagal");
      }

      return response.json();
    },
    onSuccess: (data) => {

        localStorage.setItem("token", JSON.stringify({ username: data.data.username, status: data.data.status, token: data.data.token }));
        queryClient.setQueryData(["user"], { username: data.data.username, status: data.data.status });
       console.log('===============data=====================');
       console.log(data);
       console.log('====================================');
        alert("Login berhasil!");
        setModalOpen(false);
   
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation.mutate({ username, password });
  };

  // Mutation untuk register
  const registerMutation = useMutation({
    mutationFn: async ({ username, email, password, fullName, alamat, noHP }) => {
      let status = 6
      const response = await fetch("http://localhost:3001/cbn/v1/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, fullName, alamat,noHP, status }),
      });

     if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registrasi gagal");
      }

      return response.json();
    },
    onSuccess: (data) => {
      alert("Registrasi berhasil! Silakan login.");
      setRegisterMode(false);
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password dan konfirmasi password tidak cocok.");
      return;
    }
    registerMutation.mutate({ username, email, password });
  };

  const userData = queryClient.getQueryData("user");

  return (
    <header className="header">
      <div className="header-left">
        <img src="logogppk.png" alt="Logo" className="logo" />
        <div className="header-text">
          <h1>GPPK CBN</h1>
          <p>Christ Bless Nation</p>
        </div>
      </div>

     

      <Modal
        open={isModalOpen}
        onClose={toggleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={isModalOpen}>
          <Box className="modal-box">
            <span className="modal-close-button" onClick={toggleModal}>
              &times;
            </span>
            <Typography variant="h6" className="modal-title">
              {isRegisterMode ? "Register" : "Login"}
            </Typography>

            {isRegisterMode ? (
              <>
              <input
                  type="fullname"
                  placeholder="Full Name"
                  className="input-field"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Username"
                  className="input-field"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="input-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input-field"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                  <input
                  type="noHP"
                  placeholder="Nomor Handphone"
                  className="input-field"
                  value={noHP}
                  onChange={(e) => setNoHP(e.target.value)}
                />
                     <input
                  type="alamat"
                  placeholder="Alamat"
                  className="input-field"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                />
                <button className="login-submit-button" onClick={handleRegister}>
                  Register
                </button>
                <p onClick={toggleRegisterMode} style={{ color: "#007bff", cursor: "pointer" }}>
                  Sudah punya akun? Login disini
                </p>
              </>
            ) : (
              <>
                <input
                  type="text"
                  placeholder="Username"
                  className="input-field"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="input-field"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-submit-button" onClick={handleLogin}>
                  Login
                </button>
                <p onClick={toggleRegisterMode} style={{ color: "#007bff", cursor: "pointer" }}>
                  Belum punya akun? Register disini
                </p>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </header>
  );
};

export default Header;
