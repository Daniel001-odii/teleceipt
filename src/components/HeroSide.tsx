"use client"

import { useState } from "react"
import { toast } from "sonner"
import { TickCircle, CloseCircle } from "iconsax-reactjs"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import FinancialCards from "./FinancialCards"
import { CustomToast } from "./ui/custom-toast"

const HeroSide = () => {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email.trim()) {
            toast.custom(() => (
                <CustomToast
                    variant="error"
                    title="Email Required"
                    description="Please enter your email address to join the waitlist."
                />
            ))
            return
        }

        setIsLoading(true)

        try {
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email.trim() }),
            })

            const data = await response.json()

            if (response.ok) {
                toast.custom(() => (
                    <CustomToast
                        variant="success"
                        title="Hurray!"
                        description={data.message}
                    />
                ))
                setEmail("")
            } else {
                toast.custom(() => (
                    <CustomToast
                        variant="info"
                        title="Oopps..."
                        description={data.error}
                    />
                ))
            }
        } catch (error) {
            toast.custom(()=>(
                <CustomToast
                    variant="error"
                    title="Connection Error"
                    description="Something went wrong. Please try again."
                />
            ))
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <section
            className="pt-32 px-5 container mx-auto rounded-4xl"
            style={{
                background: "#ffffff",
                backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 1) 44%, rgba(0, 136, 204, 0.91) 100%)"
            }}
        >
            <div
                className="container flex flex-col items-center justify-center gap-4 text-center"
            >
                <h2 className="text-foreground flex text-xl tracking-tighter">
                    <svg
                        className="mr-3"
                        width="35"
                        height="24"
                        viewBox="0 0 35 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M22.0411 1.18695C22.2971 0.487161 23.287 0.487161 23.5431 1.18695L24.3079 3.27567C24.9078 4.91423 25.8577 6.40229 27.0915 7.63612C28.3254 8.86996 29.8134 9.8199 31.452 10.4197L33.5407 11.1846C34.2416 11.4406 34.2416 12.4306 33.5407 12.6866L31.452 13.4515C29.8134 14.0513 28.3254 15.0013 27.0915 16.2351C25.8577 17.4689 24.9078 18.957 24.3079 20.5955L23.5431 22.6843C23.287 23.3851 22.2971 23.3851 22.0411 22.6843L21.2762 20.5955C20.6763 18.957 19.7264 17.4689 18.4926 16.2351C17.2587 15.0013 15.7707 14.0513 14.1321 13.4515L12.0434 12.6866C11.3436 12.4306 11.3436 11.4406 12.0434 11.1846L14.1321 10.4197C15.7707 9.8199 17.2587 8.86996 18.4926 7.63612C19.7264 6.40229 20.6763 4.91423 21.2762 3.27567L22.0411 1.18695Z"
                            fill="#343433"
                        ></path>
                        <path
                            d="M5.50615 0.924521C5.63416 0.574639 6.12911 0.574639 6.25712 0.924521L6.63954 1.96883C6.93944 2.78808 7.4144 3.53208 8.03129 4.14897C8.64818 4.76587 9.39218 5.24082 10.2114 5.54073L11.2557 5.92314C11.6062 6.05115 11.6062 6.54611 11.2557 6.67411L10.2114 7.05653C9.39218 7.35644 8.64818 7.83139 8.03129 8.44828C7.4144 9.06518 6.93944 9.80917 6.63954 10.6284L6.25712 11.6727C6.12911 12.0232 5.63416 12.0232 5.50615 11.6727L5.12374 10.6284C4.82383 9.80917 4.34888 9.06518 3.73198 8.44828C3.11509 7.83139 2.37109 7.35644 1.55184 7.05653L0.507529 6.67411C0.157647 6.54611 0.157647 6.05115 0.507529 5.92314L1.55184 5.54073C2.37109 5.24082 3.11509 4.76587 3.73198 4.14897C4.34888 3.53208 4.82383 2.78808 5.12374 1.96883L5.50615 0.924521Z"
                            fill="#343433"
                        ></path>
                    </svg>
                    Teleceipt
                </h2>
                <h1
                    className="font-playfair text-foreground max-w-xl text-4xl tracking-tighter md:text-7xl"
                >
                    Generate Receipts & Invoices <span className=" italic underline">Instantly</span> via Telegram
                </h1>
                <p className="text-muted-foreground mt-7 max-w-xl text-xl tracking-tight">
                    Transform your business with modern receipt and invoice generation. Seamlessly integrated with Telegram for ultimate convenience.
                </p>
                <form onSubmit={handleSubmit} className="mt-10 w-full max-w-xl">
                    <div className="flex w-full items-center justify-center rounded-full border p-1 bg-white">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                            className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 min-w-0 rounded-full border bg-transparent px-3 py-1 text-base transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-xl! w-full border-none pl-5 tracking-tight shadow-none outline-none focus-visible:outline-none focus-visible:ring-0"
                            placeholder="Enter Your Email"
                        />
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="button-7 rounded-full px-6 py-2 text-white font-semibold text-base shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            style={{
                                background: "linear-gradient(180deg, #37AEE2 0%, #229ED9 100%)",
                                border: "1px solid #0095ff",
                                boxShadow: "0 2px 8px 0 rgba(0, 149, 255, 0.15), rgba(255,255,255,.4) 0 1px 0 0 inset"
                            }}
                        >
                            {isLoading ? "Joining..." : "Join waitlist"}
                        </Button>
                    </div>
                </form>
                <div
                    className=" relative mt-12 flex h-[450px] w-screen justify-center overflow-hidden"
                >
                    <div
                        className="absolute mx-auto mt-6 w-full items-center justify-center rounded-[75px] bg-blac md:mt-12 md:flex md:h-[840px] md:w-[400px]"

                    >
                        <img
                            className="z-2 absolute md:scale-150 object-cover"
                            alt="Gold phone frame"
                            src="/images/Telegram iOS 0-left.png"
                        />
                        {/* <div className="h-full w-full">
                            <div className="mt-20 flex justify-between px-0">
                                <h1
                                    className="text-background flex items-end gap-2 px-12 text-5xl font-semibold tracking-tight md:text-6xl"
                                >
                                    Mon
                                    <div className="mb-2 size-3 rounded-full bg-red-500 md:size-5"></div>
                                </h1>
                                <div className="mr-8 mt-2 flex flex-col items-end">
                                    <p
                                        className="text-muted-foreground text-lg tracking-tighter md:text-xl"
                                    >
                                        Feburary 9
                                    </p>
                                    <p
                                        className="text-muted-foreground/50 -mt-1 text-xl font-semibold tracking-tighter md:text-2xl"
                                    >
                                        2025
                                    </p>
                                </div>
                            </div>

                        </div> */}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroSide