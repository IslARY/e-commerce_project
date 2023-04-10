'use client'
import {Session} from 'next-auth';
import {signIn, signOut} from 'next-auth/react';
import Image from "next/image";

export default function Nav({user}: Session){
	return (
		<nav className='flex justify-between items-center py-8'>
			<h1>PC-Gear</h1>
			<ul className='flex gap-12 items-center'>
				{ !user && (
						<li className=' bg-rose-400 text-white py-2 px-4 rounded-md '>
							<button onClick={()=>signIn()}>Sign in</button>
						</li>
				)}
				{ user && (
					<ul className='flex gap-12 items-center'>
						<li>
							<Image src={user?.image as string} alt={user.name as string} width={40} height={40} className='rounded-full' />
						</li>
						<li>
							<button onClick={()=>signOut()} className='bg-rose-400 text-white py-2 px-4 rounded-md'>Sign Out</button>
						</li>
					</ul>
				)
				}
			</ul>
		</nav>
	)
}