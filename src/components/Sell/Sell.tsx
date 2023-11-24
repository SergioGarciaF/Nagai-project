
import brush from '../../assets/icons/brush.png'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Sell = () => {
    return (
        <>
            <Header />
            <div className='flex flex-col gap-2 font-inter justify-center mt-20 items-center mx-auto'>
                <img src={brush} width={30} alt="" />
                <p className='font-semibold text-sm'>Artist:</p>
                <input type="text" className="input input-bordered w-full max-w-xs" />
                <p className='font-semibold text-sm'>Name of product:</p>
                <input type="text" className="input input-bordered w-full max-w-xs" />
                <p className='font-semibold text-sm'>Price:</p>
                <input type="number" className="input input-bordered w-full max-w-xs" />
                <p className='font-semibold text-sm'>Select archive:</p>
                <input type="file" className="file-input file-input-bordered file-input-sm w-full max-w-xs" />
                <button className="btn btn-xs btn-outline btn-neutral mt-3">Upload</button>
            </div>
            <Footer /></>
    )
}

export default Sell