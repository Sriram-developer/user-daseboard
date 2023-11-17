export function getUserStatus(status) {
	switch (status) {
		
		case 'Completed':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 bg-green-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'Pending':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 bg-orange-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'In-Progress':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-yellow-600 bg-yellow-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
	
		default:
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 bg-gray-100">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
	}
}