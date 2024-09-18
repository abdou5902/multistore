import Link from 'next/link';
import React from 'react';

import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ListOrdered, LogOut, MessageSquareText, Settings, ShoppingCart, User } from 'lucide-react';
import { Button } from './ui/button';
import getSession from '@/_serverAction/getSession';

import LogoutClient from './LogoutClient';
import CartHeaderBtn from './CartHeaderBtn';
import Cart from './Cart';

async function Header() {
	const user = await getSession();

	return (
		<header className='w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 py-4 px-5 md:px-8 flex items-center justify-between '>
			<Link href={'/'}>MultiStore</Link>
			<div>
				{!user ? (
					<>
						<HoverCard openDelay={0} closeDelay={0}>
							<HoverCardTrigger className='flex items-center cursor-pointer gap-x-1'>
								<User size={20} /> Sign in
							</HoverCardTrigger>
							<HoverCardContent>
								<p className='text-center'>Welcome to MultiStore!</p>
								<Button asChild className='rounded-full w-full mt-3' size={'sm'}>
									<Link href={'/login'}>Sign in</Link>
								</Button>
								<p className='text-center mt-3'>-- OR --</p>
								<Button asChild className='rounded-full w-full mt-3' size={'sm'}>
									<Link href={'/signup'}>Sign up</Link>
								</Button>
							</HoverCardContent>
						</HoverCard>
					</>
				) : (
					<div className='flex gap-x-3'>
						<HoverCard openDelay={0} closeDelay={0}>
							<HoverCardTrigger className='flex items-center cursor-pointer gap-x-1'>
								<User size={20} /> Account
							</HoverCardTrigger>
							<HoverCardContent>
								<p className='text-lg'>Hello {user.formData.find((cu) => cu.marker === 'name').value}</p>
								<hr className='my-3' />
								<div className='w-full flex flex-col my-2 gap-y-2'>
									<Link href={'/'} className='flex gap-2'>
										<Settings /> Account Settings{' '}
									</Link>
									<Link href={'/'} className='flex gap-2'>
										<ListOrdered /> My Orders{' '}
									</Link>
								</div>
								<hr className='my-3' />
								<div className='w-full flex flex-col my-2 gap-y-2'>
									<Link href={'/'} className='flex gap-2'>
										<MessageSquareText /> Messages{' '}
									</Link>
									<Link href={'/'} className='flex gap-2'>
										<ShoppingCart /> Cart
									</Link>
								</div>
								<hr className='my-3' />

								<LogoutClient />
							</HoverCardContent>
						</HoverCard>
						<CartHeaderBtn />
					</div>
				)}
			</div>
		</header>
	);
}
export default Header;
