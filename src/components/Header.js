import React, { useState } from "react";
import { Modal, Box, Typography, Fade, Backdrop } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isRegisterMode, setRegisterMode] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noHP, setNoHP] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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

  const loginMutation = useMutation({
    mutationFn: async ({ username, password }) => {
      const response = await fetch("https://api.gppkcbn.org/cbn/v1/user/login", {
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

  const registerMutation = useMutation({
    mutationFn: async ({ username, email, password, fullName, alamat, noHP }) => {
      let status = 6;
      const response = await fetch("https://api.gppkcbn.org/cbn/v1/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password, fullName, alamat, noHP, status }),
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
    registerMutation.mutate({ username, email, password, fullName, alamat, noHP });
  };

  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-6 bg-gradient-to-r rounded-lg shadow-lg">
      {/* Pojok Kiri */}
      <div className="flex items-center text-left text-white mb-4 md:mb-0">
        <img
          src="logogppk.png"
          alt="Logo CBN"
          className="w-12 h-12 mr-4"
        />
        <div className="text-left text-white">
          <h1 className="inline text-3xl font-extrabold tracking-wide">CBN Church</h1>
          <br/>
          <p className="inline text-l text-gray-600 font-medium italic">Christ Bless Nation</p>
        </div>
      </div>
      {/* Pojok Kanan */}
      <div className="text-center md:text-right text-white">
  <div className="flex flex-col md:flex-row items-center justify-center md:justify-end">
    <i className="fas fa-regular fa-church text-yellow-500 text-5xl mb-2 md:mb-0 md:mr-4"></i>
    <p className="text-black text-sm flex flex-col md:flex-row items-center">
      Gedung TK-SD Cerdas Bangsa<br/>
      Jl. Raya jakarta bogor Km. 50 Megapolitan,<br/> Cimandala, Sukaraja, Kab. Bogor
      <span className="mx-2 hidden md:inline">|</span>

      <span className="mt-3 text-yellow-500 font-semibold">Ada Pertanyaan?</span>
      <a
        href="https://wa.me/6281384757288"
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline ml-2 mt-2 md:mt-0 bg-blue-500 text-white text-sm py-1 px-4 rounded-lg hover:bg-blue-600 flex items-center space-x-2 transition duration-300"
      >
        <i className="fas fa-comment-dots text-white text-lg"></i>
        <span>Chat Kami</span>
      </a>
    </p>
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
