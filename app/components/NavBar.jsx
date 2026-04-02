import React from 'react'
import { Search } from 'lucide-react'

const NavBar = () => {
  return (
    <div className='w-full h-[10vh] bg-white p-3 flex items-center text-xl font-bold border-b border-b-[#64748B] justify-between'>
      Dashboard Overview
      <div className='relative flex items-center'>
        <Search 
          className='absolute left-2 text-[#64748B]' 
          size={16} 
        />
        <input 
          type="search" 
          className='outline-none border border-[#64748B] p-1 pl-8 text-sm rounded-md w-[15vw] font-normal' 
          placeholder="Search" 
        />
      </div>
    </div>
  )
}

export default NavBar