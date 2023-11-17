import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getUserStatus } from '../lib/helpers'

const recentUsersData = [
	{
		id: '1',
	    phone_no: '9677734324',
		user_name: 'Shirley',
		reg_date: '2023-05-17T03:24:00',
		email_id: 'shir@gmail.com',
		current_user_status: 'Completed',
		curr_address: 'Pune Cottage Grove, 97424'
	},
	{
		id: '2',
	    phone_no: '754324824',
		user_name: 'Ryan Carroll',
		reg_date: '2023-05-14T05:24:00',
		email_id: 'ryan@gmail.com',
		current_user_status: 'In-Progress',
		curr_address: 'Banglore west colony, 90017'
	},
	{
		id: '3',
	    phone_no: '998343243',
		user_name: 'Mason Nash',
		reg_date: '2023-05-17T07:14:00',
		email_id: 'nash@gmail.com',
		current_user_status: 'Pending',
		curr_address: 'Hyderabad, west colony, 92683'
	},
	{
		id: '4',
	    phone_no: '985448342',
		user_name: 'Luke Parkin',
		reg_date: '2023-05-16T12:40:00',
		email_id: 'luke@gmail.com',
		current_user_status: 'Completed',
		curr_address: 'Andhra CN, 94403'
	},
	{
		id: '5',
	    phone_no: '873242342',
		user_name: 'Anthony Das',
		reg_date: '2023-05-14T03:24:00',
		email_id: 'das@gmail.com',
		current_user_status: 'In-Progress',
		curr_address: 'kerala CM, 94403'
	},
	{
		id: '6',
	    phone_no: '963572423',
        user_name: 'Anthony Fry',
		reg_date: '2023-05-14T05:24:00',
		email_id: 'Anto@gmail.com',
		current_user_status: 'Completed',
		curr_address: 'kolkata CA, 9007'
	}
]

export default function RecentUsers() {
	return (
	  <div className="bg-white px-4 pt-3 pb-4 rounded-sm buser buser-gray-200 flex-1">
		<strong className="text-gray-700 font-medium">Recent Users</strong>
		< div className="buser-x buser-gray-200 rounded-sm mt-3">
		  <table className="w-full text-gray-700">
			<thead>
			  <tr>
				<th>ID</th>
				<th>Phone No</th>
				<th>User Name</th>
				<th>Date</th>
				<th>Email-Id</th>
				<th>Address</th>
				<th>User Status</th>
			  </tr>
			</thead>
			<tbody className='relative'>
			  {recentUsersData.map((user) => (
				<tr key={user.id}>
				  <td>
					<Link to={`/user/${user.id}`}>#{user.id}</Link>
				  </td>
				  <td>
				  <Link to={`/user-form/${user.phone_no}`}>{user.phone_no}</Link>
				  </td>
				  <td>
					<Link to={`/account/${user.account_id}`}>{user.user_name}</Link>
				  </td>
				  <td>{format(new Date(user.reg_date), 'dd MMM yyyy')}</td>
				  <td>{user.email_id}</td>
				  <td>{user.curr_address}</td>
				  <td>{getUserStatus(user.current_user_status)}</td>
				</tr>
			  ))}
			</tbody>
		  </table>
		</div>
		</div>
	);
  }
  