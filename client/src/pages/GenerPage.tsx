import BookCard from '@/components/BookCard'


const GenerPage = () => {
  return (
    <div className='sm:container sm:mx-auto px-2 w-full'>
        <div className='grid sm:grid-cols-4 mb-4 grid-cols-2 place-items-center'>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>
            <BookCard/>


        </div>

    </div>
  )
}

export default GenerPage