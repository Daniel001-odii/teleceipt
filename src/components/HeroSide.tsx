import { Button } from "./ui/button"
import { Input } from "./ui/input"
import FinancialCards from "./FinancialCards"

const HeroSide = () => {
    return (
        <div
            className="rounded-4xl p-8 md:p-12 flex justify-center items-center mt-6 container mx-auto"
            style={{
                background: "linear-gradient(135deg, #0088cc 0%, #57c7ff 50%, #0088cc 100%)"
            }}
        >
            
            {/* CONTENT */}
            <div className=" flex gap-24 flex-wrap justify-center items-center md:mt-0">

                {/* HERO TEXT */}
                <form className="flex flex-col gap-6 text-white max-w-2xl md:p-5">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight">
                        Generate Receipts & Invoices Instantly via Telegram
                    </h1>
                    <p className=" text-wrap">Transform your business with modern receipt and invoice generation. Seamlessly integrated with Telegram for ultimate convenience.</p>
                    <div className=" w-full">
                        <div className=" rounded-full bg-white p-1 md:max-w-sm flex gap-1 w-full">
                            <input type="email" className="border-none rounded-full outline-none shadow-none focus:outline-none focus:border-none text-gray-600 w-full pl-3" placeholder="Your email address..."/>
                            <Button
                                className="button-7 rounded-full px-6 py-2 text-white font-semibold text-base shadow-lg"
                                style={{
                                    background: "linear-gradient(180deg, #37AEE2 0%, #229ED9 100%)",
                                    border: "1px solid #0095ff",
                                    boxShadow: "0 2px 8px 0 rgba(0, 149, 255, 0.15), rgba(255,255,255,.4) 0 1px 0 0 inset"
                                }}
                            >
                                Join waitlist
                            </Button>
                        </div>
                    </div>
                </form>

                {/* FINANCIAL CARDS */}
                <div className="hidden md:flex justify-center items-center">
                    <FinancialCards />
                    {/* <img src="/images/telegram.png"/> */}
                </div>
            </div>
        </div>
    )
}



export default HeroSide