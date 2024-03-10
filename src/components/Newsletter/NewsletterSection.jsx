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
                      <label for="email" class="hidden mb-2 text-sm font-medium  ">Email address</label>
                      <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                          <svg class="w-5 h-5  " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </div>
                      <input class="block p-3 pl-10 w-full text-sm text-black bg-transparent focus:outline-none focus:ring-0 focus:border-gray-300  border border-gray-300 " placeholder="Enter your email" type="email" id="email" required=""/>
                  </div>
                  <div>
                      <button type="submit" class="py-3 px-5 w-full text-sm font-medium text-center text-white  border cursor-pointer bg-black  ">Subscribe</button>
                  </div>
              </div>
              <div class="mx-auto max-w-screen-sm text-sm text-left text-gray-500 newsletter-form-footer ">We care about the protection of your data. <a href="#" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">Read our Privacy Policy</a>.</div>
          </form>
        </div>
    </div>
  )
}

export default NewsletterSection