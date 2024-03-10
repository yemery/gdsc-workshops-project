import React from 'react'

const NewsletterSection = () => {
  return (
    <div className='bg-[#DCE5E2]'>
        <div className='w-full h-full flex flex-col items-center justify-center p-16 gap-y-2'>
            <h3 className='text-xl font-medium '>Never miss a thing</h3>
            <p className='text-sm'>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
            <img src="images/newsletter.svg" alt="" className='w-[100px] h-[100px]' />
            <form action="#">
              <div class="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                  <div class="relative w-full">
                    
                      <input class="py-3 px-5 w-full text-sm outline-none border-none" placeholder="Enter your email" type="email" id="email" required=""/>
                  </div>
                  <div>
                      <button type="submit" class="py-3 px-5 w-full bg-black text-sm font-medium text-center text-white   cursor-pointer ">Subscribe</button>
                  </div>
              </div>
          </form>
        </div>
    </div>
  )
}

export default NewsletterSection