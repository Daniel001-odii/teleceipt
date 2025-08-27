"use client"

import { useState } from "react"
import { toast } from "sonner"
import { TickCircle, CloseCircle } from "iconsax-reactjs"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import FinancialCards from "./FinancialCards"
import { CustomToast } from "./ui/custom-toast"
import TeleceiptLogo from "./TeleceiptLogo"

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
            toast.custom(() => (
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
                    <TeleceiptLogo />
                </h2>
                <h1
                    className="font-playfair text-foreground max-w-xl text-4xl tracking-tighter md:text-7xl"
                >
                    Generate Receipts & Invoices Right in Telegram, <br /><span className=" italic underline">Super Fast!</span>
                    {/* Generate Receipts & Invoices <span className=" italic underline">Instantly</span> via Telegram */}
                </h1>
                <div className="text-muted-foreground max-w-xl text-xl tracking-tight font-sans">
                    Instantly create receipts and invoices in Telegram. No extra apps, no hassle, just chat, get paid, and send professional invoices & receipts in seconds.
                    <br />
                </div>

                <form onSubmit={handleSubmit} className="mt-10 w-full max-w-xl font-sans">
                    <div className=" mb-3">Be the first to try Teleceipt. 👇 </div>
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