import { ChangePasswordDialog } from "@/components/ChangePasswordDialog"
import { ProfileTabs } from "@/components/ProfileTabs"

import { Button } from "@/components/ui/button"

const Profile = () => {
  return (
    <main className='md:h-[20vh] h-[20vh] w-full bg-[radial-gradient(circle,_rgba(251,146,60,.7)_10%,_rgba(255,237,213,0.3)_100%,_transparent_10%)]'>
        <div className='h-full w-full backdrop-blur-3xl  flex flex-col items-center justify-center md:gap-14 gap-6'>

          </div>  

           <section className=" flex items-start w-[full] justify-between md:px-20 px-4 md:flex-row flex-col ">
            <div className="flex gap-2 md:items-end md:w-[70%] w-full md:flex-row flex-col items-center ">
              <div className="flex items-center gap-10 justify-center md:h-[32vh] md:w-[32vh] -mt-24 z-30 h-[44vw] w-[44vw] md:rounded-[60px] rounded-3xl backdrop-blur-2xl ">
                <img src="https://github.com/shadcn.png" className="md:h-[30vh] md:w-[30vh] h-[40vw] w-[40vw] md:rounded-[60px] rounded-3xl" alt="" />
                </div>
              <div className="text-md text-center md:text-left md:pb-6 pb-0 pl-4">
                <p className="md:text-4xl  text-3xl font-semibold">Sofi Salman</p>
                <p className="text-gray-500">Sofisalman9906@gmail.com</p>
                <p className="text-gray-500">lelafe</p>
                <div className="flex gap-4 mt-4">
                  <Button>Edit Profile</Button>
                  <ChangePasswordDialog id={"salman"}>

                  <Button variant={"outline"} > Change Password</Button>
                  </ChangePasswordDialog>
                </div>
              </div>
            </div>
            <div className="flex md:items-end items-center mt-5 md:mt-0 md:h-[254px] h-20 md:justify-start justify-center md:w-[30%] w-full  gap-10"> 
              <Counts heading="Borrowings" count="4"/>
              <Counts heading="Reservations" count="1"/>
              <Counts heading="Borrowings" count="4"/>
              

            </div>




            
          </section>  
          <section className="md:px-20 px-4 md:mt-10  mt-2 flex flex-col w-full  gap-2">
            <ProfileTabs/>
          </section>


  

        </main>
  )
}

export default Profile


function Counts({heading,count}:{heading:string,count:string}){
  return(
    <div className="flex flex-col gap-2">
    <p className="md:text-md text-md text-gray-500">{heading}</p>
    <p className="md:text-4xl  text-3xl font-semibold text-center md:text-left">{count}</p>
    </div>
  )
}


