import React, { useState } from 'react'


const Section=({title,description,isVisible,setIsVisible})=>{
    // const [isVisible,setIsVisible]=useState(false)
    console.log(setIsVisible)
    return(
    <>
    {
        isVisible ? 
            <div className='border border-black p-5'>
    <h1 className='font-bold text-xl'>{title}</h1>
    <h1>{description}</h1>
    <div className='pt-3'><button className='bg-blue-500 rounded-md px-8 py-2 font-bold' onClick={()=>setIsVisible({
      aboutState:true,
      teamState:false,
      footerState:false
    })}>Hide</button></div>

    </div>
        :
        <div className='pt-3 p-5'><button className='bg-blue-500 rounded-md px-8 py-2 font-bold' onClick={()=>setIsVisible(true)}>Show</button></div>
    }
    
    

    </>
    )
};



const Instamart = () => {
  const [isVisible,setIsVisible]=useState({
    aboutState:true,
    teamState:false,
    footerState:false
  })
  return (
    <>
    <div>Instamart</div>
    <Section setIsVisible={()=>setIsVisible({
      aboutState:true,
      teamState:false,
      footerState:false
    })} isVisible={isVisible.aboutState} title="Instamart About Section" description="This is InstaMart About Section desc On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains" />
    <Section
    setIsVisible={()=>setIsVisible({
      aboutState:false,
      teamState:true,
      footerState:false
    })}
    
    isVisible={isVisible.teamState} title="Instamart Team Section" description="This is InstaMart Team Section desc On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains" />
    <Section 
    setIsVisible={()=>setIsVisible({
      aboutState:false,
      teamState:false,
      footerState:true
    })}
    
    isVisible={isVisible.footerState} title="Instamart Footer Section" description="This is InstaMart Footer Section desc On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains" />

    </>
  )
}

export default Instamart