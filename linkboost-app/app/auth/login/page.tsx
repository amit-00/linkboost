'use client'

import Link from "next/link";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState<string>("");

  return (
    <div className="min-h-screen flex justify-center text-center">
      <div className="flex flex-col px-8 py-20 w-lg">
        <h1 className="text-4xl mb-2 font-bold">Join Linkboost</h1>
        <fieldset className="fieldset">
          <legend className="fieldset-legend mb-4 text-gray-500 text-sm font-medium">Sign up for free!</legend>
          
          {/* Email Input */}
          <label className="input validator w-full">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required/>
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>

          {/* Password Input */}
          <label className="input validator w-full">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
                ></path>
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              required
              placeholder="Password"
              minLength={8}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            />
          </label>
          <p className="validator-hint hidden">
            Must be more than 8 characters, including
            <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
          </p>
          <button className="btn btn-primary">Continue</button>

          <p>OR</p>

          <button className="btn">Sign up with Google</button>
          <button className="btn">Sign up with Apple</button>

          <p>Already have an account? <span className="underline text-primary"><Link href="#">Log In</Link></span></p>
        </fieldset>
      </div>
    </div>
  )
}

export default Login;