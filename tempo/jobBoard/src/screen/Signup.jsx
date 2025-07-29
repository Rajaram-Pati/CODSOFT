import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { log_in_user } from "../store/AuthRegister";

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    fullname: "",
    password: ""
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/v1/users/signup", formData, {
        withCredentials: true,
      });
      alert(res.data.message);
      dispatch(res.data)
      navigate("/landing");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-2xl font-bold text-center text-purple-600 mb-6"
          variants={fadeUp}
          custom={0}
        >
          Sign Up
        </motion.h2>

        <motion.input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="input"
          variants={fadeUp}
          custom={1}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="input"
          variants={fadeUp}
          custom={2}
        />
        <motion.input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={formData.fullname}
          onChange={handleChange}
          className="input"
          variants={fadeUp}
          custom={3}
        />
        <motion.input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="input"
          variants={fadeUp}
          custom={4}
        />

        <motion.button
          type="submit"
          className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-all duration-300"
          variants={fadeUp}
          custom={5}
        >
          Register
        </motion.button>

        <motion.p
          className="text-center text-sm mt-4 text-gray-600"
          variants={fadeUp}
          custom={6}
        >
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 font-semibold hover:underline">
            Login here
          </Link>
        </motion.p>
      </motion.form>
    </motion.div>
  );
}
