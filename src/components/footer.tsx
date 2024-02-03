
const Footer = () => {
    return ( 
    <div className="bg-gray-800 w-full flex p-6  ">
    <div className="flex flex-col w-2/6 items-center gap-3 mx-2 my-6">
        <p className="text-white font-bold">About Us</p>
        <p className="text-gray-500 text-sm">Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills,</p>
        <p className="text-gray-500 text-sm">Copyright ©2024 All rights reserved | This template is made with  by Colorlib</p>


    </div>
    <div className="flex flex-col w-3/6 items-center gap-3 mx-2 my-6">
    <p className="text-white font-bold">Newsletter</p>
    <p className="text-gray-500 text-sm">Stay updated with our latest trends</p>
    <div className="flex justify-center items-center">
    <input type="text" placeholder="Enter Email Address" className="py-1 px-2 w-full border border-gray-500 bg-black  " />
    <button className="p-2 bg-gradient-to-r from-purple-600 to-blue-300"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg></button>

    </div>
    </div>
    <div className="flex flex-col w-1/6 items-center gap-3 mx-2 my-6">
    <p className="text-white font-bold">Follow Us</p>
    <p className="text-gray-500 text-sm">className</p>
    </div>
    </div>
    );}
 
export default Footer;