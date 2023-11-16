import React from 'react'
import DashboardStatsGrid from '../DashboardStatsGrid'
import UserTransactionChart from '../UserTransactionChart';
import UserProfilePieChart from '../UserProfilePieChart';

export default function Daseboard() {
  return (
    <div className="flex flex-col gap-4">
    <DashboardStatsGrid/>
    <div className="flex flex-row gap-4 w-full">
				<UserTransactionChart />
				<UserProfilePieChart />
			</div>
    </div>
  )
}
