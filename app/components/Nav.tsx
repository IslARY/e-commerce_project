'use client'
import {Session} from 'next-auth';
import {signIn, signOut} from 'next-auth/react';
import Image from "next/image";
import Link from 'next/link';
import Cart from './Cart';
import { useDataStore } from '@/store';
import { AiFillShopping } from 'react-icons/ai';

export default function Nav({user}: Session){
	const cartStore = useDataStore();
	return (
		<nav className=' flex justify-between items-center py-3 mt-5 rounded-md px-5'>
			<Link href={"/"}>
				<h1 className='border-y-2 border-slate-500 '>
					<span className='font-black text-2xl'>PC</span>
					<span className='text-red-500 font-bold text-xl'>Gear</span>
				</h1>
			</Link>
			<ul className='flex gap-12 items-center'>
				<li onClick={() => cartStore.toggleCart()} className='flex items-center text-3xl relative cursor-pointer'>
					<AiFillShopping />
					<span className="bg-teal-700 text-white text-sm font-bold w-5 h-5 rounded-full absolute left-4 bottom-4 flex items-center justify-center">{cartStore.cart.length}</span>
				</li>
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
			{cartStore.isOpen && <Cart />}
		</nav>
	)
}