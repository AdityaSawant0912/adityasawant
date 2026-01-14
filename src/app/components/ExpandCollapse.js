"use client"
import { useState, useRef, useEffect } from "react"

function ExpandCollapse({ children, line, isOpen: initialIsOpen = false }) {
  const [isOpen, setIsOpen] = useState(initialIsOpen)
  const [showButton, setShowButton] = useState(false)
  const [collapsedHeight, setCollapsedHeight] = useState("none")
  const [openHeight, setOpenHeight] = useState(0)
  const contentRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    if (contentRef.current) {
      const lineHeight = parseInt(window.getComputedStyle(contentRef.current).lineHeight)
      const maxHeight = lineHeight * line * 1.23
      const actualHeight = contentRef.current.scrollHeight

      setOpenHeight(actualHeight + 26)
      setCollapsedHeight(`${maxHeight}px`)
      setShowButton(actualHeight > maxHeight)

    }
  }, [children, line])

  const handleToggle = () => {
    setIsOpen(!isOpen)
    if (isOpen) {
      // Scrolling when closing
      setTimeout(() => {
        contentRef.current?.scrollIntoView({ behavior: 'smooth', offset: -100  })
      }, 300)
    }
  }

  return (
    <div className="relative">
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${openHeight}px` : collapsedHeight,
          overflow: 'hidden',
          transition: 'max-height 300ms linear'
        }}
      >
        {children}
      </div>
      {showButton && (
        <button
          ref={buttonRef}
          onClick={() => handleToggle()}
          className={`${!isOpen ? "absolute" : "float-right"} cursor-pointer border-none text-highlight p-0 underline text-right pl-12 pr-1 items-center  right-0 bottom-0 pb-[2px]`}
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(36, 33, 32, 0) 0px, rgba(36, 33, 32, 0.93) 25%, rgb(36, 33, 32))"
          }}
        >
          {isOpen ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  )
}

export default ExpandCollapse