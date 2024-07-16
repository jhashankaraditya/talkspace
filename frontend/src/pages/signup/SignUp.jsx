import GenderCheckBox from "./GenderCheckBox"

const SignUp = () => {
    return (
        <div className="flex flex-col items-centerjustify-center min-w-96 mx-auto ">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
                <h1 className="text-3xl font-semibold text-center text-white">
                    SignUp <span className="text-blue-500">ChatApp</span>
                </h1>
                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Full Name</span>
                        </label>
                        <input type="text" placeholder="Enter Your Name" className="w-full input input-bordered h-10 bg-white text-black" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Username</span>
                        </label>
                        <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10 bg-white text-black" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10 bg-white text-black" />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Confirm Password</span>
                        </label>
                        <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10 bg-white text-black" />
                    </div>
                    <GenderCheckBox/>

                    <a className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block text-white" href="#">
                        Already have an account?
                    </a>
                    <div><button className="btn btn-block btn-sm mt-2 border border-slate-700 text-white">Sign Up</button></div>
                </form>
            </div>
        </div>
    )
}

export default SignUp