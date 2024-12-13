import { Button } from "@/components/ui/button"

const Profile = () => {
  return (
    <main className='sm:h-[20vh] h-[20vh] w-full bg-[radial-gradient(circle,_rgba(251,146,60,.7)_10%,_rgba(255,237,213,0.3)_100%,_transparent_10%)]'>
        <div className='h-full w-full backdrop-blur-3xl  flex flex-col items-center justify-center sm:gap-14 gap-6'>

          </div>  

           <section className=" flex items-start w-[full] justify-between sm:px-20 px-4 sm:flex-row flex-col ">
            <div className="flex gap-2 sm:items-end sm:w-[70%] w-full sm:flex-row flex-col items-center ">
              <div className="flex items-center gap-10 justify-center sm:h-[350px] sm:w-[330px] -mt-24 z-30 h-[220px] w-[220px] sm:rounded-[60px] rounded-3xl backdrop-blur-2xl ">
                <img src="https://github.com/shadcn.png" className="sm:h-[330px] sm:w-[310px] h-[200px] w-[200px] sm:rounded-[60px] rounded-3xl" alt="" />
                </div>
              <div className="text-sm text-center sm:text-left">
                <p className="sm:text-4xl  text-3xl font-semibold">Sofi Salman</p>
                <p className="text-gray-500">Sofisalman9906@gmail.com</p>
                <p className="text-gray-500">lelafe</p>
                <div className="flex gap-4 mt-4">
                  <Button>Edit Profile</Button>
                  <Button variant={"outline"} > Forgot Password</Button>
                </div>
              </div>
            </div>
            <div className="flex sm:items-end items-center mt-5 sm:mt-0 sm:h-[254px] h-20 sm:justify-start justify-center sm:w-[30%] w-full  gap-10"> 
              <Counts heading="Borrowings" count="4"/>
              <Counts heading="Reservations" count="1"/>
              <Counts heading="Borrowings" count="4"/>
              

            </div>




            
          </section>  

          <section className="sm:px-20 px-4 sm:mt-10  mt-2 flex flex-col w-full  gap-2">
            <h4 className="text-sm text-gray-600 font-semibold">Borrowed Books</h4>
            <p className="border-b-[1px] border-b-gray-200 mb-4"></p>
            <div className="flex sm:gap-6 sm:px-1 px-0 gap-4 w-full py-1  overflow-x-scroll scrollbar-hide">
  <BorrowingBookCard />
  <BorrowingBookCard />
  <BorrowingBookCard />
  <BorrowingBookCard />
</div>

          </section>

  

        </main>
  )
}

export default Profile


function Counts({heading,count}:{heading:string,count:string}){
  return(
    <div className="flex flex-col gap-2">
    <p className="sm:text-md text-sm text-gray-500">{heading}</p>
    <p className="sm:text-4xl  text-3xl font-semibold text-center sm:text-left">{count}</p>
    </div>
  )
}


function BorrowingBookCard(){
  return(
    <div className="sm:w-[500px] min-w-[200px] max-w-[200px]  flex flex-col gap-2 ">
      <div className={`flex items-center  w-[100%] justify-center bg-[#B9CFED] rounded-3xl py-4 shadow-sm`}>
        <img src="../../public/book.png" alt="" />

      </div>
      <div>
      <p className="sm:text-md text-sm ml-2">You Don't know js</p>
      <p className="sm:text-xs text-[10px] ml-2">You Don't know js</p>
      </div>

    </div>
  )
}