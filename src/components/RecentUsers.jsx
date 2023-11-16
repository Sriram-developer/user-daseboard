import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getuserStatus } from '../lib/helpers'

const recentUsersData = [
	{
		id: '1',
		user_id: '4324',
	  phone_no: '989848494',
		user_name: 'Shirley',
		reg_date: '2023-05-17T03:24:00',
		email_id: 'shir@gmail.com',
		current_user_status: 'Completed',
		curr_address: 'Cottage Grove, OR 97424'
	},
	{
		id: '7',
		user_id: '7453',
	  phone_no: '9684439229',
		user_name: 'Ryan Carroll',
		reg_date: '2023-05-14T05:24:00',
		email_id: 'ryan@gmail.com',
		current_user_status: 'In-Progress',
		curr_address: 'Los Angeles, CA 90017'
	},
	{
		id: '2',
		user_id: '5434',
	  phone_no: '653454834',
		user_name: 'Mason Nash',
		reg_date: '2023-05-17T07:14:00',
		email_id: 'nash@gmail.com',
		current_user_status: 'Pending',
		address: 'Westminster, CA 92683'
	},
	{
		id: '3',
		user_id: '9854',
	  phone_no: '87832',
		user_name: 'Luke Parkin',
		reg_date: '2023-05-16T12:40:00',
		email_id: 'luke@gmail.com',
		current_user_status: 'Completed',
		curr_address: 'San Mateo, CA 94403'
	},
	{
		id: '4',
		user_id: '8763',
	  phone_no: '09832',
		user_name: 'Anthony Das',
		reg_date: '2023-05-14T03:24:00',
		email_id: 'das@gmail.com',
		current_user_status: 'OUT_FOR_DELIVERY',
		curr_address: 'San Mateo, CA 94403'
	},
	{
		id: '5',
		user_id: '5627',
	  phone_no: '9764823424',
    user_name: 'Anthony Fry',
		reg_date: '2023-05-14T05:24:00',
		email_id: 'Anto@gmail.com',
		current_user_status: 'DELIVERED',
		curr_address: 'Los Angeles, CA 9007'
	}
]

export default function RecentUsers() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm buser buser-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Recent Users</strong>
			<div className="buser-x buser-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>User ID</th>
							<th>User Name</th>
							<th>Date</th>
							<th>Email-Id</th>
							<th>Address</th>
							<th>User Status</th>
						</tr>
					</thead>
					<tbody>
						{recentUsersData.map((user) => (
							<tr key={user.id}>
								<td>
									<Link to={`/user/${user.id}`}>#{user.id}</Link>
								</td>
								<td>
									<Link to={`/user-form/${user.user_id}`}>#{user.user_id}</Link>
								</td>
								<td>
									<Link to={`/account/${user.account_id}`}>{user.user_name}</Link>
								</td>
								<td>{format(new Date(user.reg_date), 'dd MMM yyyy')}</td>
								<td>{user.email_id}</td>
								<td>{user.curr_address}</td>
								<td>{getuserStatus(user.current_user_status)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}