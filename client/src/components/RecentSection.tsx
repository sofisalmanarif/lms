import BookCard from "./BookCard"


const RecentSection = () => {
  return (
    <section className="flex flex-col mx-auto sm:my-20 my-4 sm:mt-20 w-[95%] sm:max-w-[1780px] sm:gap-4 gap-2 ">
        <h2 className="text-center sm:text-4xl text-xl font-semibold ">Recently Added Books</h2>
        <div className="flex justify-between overflow-x-scroll sm:gap-6 gap-4">
        <BookCard/>
        <BookCard/>
        <BookCard/><BookCard/><BookCard/>
        </div>
    </section>
  )
}

export default RecentSection