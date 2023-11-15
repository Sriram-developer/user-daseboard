import React from 'react'
import {FcOk} from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

const linkClasses ='flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'


export default function Sidebar() {
  return (
    <div className=' bg-neutral-900  w-60 p-3 flex flex-col text-white '>
        <div className='flex items-center gap-2 px-1 py-3'>
            <FcOk fontSize={24}/>
            <span className='text-neutral-100 text-lg '>Greenie</span>
        </div>
        <div className='flex-1'>
            {DASHBOARD_SIDEBAR_LINKS.map((item) =>(
                <SidebarLink key={item.Key} item={item}/>
            ))}
        </div>
        <div>bottom part</div>
    </div>
  )
}

function SidebarLink({ item }){
    return(
        <Link to={item.path} className={classNames('text-white', linkClasses)}>
        <span className='text-xl'>{item.icon}</span>
        {item.label}
        </Link>
    )
}
