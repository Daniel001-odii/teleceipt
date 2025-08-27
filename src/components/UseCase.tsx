"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Store, 
  Palette, 
  Truck, 
  GraduationCap, 
  Calendar,
  Users,
  TrendingUp,
  Clock,
  DollarSign,
  Zap,
  Quote,
  Play,
  ArrowLeft,
  ArrowRight
} from "lucide-react"

const UseCase = () => {
  const useCases = [
    {
      id: 1,
      title: "Retail Shop Owner",
      subtitle: "Small Store",
      icon: Store,
      category: "Retail",
      person: "Sarah",
      role: "Boutique Owner, Sarah's Style",
      description: "Using Teleceipt for the last few months has been pure bliss for us as a business. Our customers are able to come in and have seamless transactions done in seconds, and that is a very great strategy for us as a business to strengthen our relationship with our consumers.",
      result: "Happier customers, more repeat visits, and Sarah gets home earlier.",
      benefits: ["Faster checkout", "Branded receipts", "Reduced wait times"],
      color: "bg-blue-50 border-blue-200",
      iconColor: "text-blue-600",
      badgeColor: "bg-blue-100 text-blue-800",
      image: "https://media.istockphoto.com/id/653003428/photo/fashionable-clothes-in-a-boutique-store-in-london.jpg?s=612x612&w=0&k=20&c=UafU4a4xSbepJow4kvNu0q-LD4hFUoli7q3fvwkp79s=" // Placeholder - replace with actual testimonial image
    },
    {
      id: 2,
      title: "Freelancer",
      subtitle: "Creative Services",
      icon: Palette,
      category: "Creative",
      person: "Alex",
      role: "Graphic Designer, Creative Studio",
      description: "Before Teleceipt, invoicing was a nightmare. I'd spend hours creating invoices, sending emails, and chasing payments. Now I create and send custom invoices right in client chats. It's transformed how I work.",
      result: "Now, Alex bills faster, gets paid quicker, and focuses on designing, not admin.",
      benefits: ["Custom invoices", "Payment tracking", "Earnings insights"],
      color: "bg-purple-50 border-purple-200",
      iconColor: "text-purple-600",
      badgeColor: "bg-purple-100 text-purple-800",
      image: "https://img.freepik.com/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg?semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 3,
      title: "Food Truck Operator",
      subtitle: "Hospitality/Food",
      icon: Truck,
      category: "Food & Beverage",
      person: "Juan",
      role: "Owner, Juan's Tacos",
      description: "Running a food truck means quick sales and cash transactions. Paper receipts were always running out, and tracking income was impossible. Teleceipt changed everything - now every order gets a digital receipt instantly.",
      result: "Juan saves on paper, spots busy times, and grows his menu smarter.",
      benefits: ["Auto-generated receipts", "Sales insights", "Tax calculations"],
      color: "bg-orange-50 border-orange-200",
      iconColor: "text-orange-600",
      badgeColor: "bg-orange-100 text-orange-800",
      image: "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvY2VyeSUyMHN0b3JlfGVufDB8fDB8fHww"
    },
    {
      id: 4,
      title: "Online Tutor",
      subtitle: "Education/Services",
      icon: GraduationCap,
      category: "Education",
      person: "Lisa",
      role: "Language Tutor, Online Academy",
      description: "Teaching online means managing multiple students and payments. I used to manually email invoices after every lesson - easy to forget, hard to track. Teleceipt integrates perfectly with my Telegram groups.",
      result: "Lisa now has more time for teaching and less for paperwork, boosting her ratings.",
      benefits: ["Instant invoicing", "Payment tracking", "Student analytics"],
      color: "bg-green-50 border-green-200",
      iconColor: "text-green-600",
      badgeColor: "bg-green-100 text-green-800",
      image: "https://images.prismic.io/tutor-cruncher/Z1l_tZbqstJ98UWp_be-online-tutor.webp?auto=format,compress"
    },
    {
      id: 5,
      title: "Event Planner",
      subtitle: "Events/Consulting",
      icon: Calendar,
      category: "Events",
      person: "Mike",
      role: "Event Planner, Celebrations Co.",
      description: "Planning events means managing quotes, deposits, and payments from multiple clients. Spreadsheets were eating my weekends. Teleceipt turns every chat into action - send invoices, get confirmations, track payments.",
      result: "Mike closes deals faster and enjoys events more, without the admin headache.",
      benefits: ["Personalized invoices", "Auto-receipts", "Budget insights"],
      color: "bg-pink-50 border-pink-200",
      iconColor: "text-pink-600",
      badgeColor: "bg-pink-100 text-pink-800",
      image: "https://media.istockphoto.com/id/1177485677/photo/table-setting-for-an-event-party-or-wedding-reception.jpg?s=612x612&w=0&k=20&c=F1kd8_DGpxBmq02GLMywXHJbAuyg-50xW1xdsQNxDm0="
    }
  ]

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-4 text-sm">
            Customer Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Don't just take our word for it.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how professionals across different industries are transforming their 
            businesses with Teleceipt.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {useCases.map((useCase, index) => {
                const IconComponent = useCase.icon
                return (
                  <CarouselItem key={useCase.id} className="basis-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Left Section - Content */}
                      <div className="space-y-8">
                        {/* Quote Icon */}
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <Quote className="w-12 h-12 text-blue-400" />
                          </div>
                          <div className="flex-1">
                            {/* Category Badge */}
                            <Badge variant="secondary" className={`mb-4 ${useCase.badgeColor}`}>
                              <IconComponent className="w-3 h-3 mr-1" />
                              {useCase.category}
                            </Badge>
                            
                            {/* Testimonial Text */}
                            <p className="text-xl text-gray-700 leading-relaxed mb-6">
                              {useCase.description}
                            </p>
                            
                            {/* Divider */}
                            <div className="w-16 h-px bg-gray-300 mb-6"></div>
                            
                            {/* Person Info */}
                            <div className="space-y-2">
                              <h4 className="text-xl font-bold text-gray-900">
                                {useCase.person}
                              </h4>
                              <p className="text-gray-600">
                                {useCase.role}
                              </p>
                            </div>
                            
                            {/* Key Benefits */}
                           {/*  <div className="mt-8 space-y-3">
                              <div className="flex items-center space-x-2">
                                <Zap className="w-4 h-4 text-yellow-500" />
                                <span className="font-medium text-gray-800">Key Benefits:</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {useCase.benefits.map((benefit, idx) => (
                                  <Badge 
                                    key={idx} 
                                    variant="outline" 
                                    className="text-xs bg-white border-gray-300"
                                  >
                                    {benefit}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                             */}
                            
                          </div>
                        </div>
                      </div>

                      {/* Right Section - Visual */}
                      <div className="relative">
                        {/* Customer Avatars Row */}
                       {/*  <div className="flex justify-center mb-8">
                          <div className="flex space-x-4">
                            {useCases.map((_, idx) => (
                              <div 
                                key={idx}
                                className={`w-12 h-12 rounded-full border-2 ${
                                  idx === index 
                                    ? 'border-blue-500 bg-blue-100' 
                                    : 'border-gray-200 bg-gray-100'
                                } flex items-center justify-center`}
                              >
                                <Users className="w-5 h-5 text-gray-600" />
                              </div>
                            ))}
                          </div>
                        </div> */}

                        {/* Main Visual - Phone/Video Placeholder */}
                        <div className="relative h-[400px] overflow-visible">
                          {/* Background decoration */}
                          <div className="absolute bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl transform rotate-3 overflow-visible">
                            <img src={useCase.image} className=" rounded-3xl"/>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            
            {/* Custom Navigation */}
            <div className="flex justify-center mt-12 space-x-4">
              <CarouselPrevious className="relative -left-0 top-0 translate-y-0 w-12 h-12 rounded-full border-2 border-gray-300 hover:border-blue-500">
                <ArrowLeft className="w-5 h-5" />
              </CarouselPrevious>
              <CarouselNext className="relative -right-0 top-0 translate-y-0 w-12 h-12 rounded-full border-2 border-gray-300 hover:border-blue-500">
                <ArrowRight className="w-5 h-5" />
              </CarouselNext>
            </div>
          </Carousel>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of professionals who are already saving time and improving 
              their customer experience with Teleceipt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="rounded-full font-semibold px-8"
                style={{
                  background: "linear-gradient(180deg, #37AEE2 0%, #229ED9 100%)",
                  border: "1px solid #0095ff",
                  boxShadow: "0 2px 8px 0 rgba(0, 149, 255, 0.15), rgba(255,255,255,.4) 0 1px 0 0 inset"
                }}
              >
                <Clock className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full font-semibold px-8 border-2"
              >
                View All Templates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseCase
