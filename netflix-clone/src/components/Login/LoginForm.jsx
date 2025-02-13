// import React from 'react'

const LoginForm = () => {
  return (
    <div className="">
        <div className="text-white login-form p-15 rounded-md">
            <form action="">
                <input type="email" placeholder="Email Address" className="p-2 m-2 text-white"/> <br />
                <input type="password" name="" id="" placeholder="Password" className="p-2 m-2 text-white" /><br/>
                <button className="p-2 m-2 text-white w-full hover:cursor-pointer bg-red-600 rounded-md">Sign In</button>
            </form>
        </div>
    </div>
  )
}

export default LoginForm
