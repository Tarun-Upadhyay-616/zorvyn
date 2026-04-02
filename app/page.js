

import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import { CircleArrowDown, CircleArrowUp, MoveDown, MoveUp } from 'lucide-react'

const Cards = ({ title, subTitle, percentage, isUp }) => {
  return (
    <div className='flex flex-col p-5 w-[24vw] rounded-xl border border-slate-200 bg-white shadow-sm'>
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      <div className="text-3xl font-bold flex items-center gap-3 mt-2 text-slate-900">
        {subTitle}
        {percentage && (
          <div className={`flex items-center justify-center w-8 h-8 rounded-full 
            ${isUp ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            {isUp ? <MoveUp size={18} /> : <MoveDown size={18} />}
          </div>
        )}
      </div>
      {percentage && (
        <div className="text-sm font-medium mt-1 text-slate-500">
          vs last month:
          <span className={isUp ? 'text-green-600' : 'text-red-600'}> {isUp ? '+' : '-'}{percentage}%</span>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-slate-100 flex min-h-screen">
      <Sidebar />
      <div className="w-full">
        <NavBar />
        <div className="flex gap-3 justify-center mt-5">
          <Cards
            title="Total Balance"
            subTitle="$12,450.00"
          />
          <Cards
            title="Monthly Income"
            subTitle="$5,200.00"
            percentage={3}
            isUp={true}
          />
          <Cards
            title="Monthly Expenses"
            subTitle="$2,150.00"
            percentage={2}
            isUp={false}
          />
        </div>
      </div>
    </div>
  );
}