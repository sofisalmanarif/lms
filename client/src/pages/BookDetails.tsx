
import { Button } from '@/components/ui/button'
import { LocateIcon } from 'lucide-react'

const BookDetails = () => {
  return (
    <main className='container mx-auto'>
        <div className='flex items-start justify-start flex-col sm:flex-row sm:p-8 p-2 sm:border-[1px] border-0 border-gray-200 rounded-md
        gap-4'>
        <div className='sm:w-[40%] h-[40vh] w-full  border-[1px] border-gray-200 rounded-md flex  items-center justify-center'> 
            <img src="../../public/book.png" alt="" />
        </div>
        <div className='sm:w-[60%] w-full relative'>
            <div className='sm:pr-20 pr-5 border-b-[1px] border-gray-300 sm:pb-10 pb-4 py-2 sm:mb-10 mb-6' >
                <div className='absolute top-0 right-4'><Button className='font-semibold'><LocateIcon size={150}/></Button></div>
                
                <p className='sm:text-4xl  text-2xl  font-semibold'>You Don't know js</p>
                <div className='sm:mb-4 mb-2 text-gray-600  sm:text-md text-sm'>
                <h6 className='text-lg'>Kyle Simpson</h6>
                
                <h6 className=''>ISBN Number 746378634767: </h6>
                <h6 className=''>Year of publish : 2004</h6>
                <h6 className=''>Book Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi laborum cupiditate fuga unde voluptatum, quibusdam aliquam facilis. Quaerat consequatur molestias voluptatibus debitis delectus adipisci a obcaecati, cum tempora eaque minus, voluptatem provident explicabo at!</h6>
                </div>

                <div className="text-green-500 px-1 text-center  sm:text-sm text-[8px]  items-center justify-center bg-green-200/25 border-2 border-green-300  w-fit rounded-md  sm:my-4 ">Programing</div>    
            </div>
            <Button>Reserve Now </Button>

        </div>

        </div>
    </main>
  )
}

export default BookDetails