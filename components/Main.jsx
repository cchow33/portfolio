import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Main = () => {

  return (
    
    <section id="main" class='p-20'> 
    {/* <section id="main" class='bg-[#fcf2f1] p-20'>  */}
    <div class='xl:max-w-7xl xl:mx-auto max-w-full pl-[5%] pr-[5%]'>
    
    <div class = 'grid h-[80%] place-items-center'>
      <h1 class='text-[120px] font-display sm:text-[67px] xl:text-[130px]'>Carmen Chow</h1>
      <h2 class='text-[80px] font-display sm:text-[45px] pb-[100px] mt-[0px] xl:text-[86px]'>Front-end Developer</h2>

      <div class="flex pb-[10%]">
        <a target="_blank" href="https://github.com/cchow33" rel="noopener noreferrer"  class="relative inline-block px-3 py-1 font-medium group m-[10px]"><BsGithub size={40}/></a>

        <a target="_blank" href="https://www.linkedin.com/in/carmen-cchow/" rel="noopener noreferrer"  class="relative inline-block px-3 py-1 font-medium group m-[10px]"><BsLinkedin size={40}/></a>
      </div>

    </div>
    </div>
  </section>
      
  )
}

export default Main
