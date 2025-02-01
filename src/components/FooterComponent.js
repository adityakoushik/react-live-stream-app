import React from 'react'

const FooterComponent = () => {
	const getCurrentYear = new Date().getFullYear();
	return (
		<footer className="bg-gray-800 text-white py-2">
			<div className="container mx-auto flex justify-between items-center">

				<div className='flex items-center space-x-2'>
					<p className="text-center text-sm ml-1">Powered by</p>
					{/* CodeKree Solution Logo */}
					<img
						src="/mylogo.png" // Ensure the logo image is in the public folder
						alt="CodeKreee Solution Logo"
						className="h-12 footer-logo" // Adjust logo size as needed
					/>
				</div>
				<div className="text-right mr-1">
					<p className="text-sm">&copy; {getCurrentYear} CodeKreee Solution. All Rights Reserved.</p>
				</div>
			</div>

		</footer>
	)
}

export default FooterComponent