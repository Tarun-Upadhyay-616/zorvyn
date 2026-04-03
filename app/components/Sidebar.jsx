import React from 'react'
import { LayoutDashboard } from 'lucide-react';
import { ArrowRightLeft } from 'lucide-react';
import { Wallet } from 'lucide-react';
import { ChartColumn } from 'lucide-react';
import { ZorvynLogo } from './Logo';
const NavLinks =(name , logo ,active)=>{
    return(
        <div className={`flex gap-2 ${active && `bg-gray-600`} w-57.5 rounded-md p-2 text-sm`}>
            {logo}
            {name}
            <div></div>
        </div>
    )
}
const Sidebar = () => {
  return (
    <div className='bg-slate-900 text-white w-[22vw]'>
      <ZorvynLogo className="flex justify-center w-full"/>
      <div className='flex justify-center flex-col items-center mt-5'>
        {NavLinks("Dashboard",<LayoutDashboard/>,true)}
        {NavLinks("Transactions",<ArrowRightLeft/>)}
        {NavLinks("Accounts",<Wallet/>)}
        {NavLinks("Analytics",<ChartColumn />)}
      </div>
    </div>
  )
}

export default Sidebar
