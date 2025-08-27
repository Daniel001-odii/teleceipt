import AppHeader from "@/components/AppHeader"
import HeroSide from "@/components/HeroSide"
import FeatureIcons from "@/components/FeatureIcons"
import KeyFeatures from "@/components/KeyFeatures"
import UseCase from "@/components/UseCase"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

export default function () {
    return (
        <div className="min-h-screen bg-white p-5">
            {/* HEADER */}
            {/* <AppHeader/> */}

            {/* HERO */}
            <HeroSide/>

            {/* KEY FEATURES */}
            <KeyFeatures/>

            {/* USE CASES */}
            <UseCase/>

            {/* FAQ */}
            <FAQ/>

            {/* FOOTER */}
            <Footer/>
        </div>
    )
}