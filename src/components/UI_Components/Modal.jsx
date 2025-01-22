import { useEffect, useRef } from "react"
import {createPortal} from "react-dom"

export default function Modal({children, open, className = ''}) {
  const dialog = useRef(); //useRef: A hook that creates a mutable object to reference a DOM element without triggering re-renders.
  useEffect(() => {
   if (open) {
    dialog.current.showModal()
   } else {
    dialog.current.close();  
  }
  }, [open])
  
  return  createPortal(     //create portal is used to flexibly render the children of a React component in another location in the DOM like any dialog appearing on the page
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>, document.getElementById("modal"))
}
