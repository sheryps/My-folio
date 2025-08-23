'use client'

import React,{useState} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTheme } from '../context/ThemeContext';
const Navbar = () => {
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const {theme,toggleTheme}=useTheme()
    const pathname=usePathname()
    const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

    const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ];
  return (
   <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-200
   dark:border-gray-700 shadow-sm transition-colors
   ">
    <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Devfolio&trade;
          </Link>

          {/* dsettop menu */}
          <div className="hidden md:flex items-center space-x-8">
                {
                    menuItems.map((item)=>{
                        const isActive=pathname ===item.href
                        return (
                        <Link key={item.href} href={item.href}
                        className={`hover:text-primary transition-colors ${isActive?'font-semibold text-primary':''}`}
                        >{item.label}</Link>
                    )
                    })
                }
                <button 
                onClick={toggleTheme}
                className='p-2 rounded-lg hover:text-primary hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 transition-colors'
                >
                    {
                        theme==='dark'?(<SunIcon className="h-5 w-5" />)
                        :(<MoonIcon className="h-5 w-5" />)
                    }
                </button>
          </div>
          {/* mobile menu button*/}
            <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
            </button>
        </div>
        {/* mobile menu */}
        {
            isMobileMenuOpen &&(
                <div className="md:hidden">
                    <div className="py-4 space-y-4">
                        {menuItems.map((item,index)=>(
                            <div key={item.href}>
                                <Link
                                href={item.href}
                                className="block py-2 hover:text-primary transition-colors"
                                onClick={toggleMobileMenu}
                                >
                                {item.label}
                                </Link>
                            </div>
                        ))}
                        <div>
                            <button
                                onClick={toggleTheme}
                                className="flex items-center py-2 hover:text-primary transition-colors">
                                {theme === 'dark' ? (
                                <><SunIcon className="h-5 w-5 mr-2" />Light Mode</>
                                ) : (
                                <><MoonIcon className="h-5 w-5 mr-2" />Dark Mode</>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
   </nav>
  )
}

export default Navbar