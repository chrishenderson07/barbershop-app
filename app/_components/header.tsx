'use client'

import Image from 'next/image'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { MenuIcon } from 'lucide-react'
import { signIn } from 'next-auth/react'

export const Header = () => {
	const handleLoginClick = async () => {
		await signIn()
	}
	return (
		<Card>
			<CardContent className="px-5 py-8 flex flex-row items-center justify-between">
				<Image
					src="/images/logo.png"
					alt="FSW Barber"
					height={22}
					width={120}
				/>
				{/* <Button
					variant="outline"
					size="icon"
					className="h-8 w-8">
					<MenuIcon size={16} />
				</Button> */}
				<Button onClick={handleLoginClick}>Login</Button>
			</CardContent>
		</Card>
	)
}
