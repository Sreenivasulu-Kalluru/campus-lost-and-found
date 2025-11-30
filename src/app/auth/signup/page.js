"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUp() {
  const router = useRouter();
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true); // Start loading

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        // Redirect to login after success
        router.push("/auth/signin");
      } else {
        const json = await res.json();
        setError(json.message || "Registration failed");
        setIsLoading(false); // Stop loading only on error
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  // Consistent styling class for inputs
  const inputClass =
    "w-full p-2 border border-gray-300 rounded mt-1 text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 border border-gray-200">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h1>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe"
              required
              disabled={isLoading}
              className={inputClass}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="student@college.edu"
              required
              disabled={isLoading}
              className={inputClass}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••"
              required
              disabled={isLoading}
              className={inputClass}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full text-white p-2 rounded font-bold transition flex justify-center items-center gap-2
              ${
                isLoading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }
            `}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Creating Account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="text-blue-600 hover:underline font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
