import React, { FC } from 'react'
import { useRouter } from 'next/router'

interface IMenuButton {
  href: string
  children: string
}

const MenuButton: FC<IMenuButton> = ({ href, children }) => {
  const router = useRouter()

  const renderButton = (pathname: string): string => {
    return 'nav-link-menu p-2 mt-3' + (router.pathname === `/${pathname}` && ' active')
  }

  return (
    <a href={href} className={renderButton(href)}>
      <span data-feather={href}/> 
      {children}
    </a>
  )
}

const Menu = () => {
  return (
    <div className="nav-item">
      <MenuButton href='home'>Home</MenuButton>
      <a href="customer.html" className="nav-link-menu p-2 mt-3">
        <span data-feather="users"/> 
        Customers
      </a>
      <MenuButton href='products'>Products</MenuButton>
    </div>
  )
}

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
      <Menu />
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