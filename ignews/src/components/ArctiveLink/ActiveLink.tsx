import Link, {LinkProps} from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ArctiveLinkProps extends LinkProps {
  children: ReactElement
  activeClassName: string
}

export function ArctiveLink ({children, activeClassName , ...rest}:ArctiveLinkProps){
  const {asPath} = useRouter()
  const className = asPath === rest.href ? activeClassName : ""
  return (
    <Link {...rest}>  
      {cloneElement(children , {
        className
      })}
    </Link>
  )
}