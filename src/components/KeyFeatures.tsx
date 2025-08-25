"use client"

import { Button } from "./ui/button"

const KeyFeatures = () => {
    const features = [
        {
            number: "01",
            title: "Telegram Integration",
            description: "Create receipts and invoices instantly from your Telegram chats. Manage customers and payments with ease.",
            image: "/images/phone-6.png",
            imagePosition: "left",
            floatingCard: {
                title: "Telegram Chat",
                content: (
                    <div className="space-y-2">
                        <div className="bg-blue-100 p-2 rounded-lg">
                            <p className="text-sm text-gray-700">💰 Payment received: $150.00</p>
                            <p className="text-xs text-gray-500">From: John Doe</p>
                        </div>
                        <div className="bg-green-100 p-2 rounded-lg">
                            <p className="text-sm text-gray-700">📄 Receipt generated automatically</p>
                            <p className="text-xs text-gray-500">Invoice #INV-2024-001</p>
                        </div>
                    </div>
                )
            }
        },
        {
            number: "02",
            title: "Multiple templates",
            description: "Customize professional receipts and invoices with your logo, colors, and essential fields.",
            image: "/images/phone-6.png",
            imagePosition: "right",
            floatingCard: {
                title: "Template Gallery",
                content: (
                    <div className="mt-3 p-2 bg-gray-50 rounded text-center">
                        <p className="text-xs text-gray-600">+12 more templates</p>
                    </div>
                )
            }
        },
        {
            number: "03",
            title: "Business Insights",
            description: "Get clear business insights with easy analytics and reporting.",
            image: "/images/phone-6.png",
            imagePosition: "left",
            floatingCard: {
                title: "Analytics Dashboard",
                content: (
                    <div className="bg-white rounded-lg border-gray-200">
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm font-semibold text-gray-700">Revenue</span>
                                <span className="text-sm font-bold text-green-600">+23%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                                <div className="text-center p-2 bg-blue-50 rounded">
                                    <p className="font-bold text-blue-600">$12,450</p>
                                    <p className="text-gray-500">This Month</p>
                                </div>
                                <div className="text-center p-2 bg-green-50 rounded">
                                    <p className="font-bold text-green-600">156</p>
                                    <p className="text-gray-500">Receipts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    ]

    return (
        <div className="py-20 bg-white mt-20">
            <div className="text-center mb-16">
                <span className="inline-block bg-gray-100 text-gray-700 font-semibold px-3 py-1 rounded-full uppercase tracking-wide mb-2">
                    Our features
                </span>
                <h2 className="text-4xl md:text-5xl mb-4">
                    Why Choose Teleceipt?
                </h2>
            </div>

            <div className="container mx-auto px-8 mt-24">
                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col lg:flex-row items-center gap-12">
                            {/* Mobile Phone Image with Floating Card */}
                            <div className={`flex-1 ${feature.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                                <div className="relative flex justify-center items-start max-h-[400px] overflow-hidden">
                                    {/* Light blue background */}
                                    <div className="absolute inset-0 bg-blue-50 rounded-3xl transform rotate-3 z-0"></div>
                                    <div className="h-auto overflow-visible rounded-2xl z-10 relative w-[350px]">
                                        <img
                                            src={feature.image}
                                            alt={`Feature ${feature.number}`}
                                            className="w-full h-auto object-cover"
                                        />

                                        {/* Floating Card at top of phone */}
                                        <div
                                            className="absolute top-55 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                            style={{
                                                zIndex: 20
                                            }}
                                        >
                                            <div className="bg-white rounded-xl p-4 shadow-lg border border-gray-200 min-w-[280px] scale-120">
                                                <div className="flex items-center justify-between mb-3">
                                                    <h4 className="font-semibold text-gray-800 text-sm">
                                                        {feature.floatingCard.title}
                                                    </h4>
                                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                                </div>
                                                {feature.floatingCard.content}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className={`flex-1 ${feature.imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2'}`}>
                                <div className="max-w-md">
                                    <span className="text-3xl md:text-4xl font-bold text-[#229ED9]">/{feature.number} </span>
                                    <h3 className="text-3xl md:text-4xl text-gray-900 mb-6 leading-tight">
                                        {feature.title}
                                    </h3>
                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                        {feature.description}
                                    </p>
                                    <Button disabled
                                        className="button-7 rounded-full px-6 py-2 text-white font-semibold text-base shadow-lg"
                                        style={{
                                            background: "linear-gradient(180deg, #37AEE2 0%, #229ED9 100%)",
                                            border: "1px solid #0095ff",
                                            boxShadow: "0 2px 8px 0 rgba(0, 149, 255, 0.15), rgba(255,255,255,.4) 0 1px 0 0 inset"
                                        }}
                                    >Get Started
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default KeyFeatures
