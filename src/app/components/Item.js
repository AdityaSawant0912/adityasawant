import React from 'react'
import Link from 'next/link'
import Detail from './Detail'

function Item({ date, title, titleLink = '', titleLinkDisabled=false, location, children, line=12 }) {
    return (
        <div className="split mx-auto max-w-[608px]">
            <div className="label">{date}</div>
            <div className="">
                {titleLink === '' ? <h1 className='text-highlight my-0'>{title}</h1> :
                    <Link href={titleLink} target="_blank" className="decoration-[#797673] underline text-highlight" disabled={titleLinkDisabled} >{title}</Link>
                }
                <small>{location}</small>
                {typeof children === 'string' ? <Detail line={line}>{children}</Detail> : <Detail line={line}>{children}</Detail>}
            </div>
        </div>
    )
}

export default Item