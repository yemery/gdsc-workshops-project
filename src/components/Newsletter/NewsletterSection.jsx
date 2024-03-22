import React from 'react'

const NewsletterSection = () => {
  return (
    <div className='bg-[#DCE5E2]'>
        <div className='w-full h-full flex flex-col items-center justify-center p-16 gap-y-2'>
            <h3 className='text-xl font-medium '>Never miss a thing</h3>
            <p className='text-sm'>Sign up for texts to be notified about our best offers on the perfect gifts.</p>
            <img src="images/newsletter.svg" alt="" className='w-[100px] h-[100px]' />
            <form action="#" className='md:w-2/4 space-y-2'>
              <div class="flex flex-col md:flex-row   w-full gap-y-2">
                 
                      <input class=" w-full text-sm text-black bg-transparent focus:outline-none focus:ring-0 focus:border-gray-300   border-gray-300" placeholder="Enter your email" type="email" id="email" required=""/>
                
                  <div>
                      <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white  border cursor-pointer bg-black  ">Subscribe</button>
                  </div>
              </div>
              <div class=" text-sm text-center text-gray-500  ">We care about the protection of your data. <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
          </form>
        </div>
    </div>
  )
}

export default NewsletterSection