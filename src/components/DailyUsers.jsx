import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

const dailyUsers = [
	{
		id: '3432',
		user_name: 'Luke',
		user_thumbnail: 'https://source.unsplash.com/100x100?profile',
		user_expense: 'Rs-499.00',
		user_avail: 341
	},

	{
		id: '4342',
		user_name: 'Nash',
		user_thumbnail: 'https://source.unsplash.com/100x100?man' ,
		user_expense: 'Rs-399.00',
		user_avail: 453
	},
  {
		id: '4342',
		user_name: 'Arun',
		user_thumbnail: 'https://source.unsplash.com/100x100?adult',
		user_expense: 'Rs-399.00',
		user_avail: 453
	},
  {
		id: '4342',
		user_name: 'Akash',
		user_thumbnail: 'https://source.unsplash.com/100x100?uncle',
		user_expense: 'Rs-399.00',
		user_avail: 453
	},
  {
		id: '4342',
		user_name: 'John',
		user_thumbnail: 'https://source.unsplash.com/100x100?profile',
		user_expense: 'Rs-399.00',
		user_avail: 453
	},
]

function DailyUsers() {
	return (
		<div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
			<strong className="text-gray-700 font-medium">Popular Users</strong>
			<div className="mt-4 flex flex-col gap-3">
				{dailyUsers.map((user) => (
					<Link
						key={user.id}
						to={`/user/${user.id}`}
						className="flex items-start hover:no-underline"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={user.user_thumbnail}
								alt={user.user_name}
							/>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{user.user_name}</p>
							<span
								className={classNames(
									user.user_avail === 0
										? 'text-red-500'
										: user.user_avail > 50
										? 'text-green-500'
										: 'text-orange-500',
									'text-xs font-medium'
								)}
							>
								{user.user_avail === 0 ? 'never Logged' : user.user_avail + "  " + 'Times Logged '}
							</span>
						</div>
						<div className="text-xs text-gray-400 pl-1.5">{user.user_expense}</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default DailyUsers