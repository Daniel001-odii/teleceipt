"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { ArrowDown2 } from 'iconsax-reactjs'
const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs = [
        {
            question: "How does Teleceipt integrate with Telegram?",
            answer: "Teleceipt seamlessly integrates with Telegram through our bot. Simply connect your business account, and you can generate receipts and invoices directly from your Telegram chats. Our bot handles everything from customer information to payment tracking."
        },
        {
            question: "What types of businesses can use Teleceipt?",
            answer: "Teleceipt is perfect for small to medium businesses, freelancers, service providers, and anyone who needs to generate professional receipts and invoices. Whether you're a restaurant, retail store, consultant, or online business, our solution adapts to your needs."
        },
        {
            question: "Is my business data secure with Teleceipt?",
            answer: "Absolutely. We use enterprise-grade encryption and security measures to protect your business data. All transactions and customer information are encrypted, and we comply with international data protection standards."
        },
        {
            question: "Can I customize my receipts and invoices?",
            answer: "Yes! Teleceipt offers extensive customization options. You can add your business logo, customize colors, include custom fields, and create professional templates that match your brand identity."
        },
        {
            question: "How does payment tracking work?",
            answer: "Our system automatically tracks payments and updates invoice statuses in real-time. You'll receive instant notifications when payments are received, and all transaction history is stored securely for easy access and reporting."
        },
        {
            question: "What payment methods does Teleceipt support?",
            answer: "Teleceipt supports multiple payment methods including bank transfers, digital wallets, and popular payment gateways. We're constantly adding new payment options to make it easier for your customers to pay."
        }
    ]

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="py-20 ">
            <div className="container mx-auto md:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 font-bold">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Everything you need to know about Teleceipt and how it can transform your business operations
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="max-w-5xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-8 py-3 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-lg text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <div className="flex-shrink-0">
                                    <div className={`w-6 h-6 text-[#0088cc] transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                                        <ArrowDown2 />
                                    </div>
                                </div>
                            </button>

                            {openIndex === index && (
                                <div className="px-8 pb-6">
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <p className="text-lg text-muted-foreground mb-6">
                        Still have questions? We're here to help!
                    </p>
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
        </div>
    )
}

export default FAQ
