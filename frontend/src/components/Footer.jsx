import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bottom-0 bg-white flex justify-between items-center shadow-md shadow-black h-20 px-8 py-1'>
      <div class="flex items-center gap-2 text-slate-400 mt-2">
            <a href="#" class="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.335 3.333s-.584 1.75-1.667 2.834c1.333 8.333-7.833 14.416-15 9.666 1.833.083 3.667-.5 5-1.667-4.167-1.25-6.25-6.166-4.167-10 1.834 2.167 4.667 3.417 7.5 3.334-.75-3.5 3.334-5.5 5.834-3.167.916 0 2.5-1 2.5-1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
            <a href="#" class="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.332 6.667a5 5 0 0 1 5 5V17.5h-3.333v-5.834a1.667 1.667 0 0 0-3.334 0V17.5H8.332v-5.834a5 5 0 0 1 5-5M5.001 7.5H1.668v10h3.333zM3.335 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
            <a href="#" class="hover:-translate-y-0.5 hover:text-indigo-500 transition-all">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="m18.335 5.834-7.493 4.772a1.67 1.67 0 0 1-1.674 0l-7.5-4.772" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M16.668 3.334H3.335c-.92 0-1.667.746-1.667 1.666v10c0 .92.746 1.667 1.667 1.667h13.333c.92 0 1.667-.746 1.667-1.667V5c0-.92-.747-1.666-1.667-1.666" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
      </div>
      <div>
        &copy; WanderLust Private Limited
      </div>
      <div className='flex gap-4 items-center'>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
      </div>
    </div>
  )
}

export default Footer
