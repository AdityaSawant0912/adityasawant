import React from 'react'
import Link from 'next/link'

function Contact({label, href, children}) {
    return (
        <div className="split mx-auto max-w-[608px]">
            <div className="label">{label}</div>
            <div className=""><Link href={href} target="_blank" className="decoration-[#797673] underline" >{children}</Link></div>
        </div>
    )
}

export default Contact