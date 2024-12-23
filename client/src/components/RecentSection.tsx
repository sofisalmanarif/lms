import BookCard from "./BookCard"
import { TypographyH2 } from "./Typogrphies"


const RecentSection = () => {
  return (
    <section className="flex flex-col mx-auto sm:my-20 my-4 sm:mt-20 w-[95%] sm:max-w-[1780px] sm:gap-10 gap-2 ">
        <TypographyH2 className="text-center">
        Recently Added Books
        </TypographyH2>
        <div className="flex md:max-h-[60vh] justify-between overflow-x-scroll sm:gap-6 gap-4">
        <BookCard/>
        <BookCard/>
        <BookCard/><BookCard/><BookCard/>
        </div>
    </section>
  )
}

export default RecentSection