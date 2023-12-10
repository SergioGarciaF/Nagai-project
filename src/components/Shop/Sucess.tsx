import { Link } from "react-router-dom"

function Sucess() {
  return (
    <>
    <div className="flex flex-col justify-center font-inter items-center m-auto h-screen">
        <h1 className="font-bold text-5xl">Payment successfully processed! </h1>
        <p className="text-3xl mt-3">Thank you for choosing us.</p>
        <Link to='/'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md mt-5">Back to Nagai</button></Link>
    </div>
    </>
  )
}

export default Sucess