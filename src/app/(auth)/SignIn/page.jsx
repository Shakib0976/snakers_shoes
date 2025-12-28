"use client";

import {
    Eye,
    EyeOff,
    Mail,
    Lock,
    AlertCircle,
    CheckCircle,
    User,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import AnimatedSneakerImage from "@/components/ui/AnimatedSneakerImage";
import AnimatedSneakerImage2 from "@/components/ui/AnnimatedSneakerImage2";

const InputField = ({
    id,
    name,
    type,
    placeholder,
    value,
    onChange,
    icon: Icon,
    error,
    success,
    showPasswordToggle = false,
    onTogglePassword,
    ...props
}) => (
    <div>
        <div className="relative">
            {Icon && (
                <Icon className="absolute left-3 top-4 h-5 w-5 text-gray-400" />
            )}
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full ${Icon ? "pl-11" : "pl-3"} ${showPasswordToggle ? "pr-10" : "pr-3"
                    } py-3 rounded-xl border bg-white/60 dark:bg-gray-700/60 focus:ring-2 focus:ring-green-700 transition-all ${error
                        ? "border-red-500"
                        : success
                            ? "border-green-500"
                            : "border-gray-300 dark:border-gray-600"
                    }`}
                {...props}
            />

            {showPasswordToggle && (
                <button
                    type="button"
                    onClick={onTogglePassword}
                    className="absolute right-3 top-3.5 text-gray-400"
                >
                    {type === "password" ? (
                        <Eye className="h-5 w-5 cursor-pointer" />
                    ) : (
                        <EyeOff className="h-5 w-5 cursor-pointer" />
                    )}
                </button>
            )}
        </div>

        {error && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" /> {error}
            </p>
        )}

        {success && (
            <p className="mt-1 text-sm  flex items-center">
                <CheckCircle className="h-4 w-4 mr-1" /> {success}
            </p>
        )}
    </div>
);

const SignIn = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState({});
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({});
        setSuccess({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1000);
    };

    const handlePasswordReset = () => alert("Password reset link sent!");
    const handleQuickLogin = (role) => alert(`${role} login`);
    const handleSocialLogin = (provider) => alert(provider);

    return (
        <div className="min-h-screen max-w-10/12 mx-auto  grid grid-cols-1 lg:grid-cols-2 items-center  gap-10 px-6 poppins-font">

            <div className="lg:flex justify-center hidden">
                {
                    !isLogin ?   <AnimatedSneakerImage /> : <AnimatedSneakerImage2 />
                }
            </div>

            <div className="flex justify-center ">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative z-10 w-full  lg:max-w-md  backdrop-blur-2xl p-8 sm:p-10 "
                >

                    <div className="text-center">

                        <h2 className="mt-8  text-2xl lg:text-5xl font-bold tracking-tight text-gray-900 dark:text-white merriweather-font">
                            {isLogin ? "Welcome Back" : "Create Account"}
                        </h2>
                        <p className="mt-2 text-sm  lg:text-lg text-gray-600 dark:text-gray-400 mb-10">
                            {isLogin
                                ? "Sign in to continue with "
                                : "Register to get started with "}
                            <span className="font-bold  merriweather-font">
                                STEPS
                            </span>
                        </p>
                    </div>


                    <AnimatePresence>
                        {errors.general && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className="mb-4 p-3 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 flex items-center"
                            >
                                <AlertCircle className="h-5 w-5 mr-2" /> {"Invalid email or password. Please try again."}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {!isLogin && (
                            <InputField
                                id="name"
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Full Name"
                                icon={User}
                                error={errors.name}
                                success={success.name}
                                autoComplete="name"
                            />
                        )}
                        <InputField
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            icon={Mail}
                            error={errors.email}
                            success={success.email}
                            autoComplete="email"
                        />
                        <InputField
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            icon={Lock}
                            error={errors.password}
                            success={success.password}
                            showPasswordToggle
                            onTogglePassword={() => setShowPassword(!showPassword)}
                            autoComplete={isLogin ? "current-password" : "new-password"}
                        />

                        {/* Forgot Password link */}
                        {isLogin && (
                            <div className="text-right">
                                <button
                                    type="button"
                                    onClick={handlePasswordReset}
                                    className="text-sm text-green-700 dark:text-green-500 hover:underline"
                                >
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                        {!isLogin && (
                            <InputField
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                icon={Lock}
                                error={errors.confirmPassword}
                                success={success.confirmPassword}
                                showPasswordToggle
                                onTogglePassword={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                                autoComplete="new-password"
                            />
                        )}
                        {!isLogin && (
                            <label className="flex items-start space-x-2 text-gray-600 dark:text-gray-300 text-sm">
                                <input
                                    type="checkbox"
                                    checked={agreeToTerms}
                                    required
                                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                                    className="h-4 w-4 rounded border-gray-300 text-green-700 focus:ring-green-700 mt-0.5 cursor-pointer"
                                />
                                <span>
                                    I agree to the{" "}
                                    <a
                                        href="#"
                                        className="text-green-700 dark:text-green-500 font-medium hover:text-green-800 dark:hover:text-green-400"
                                    >
                                        Terms of Service
                                    </a>{" "}
                                    and{" "}
                                    <a
                                        href="#"
                                        className="text-green-700 dark:text-green-500 font-medium hover:text-green-800 dark:hover:text-green-400"
                                    >
                                        Privacy Policy
                                    </a>
                                </span>
                            </label>
                        )}
                        <motion.button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 rounded-xl button-base-bg  text-primary  cursor-pointer hover:font-bold font-semibold text-lg  shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isLoading
                                ? isLogin
                                    ? "Signing In..."
                                    : "Registering..."
                                : isLogin
                                    ? "Sign In"
                                    : "Register"}
                        </motion.button>

                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            {isLogin ? "Don't have an account? " : "Already have an account? "}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="font-medium text-green-700 dark:text-green-500 hover:text-green-800 dark:hover:text-green-400 cursor-pointer"
                            >
                                {isLogin ? "Register here" : "Login here"}
                            </button>
                        </p>
                    </div>

                    <div className="mt-6 relative">
                        <div className="absolute inset-0 flex items-center">
                            {/* <div className="w-full border-t border-gray-300 dark:border-gray-600"></div> */}
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-transparent text-gray-500 dark:text-gray-400">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => handleSocialLogin("google")}
                            className="flex items-center justify-center py-3 w-full border border-gray-300 cursor-pointer dark:border-gray-600 rounded-xl shadow-sm bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                        >
                            <FcGoogle className="h-5 w-5 mr-2" />Signup With Google
                        </button>
                    </div>
                </motion.div>
            </div>

        </div>
    );
};

export default SignIn;