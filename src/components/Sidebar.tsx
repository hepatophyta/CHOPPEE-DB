import React from 'react'

export const Sidebar = () => {
  return (
    <div className="d-flex flex-column align-items-center p-2" id="sidebar-wrapper">
			<div>&nbsp;</div>
			<div>&nbsp;</div>
			<div>&nbsp;</div>
			<div>&nbsp;</div>
			<div>&nbsp;</div>
			<div>&nbsp;</div>
			<div>&nbsp;</div>
			<div>&nbsp;</div>
			<h1 style={{ color: 'white' }}>Choppee</h1>
			<div>&nbsp;</div>
			<div className="nav-item">
				<a href="home.html" className="nav-link-menu p-2 mt-3"><span data-feather="home"></span> Home</a>
				<a href="customer.html" className="nav-link-menu p-2 mt-3"><span data-feather="users"></span> Customers</a>
				<a href="#" className="nav-link-menu active p-2 mt-3"><span data-feather="shopping-bag"></span> Products</a>
			</div>
			<div className="mt-auto">
				<div className="d-flex flex-column">
				<a style={{ color: '#c3cfe2' }} href="statusUpdation.html">Sales Management</a>
					<div className="d-flex" style={{ color: '#fff' }}>
						<img src="pic/user1.png" alt="user_pic" className="rounded-circle user-pic" />
						<div className="d-flex flex-column">
							<span className="font-weight-bold">Sales1</span>
							<div className="dropdown">
								<button className="btn btn-primary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								VP Sale
								</button>
								<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<a className="dropdown-item" href="#">__ Sale</a>
									<a className="dropdown-item" href="#">__ Sale</a>
									<a className="dropdown-item" href="#">__ Sale</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
  )
}