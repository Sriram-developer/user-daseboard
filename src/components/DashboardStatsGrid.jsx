import React from 'react'       
import { MdFormatListBulleted } from 'react-icons/md'


export default function DashboardStatsGrid() {
  return (
    <div className='flex gap-4 w-full'>
          <BoxWrapper>
          <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
	      <MdFormatListBulleted className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Forms</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">#3456</strong>
						<span className="text-sm text-green-500 pl-2">+343</span>
					</div>
				</div>
          </BoxWrapper>
          <BoxWrapper>b</BoxWrapper>
          <BoxWrapper>c</BoxWrapper>
          <BoxWrapper>d</BoxWrapper>
    </div>
  )
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}