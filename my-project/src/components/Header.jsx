import React from 'react'
import "boxicons/css/boxicons.min.css"

const Header = () => {
    const toggelmenu=()=>{
        const mobilMenu=document.getElementById('mobilMenu')
        if(mobilMenu.classList.contains('hidden')){
            mobilMenu.classList.remove('hidden')
        }else{
            mobilMenu.classList.add('hidden')
        }
    }


  return (
    <header className='flex justify-between items-center py-4 px-4 lg:px-20'>

        <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className='text-3xl md:text-4xl sm:text-2xl lg:text-5xl font-light m-0'>
            AYUSH KUMAR
        </h1>

        {/*Desktop Nevigation */}
        <nav className='hidden md:flex items-center gap-12 sm:text-2xl'>
            <a data-aos="fade-down"
               data-aos-easing="linear"
               data-aos-duration="1000" className='text-base tracking-wider transition-color hover:text-grey-300 z-50' href='https://latest-port-kohl.vercel.app/'>
                PORTFOLIO
            </a>
            <a data-aos="fade-down"
               data-aos-easing="linear"
               data-aos-duration="1500"className='text-base tracking-wider transition-color hover:text-grey-300 z-50' href='https://latest-port-kohl.vercel.app/'>
                ABOUT ME
            </a>
            <a data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="2000"className='text-base tracking-wider transition-color hover:text-grey-300 z-50' href='https://latest-port-kohl.vercel.app/#contact'>
                CONTACT
            </a>
             <a data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2500" className='text-base tracking-wider transition-color hover:text-grey-300 z-50' href='https://latest-port-kohl.vercel.app/#project'>
                PROJECTS
            </a>


        </nav>

        <button className='hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50'>
            SIGNIN
        </button>

        {/*Mobile menu button that only visible on mobile screen */}
        <button onClick={toggelmenu} className='md:hidden text-3xl p-2 z-50'>
            <i class="bx bx-menu"></i>

        </button>

        {/*mobile menu-hidden by default */}
        <div id='mobilMenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-10 backdrop-blur-md'>
            <nav className='flex flex-col gap-6 items-center'>
                <a className='text-base tracking-wider transition-color hover:text-grey-300 z-50' href='https://latest-port-kohl.vercel.app/'>
                PORTFOLIO
                </a>
                <a className='text-base tracking-wider transition-color hover:text-grey-300 z-50' href='#'>
                ABOUT ME
                </a>
                <a className='text-base tracking-wider transition-color hover:text-grey-300 z-50' href='https://latest-port-kohl.vercel.app/#contact'>
                CONTACT
                </a>
                <a className='text-base tracking-wider transition-color hover:text-grey-300 z-50' href='https://latest-port-kohl.vercel.app/#project'>
                PROJECTS
                </a>

            </nav>
        </div>

    </header>
  )
}

export default Header