import React from 'react'



const Contactus = () => {
    return (
        <div className="custom  p-3 mx-auto mt-10">
            <div className='max-w-lg'>

                <h1 className=' mx-auto p-3 m-5  text-6xl  asthetic '> <span className='text-[#ff6584]'>"C</span>ontact"</h1>
                <form className="mt-8 space-y-4">
                    <input type='text' placeholder='Name'
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm out" />
                    <input type='email' placeholder='Email'
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm out" />
                    <input type='text' placeholder='Subject'
                        className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm out" />
                    <textarea placeholder='Message' rows={6}
                        className="w-full rounded-md px-4 bg-gray-100 text-sm pt-3 out"></textarea>
                    <button type='button'
                        className="text-white kxa  font-semibold rounded-md text-sm px-4 py-3 w-full">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contactus