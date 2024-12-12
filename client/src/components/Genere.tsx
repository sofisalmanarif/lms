import { GenerCard } from "./ui/GenerCard"


const Genere = () => {
  return (
    <section className="mx-auto py-5 overflow-x-scroll flex  sm:gap-4 gap-2 w-[95%] sm:max-w-[1780px] " >
        {/* <h3 className="text-6xl font-semibold">Genre</h3> */}
        <GenerCard/><GenerCard/><GenerCard/><GenerCard/><GenerCard/> <GenerCard/> <GenerCard/>
    </section>
  )
}

export default Genere