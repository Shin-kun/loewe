import { createContext } from "react"

export interface NavContextProps {
  isNavButtonClicked: boolean
  onNavButtonClicked: () => void
}

const NavContext = createContext<NavContextProps | null>(null)

export default NavContext
