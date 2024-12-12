import Genere from "@/components/Genere"
import Hero from "@/components/Hero"
import RecentSection from "@/components/RecentSection"
import AuthFooter from "@/components/ui/AuthFooter"

const Home = () => {
  return (
    <div>
        <Hero/>
        <Genere/>
        <RecentSection/>
                
        {/* <Hero/> */}
    </div>
  )
}

export default Home