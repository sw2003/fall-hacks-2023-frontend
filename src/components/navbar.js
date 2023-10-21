export default function Navbar(){
    return (
        <nav className="lg:bg-white lg:w-screen lg:h-14 shadow-sm lg:px-16 lg:py-3 flex justify-items-center items-center  w-full justify-between">
    
            {/* <img src={logo} alt='logo'  className="lg:h-10 lg:pr-3 h-10 pr-4 pl-2 mt-2"/> */}
    
            <h1 className="font-poppins font-bold text-sm lg:text-xl mt-2 mb-2">Fall Hacks 2023</h1>
            <h1 className="font-poppins font-bold text-sm lg:text-xl mt-2 mb-2"></h1>
            <h1 className="font-poppins font-bold text-sm lg:text-xl mt-2 mb-2"></h1>
            <h1 className="font-poppins font-bold text-sm lg:text-xl mt-2 mb-2"></h1>
            <h1 className="font-poppins font-bold text-sm lg:text-xl mt-2 mb-2"></h1>
            <h1 className="font-poppins font-bold text-sm lg:text-xl mt-2 mb-2"></h1>
            
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-white dark:border-gray-700">
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}