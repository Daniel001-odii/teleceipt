import SvgImageOne from "./SvgImageOne"
import SvgImageThree from "./SvgImageThree"
import SvgImageTwo from "./SvgImageTwo"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const KeyFeatures = () => {
    const features = [
        {
            title: "Telegram Integration",
            description: "Generate receipts and invoices directly from your Telegram chats. Our bot handles everything from customer information to payment tracking, making it easier than ever to manage your business communications and financial records in one place.",
            image: "/images/telegram.png"
        },
        {
            title: "Professional Templates",
            description: "Create stunning, professional receipts and invoices with our customizable templates. Add your business logo, customize colors, and include all necessary fields to maintain your brand identity while ensuring compliance with tax regulations.",
            image: "/images/templates.png"
        },
        {
            title: "Payment Tracking",
            description: "Automatically track payments and update invoice statuses in real-time. Receive instant notifications when payments are received, and maintain a complete audit trail of all transactions for better financial management and reporting.",
            image: "/images/payments.png"
        }
    ]

    return (
        <div className="py-20">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl mb-4">
                    Why Choose Teleceipt?
                </h2>
            </div>

            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="overflow-hidden border border-[rgba(255,255,255,0.25)] backdrop-blur-sm  hover:shadow-xl transition-all duration-300 bg-white">
                            <div className="">
                                {/* Image at the top */}
                                <div className="mb-3 flex justify-center">
                                    <img
                                        src={feature.image}
                                        alt={feature.title}
                                        className="rounded-2xl border border-[rgba(255,255,255,0.25)] backdrop-blur-sm w-full h-70 object-cover"
                                        style={{
                                            borderWidth: "1.5px",
                                            background: "rgba(255,255,255,0.10)",
                                        }}
                                    />
                                </div>
                                
                                {/* Content below image */}
                                <div className="px-6 p-3">
                                    <h3 className="text-2xl font-semibold text-left">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-left">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default KeyFeatures
