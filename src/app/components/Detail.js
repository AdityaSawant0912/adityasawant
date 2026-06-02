import ExpandCollapse from "./ExpandCollapse"

function Detail({ children, className:className = "", line=2 }) {
  return (
    <div className={`mx-auto mt-[18px] my-4 ${className}`}>
      <ExpandCollapse line={line}>
        <p className="text-def max-w-[608px]  leading-[27px] font-[400] text-[18px] my-0">
          {children}
        </p>
      </ExpandCollapse>
    </div>
  )
}

export default Detail