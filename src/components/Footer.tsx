import { Button } from "./ui/button"

const Footer = () => {
    return (
        <footer className=" relative overflow-hidden py-16">
            {/* Faded watermark */}
            <div className="absolute inset-0 flex items-center justify-center opacity-5 -bottom-[280px]">
                <span className="text-[200px] font-bold text-gray-900">Teleceipt</span>
            </div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                    {/* Left Section - Brand */}
                    <div className="flex-1">
                        {/* Logo and Tagline */}
                        <div className="flex items-center gap-3 mb-4">
                           
                            <span className="text-2xl font-bold text-gray-900">Teleceipt</span>
                        </div>
                        <p className="text-gray-600 mb-6">Global expert in receipt generation</p>
                        
                        {/* Powered By */}
                        <p className="text-gray-500 text-sm mb-8">Powered by Whatsell</p>
                        
                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Navigation Links */}
                    <div className="flex flex-col sm:flex-row gap-12">
                        {/* Column 1 */}
                        <div>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Buy Product</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Sell Product</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Our Creator</a></li>
                            </ul>
                        </div>

                        {/* Column 2 */}
                        <div>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Event</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Tutorial</a></li>
                            </ul>
                        </div>

                        {/* Column 3 */}
                        <div>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Media</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-200 mt-12 pt-8 flex justify-end">
                    <p className="text-gray-500 text-sm">© 2023 Teleceipt All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
