'use client'
import {Session} from 'next-auth';
import {signIn, signOut} from 'next-auth/react';
import Image from "next/image";
import Link from 'next/link';

export default function Nav({user}: Session){
	return (
		<nav className='flex justify-between items-center py-8'>
			<Link href={"/"}>
				<h1 className='border-y-2 border-slate-500 '>
					<span className='font-black text-2xl'>PC</span>
					<span className='text-red-500 font-bold text-xl'>Gear</span>
				</h1>
			</Link>
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