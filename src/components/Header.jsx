import React, { useState } from "react";
import { Modal, Box, Typography, Fade, Backdrop } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MapPin, MessageCircle, X } from "lucide-react";

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
    setFullName("");
    setAlamat("");
    setNoHP("");
  };

  // LOGIN
  const loginMutation = useMutation({
    mutationFn: async ({ username, password }) => {
      const response = await fetch(
        "https://api.gppkcbn.org/cbn/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login gagal");
      }

      return response.json();
    },

    onSuccess: (data) => {
      localStorage.setItem(
        "token",
        JSON.stringify({
          username: data.data.username,
          status: data.data.status,
          token: data.data.token,
        })
      );

      queryClient.setQueryData(["user"], {
        username: data.data.username,
        status: data.data.status,
      });

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

  // REGISTER
  const registerMutation = useMutation({
    mutationFn: async ({
      username,
      email,
      password,
      fullName,
      alamat,
      noHP,
    }) => {
      let status = 6;

      const response = await fetch(
        "https://api.gppkcbn.org/cbn/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
            fullName,
            alamat,
            noHP,
            status,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registrasi gagal");
      }

      return response.json();
    },

    onSuccess: () => {
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

    registerMutation.mutate({
      username,
      email,
      password,
      fullName,
      alamat,
      noHP,
    });
  };

  return (
    <>
      <header className="relative overflow-hidden bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        {/* Glow Effect */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* LEFT */}
            <div className="flex items-center gap-5">
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/10">
                <img
                  src="logogppk.png"
                  alt="Logo CBN Church"
                  className="w-16 h-16 object-contain"
                />
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
                  CBN Church
                </h1>

                <p className="text-yellow-400 font-medium tracking-[3px] uppercase text-sm mt-1">
                  Christ Bless Nation
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col items-center lg:items-end gap-5">
              <div className="flex items-start gap-4 text-center lg:text-right">
                <div className="bg-yellow-500/10 p-3 rounded-xl border border-yellow-500/20 hidden md:flex">
                  <MapPin className="text-yellow-400 w-6 h-6" />
                </div>

                <div>
                  <p className="text-white font-semibold text-lg">
                    Gedung TK-SD Cerdas Bangsa
                  </p>

                  <p className="text-gray-300 text-sm leading-relaxed mt-1">
                    Jl. Raya Jakarta Bogor KM. 50 Megapolitan,
                    <br />
                    Cimandala, Sukaraja, Kab. Bogor
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
                <a
                  href="https://wa.me/6281384757288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 transition duration-300 text-white px-5 py-3 rounded-xl font-medium shadow-lg hover:scale-105"
                >
                  <MessageCircle size={18} />
                  Chat Kami
                </a>

                <button
                  onClick={toggleModal}
                  className="bg-yellow-500 hover:bg-yellow-400 transition duration-300 text-black px-5 py-3 rounded-xl font-bold shadow-lg hover:scale-105"
                >
                  Login / Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MODAL */}
      <Modal
        open={isModalOpen}
        onClose={toggleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <Box
            className="
              absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              w-[92%] max-w-md
              bg-white rounded-3xl
              p-8 shadow-2xl
              outline-none
            "
          >
            {/* CLOSE */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={24} />
            </button>

            <Typography
              variant="h5"
              className="!font-bold !text-center !mb-6"
            >
              {isRegisterMode ? "Create Account" : "Welcome Back"}
            </Typography>

            <form
              onSubmit={
                isRegisterMode ? handleRegister : handleLogin
              }
              className="space-y-4"
            >
              {isRegisterMode && (
                <>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </>
              )}

              <input
                type="text"
                placeholder="Username"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {isRegisterMode && (
                <>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                  />

                  <input
                    type="text"
                    placeholder="Nomor Handphone"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                    value={noHP}
                    onChange={(e) => setNoHP(e.target.value)}
                  />

                  <textarea
                    placeholder="Alamat"
                    rows="3"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                  />
                </>
              )}

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-black text-white py-3 rounded-xl font-semibold transition duration-300"
              >
                {isRegisterMode ? "Register" : "Login"}
              </button>
            </form>

            <div className="text-center mt-5">
              <button
                onClick={toggleRegisterMode}
                className="text-sm text-yellow-600 hover:underline font-medium"
              >
                {isRegisterMode
                  ? "Sudah punya akun? Login disini"
                  : "Belum punya akun? Register disini"}
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Header;