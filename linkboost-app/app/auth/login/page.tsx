import Link from "next/link";

function Login() {
  return (
    <div className="min-h-screen flex justify-center text-center">
      <div className="flex flex-col p-8 w-lg">
        <h1 className="text-4xl mb-2 font-bold">Join Linkboost</h1>
        <fieldset className="fieldset">
          <legend className="fieldset-legend mb-8 text-gray-600 text-sm font-medium">Sign up for free!</legend>
          <input type="text" className="input w-full" placeholder="Email" />
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