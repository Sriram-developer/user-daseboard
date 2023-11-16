import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
		name: 'Jan',
		Expense: 4000,
		Users: 2400
	},
	{
		name: 'Feb',
		Expense: 3000,
		Users: 1390
	},
	{
		name: 'Mar',
		Expense: 2000,
		Users: 9800
	},
	{
		name: 'Apr',
		Expense: 2780,
		Users: 3900
	},
	{
		name: 'May',
		Expense: 1890,
		Users: 4800
	},
	{
		name: 'Jun',
		Expense: 2390,
		Users: 3800
	},
	{
		name: 'July',
		Expense: 3490,
		Users: 4300
	},
	{
		name: 'Aug',
		Expense: 2000,
		Users: 9800
	},
	{
		name: 'Sep',
		Expense: 2780,
		Users: 3900
	},
	{
		name: 'Oct',
		Expense: 1890,
		Users: 4800
	},
	{
		name: 'Nov',
		Expense: 2390,
		Users: 3800
	},
	{
		name: 'Dec',
		Expense: 3490,
		Users: 4300
	}
]

export default function UserTransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">User Transactions</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Users" fill="#1d9485" />
						<Bar dataKey="Expense" fill="#cc0000" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
