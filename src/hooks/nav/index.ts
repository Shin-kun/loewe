import { useState } from "react"

function useNav() {
  const [isNavButtonOpen, setNavButtonOpen] = useState(false)

  function onSettingNavigation() {
    setNavButtonOpen(!isNavButtonOpen)
  }

  return [isNavButtonOpen, onSettingNavigation] as [boolean, () => void]
}

export default useNav
