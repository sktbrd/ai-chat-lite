import * as React from 'react'
import Link from 'next/link'
import { IconSeparator } from '@/components/ui/icons'
import EnvCard from './cards/envcard'

export async function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center  w-full h-16 px-4 border-b shrink-0 bg-white ">
      <EnvCard />
      <div className="flex-start" />
      <img
        src="https://www.skatehive.app/SKATE_HIVE_VECTOR_FIN.svg"
        alt="Skatehive Logo"
        className="w-8 h-8 mr-2"
      />
      <Link href="/" rel="nofollow" className="mr-2 font-bold">
        Skatehive Docs
      </Link>
      <IconSeparator />
      <Link href="/tutorials" rel="nofollow" className="mr-2">
        Tutorials
      </Link>
      <IconSeparator />
      <Link href="" rel="nofollow" className="mr-2">
        App
      </Link>
    </header>
  )
}
