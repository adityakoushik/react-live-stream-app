import React from 'react'

const HeaderComponent = () => {
	return (
		<header className="bg-gray-800 text-white py-2 border-none">
			<div className="container mx-auto flex justify-between items-center px-6">
				{/* Logo */}
				<div className="text-xl font-bold">
					<a href="/" className="text-white hover:text-gray-300">
						<img src="/mylogo.png" alt="CodeKreee Solution Logo" className="h-10 header-logo" />
					</a>
				</div>

				{/* Contact Info with Icons */}
				<div className="flex space-x-6 text-sm">
					<a href="tel:7608056159" className="hover:text-gray-300 flex items-center space-x-2">
						<i className="fas fa-phone-alt"></i>
						<span>7608 056 159</span>
					</a>
					<a href="mailto:codekreesolution@gmail.com" className="hover:text-gray-300 flex items-center space-x-2">
						<i className="fas fa-envelope"></i>
						<span>codekreesolution@gmail.com</span>
					</a>
				</div>
			</div>
		</header>
	)
}

export default HeaderComponent