'use client'
import {Session} from 'next-auth';
import {signIn, signOut} from 'next-auth/react';
import Image from "next/image";
import Link from 'next/link';

export default function Nav({user}: Session){
	return (
		<nav className=' flex justify-between items-center py-3 mt-5 rounded-md px-5'>
			<Link href={"/"}>
				<h1 className='border-y-2 border-slate-500 '>
					<span className='font-black text-2xl'>PC</span>
					<span className='text-red-500 font-bold text-xl'>Gear</span>
				</h1>
			</Link>
			<ul className='flex gap-12 items-center'>
				{ !user && (
						<li className=''>
							<button onClick={()=>signIn()} className='btn btn-base px-5 py-1'>Sign in</button>
						</li>
				)}
				{ user && (
					<ul className='flex gap-12 items-center'>
						<li>
							<Image src={user?.image as string} alt={user.name as string} width={40} height={40} className='rounded-full' />
						</li>
						<li>
							<button onClick={()=>signOut()} className='btn btn-base'>Sign Out</button>
						</li>
					</ul>
				)
				}
			</ul>
		</nav>
	)
}