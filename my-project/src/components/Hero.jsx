import "boxicons/css/boxicons.min.css";
import Spline from '@splinetool/react-spline';
const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">


        <div data-aos="fade-right"
             data-aos-offset="300"
             data-aos-easing="ease-in-sine"className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
            <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                <div className="absolute inset-[3px] bg-black rounded-full flex item-center justify-center gap-2 p-1">
                    <i class="bx bx-diamond" style={{ marginTop: '5px'}}></i>
                    INTRODUCTION
                </div>
            </div>

            {/*Main heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
                EMAIL FOR
                <br/>
                DEVELOPER
            </h1>

            <p className="text-base sm:text-lg tracking-wider text-grey-400 max-w-[25rem] lg:max-w-[30rem]">
                The best way to learn any theory is to apply it practically and try to underdstand the concept behind that theory.
            </p>

            <div className="flex gap-4 mt-10">
                <a className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:py-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transtion-all duration-300 hover:bg-white hover:text-black" href="#">
                    Documentation <i class="bx bx-link-external"></i>
                </a>

                <a className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:py-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transtion-all duration-300 hover:bg-white bg-grey-300 text-white hover:text-black" href="#">
                    Get Started <i class="bx bx-link-external"></i>
                </a>
            </div>

        </div>

        {/*3D robot */}
         <Spline data-aos="fade-zoom-in"
                 data-aos-easing="ease-in-back"
                 data-aos-delay="300"
                 data-aos-offset="0" 
                 date-aos-duration="3000" className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full" scene="https://prod.spline.design/Yo8C7kT-Az7qeGV4/scene.splinecode" />

    </main>
  )
}

export default Hero