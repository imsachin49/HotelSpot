export default function Newsletter() {
    return(
        <div className="w-full h-fit bg-blue-600 py-8 mt-[4rem]">
            <div className="flex flex-col items-center justify-center align-middle">
                <p className="vsm:text-3xl xs:text-lg text-white">Subscribe to our newsletter</p>
                <p className="text-sm text-center text-gray-100 mx-8">Get updates on sales and offers directly to your inbox.</p>
                <div className="flex gap-2 mt-4 px-4">
                    <input type="text" placeholder="Enter your email address" className="border outline-none border-gray-100 px-4 py-2 vsm:w-[400px] vsm:mx-0 xs:w-full rounded-l-md placeholder:text-black" />
                    <button className="bg-black text-white px-4 py-2 rounded-r-md">Subscribe</button>
                </div>
            </div>
        </div>
    )
}
