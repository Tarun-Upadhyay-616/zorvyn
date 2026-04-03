import MainChart from "./components/MainChart";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import { MoveDown, MoveUp, Search } from 'lucide-react'

const Cards = ({ title, subTitle, percentage, isUp }) => {
  return (
    <div className='flex flex-col p-6 flex-1 rounded-xl border border-slate-200 bg-white shadow-sm'>
      <div className="text-sm font-medium text-slate-600">{title}</div>
      <div className="text-3xl font-bold flex items-center gap-2 mt-1 text-slate-900">
        {subTitle}
        {percentage && (
          <div className={`flex items-center text-sm font-medium px-2 py-1 rounded-full 
            ${isUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
            {isUp ? <MoveUp size={14} /> : <MoveDown size={14} />}
            {percentage}%
          </div>
        )}
      </div>
      {percentage && (
        <div className="text-xs text-slate-400 mt-1">vs last month</div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <div className="bg-[#f8fafc] flex min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <NavBar />
        <div className="p-8">
          <div className="flex gap-6 mb-6">
            <Cards title="Total Balance" subTitle="$12,450.00" />
            <Cards title="Monthly Income" subTitle="$5,200.00" percentage={3} isUp={true} />
            <Cards title="Monthly Expenses" subTitle="$2,150.00" percentage={2} isUp={false} />
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 bg-white p-2 rounded-xl border border-slate-200 shadow-sm">
              <MainChart />
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Spending Breakdown</h3>
              <div className="flex items-center justify-center h-48 border-2 border-dashed border-slate-100 rounded-lg text-slate-400">
                Pie Chart Component
              </div>
            </div>

            <div className="col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Recent Transactions</h3>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-slate-400 border-b border-slate-100">
                    <th className="pb-3 font-medium">Date</th>
                    <th className="pb-3 font-medium">Description</th>
                    <th className="pb-3 font-medium">Category</th>
                    <th className="pb-3 font-medium">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-50">
                    <td className="py-4">Mar 28</td>
                    <td className="py-4 font-medium">Spotify</td>
                    <td className="py-4">Entertainment</td>
                    <td className="py-4 text-red-500">-$11.99</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Quick Insights</h3>
              <p className="text-sm text-slate-500">Your spending in 'Food' is 10% higher than last month.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}