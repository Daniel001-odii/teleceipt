import { Button } from "./ui/button"

const KeyFeatures = () => {
    const features = [
        {
            number: "01",
            title: "categorization that makes it easy to find event tickets",
            description: "ticket makes it easy for you to find concert tickets and also categorize them properly so that users can easily use them",
            image: "/images/phone-6.png",
            imagePosition: "left"
        },
        {
            number: "02",
            title: "the ease of buying tickets can provide a different experience",
            description: "ticket makes it easy for you to find concert tickets and also categorize them properly so that users can easily use them",
            image: "/images/phone-6.png",
            imagePosition: "right"
        },
        {
            number: "03",
            title: "choosing a seat can now be done by looking at the actual map",
            description: "ticket makes it easy for you to find concert tickets and also categorize them properly so that users can easily use them",
            image: "/images/phone-6.png",
            imagePosition: "left"
        }
    ]

    return (
        <div className="py-20 bg-white">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl mb-4">
                    Why Choose Teleceipt?
                </h2>
            </div>

            <div className="container mx-auto px-8 mt-24">
                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col lg:flex-row items-center gap-12">
                            {/* Mobile Phone Image */}
                            <div className={`flex-1 ${feature.imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1'}`}>
                                <div className="relative flex justify-center items-start max-h-[400px] overflow-hidden">
                                    {/* Light blue background */}
                                    <div className="absolute inset-0 bg-blue-50 rounded-3xl transform rotate-3 z-0"></div>
                                    <div className="w-full h-auto overflow-hidden rounded-2xl z-10 relative">
                                        <img
                                            src={feature.image}
                                            alt={`Feature ${feature.number}`}
                                            className="w-full h-auto object-cover"
                                        />
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
