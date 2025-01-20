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
      const response = await fetch("/cbn/v1/user/login", {
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

  // const userData = queryClient.getQueryData("user");

  return (
    <header className="flex justify-between items-center p-6 bg-gradient-to-r  rounded-lg shadow-lg">
    {/* Pojok Kiri */}
    <div className="flex items-center text-left text-white">
        <img
          src="logogppk.png" // Ganti dengan path logo yang sesuai
          alt="Logo CBN"
          className="w-12 h-12 mr-4" // Ukuran logo, sesuaikan dengan kebutuhan
        />
    <div className="text-left text-white">
      <h1 className="inline text-3xl font-extrabold tracking-wide">CBN Church</h1>
     <br/> <p className="inline text-l text-gray-600 font-medium italic ">Christ Bless Nations</p>
    </div>
   
</div>
  {/* Pojok Kanan */}
  <div className="text-right text-white">
        <p className="text-black text-sm flex items-center">
          Alamat: Gedung TK-SD Cerdas Bangsa
          <br/>Jl. Raya jakarta bogor Km. 50 Megapolitan, Cimandala, Sukaraja, Kab. Bogor
          <span className="mx-2">|</span>
          
          <span className="text-yellow-500 font-semibold">Ada Pertanyaan</span>
          <a
            href="https://wa.me/6281384757288" // Link WhatsApp
            target="_blank" // Membuka di tab baru
            rel="noopener noreferrer" // Keamanan saat membuka link
            className="ml-2 bg-blue-500 text-white text-sm py-1 px-4 rounded-lg hover:bg-blue-600 flex items-center space-x-2 transition duration-300"
          >
            <i className="fas fa-comment-dots text-white text-lg"></i> {/* Ikon chat */}
            <span>Chat Kami</span>
          </a>
        </p>
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
