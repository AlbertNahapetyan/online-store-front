import { useCallback, useState } from 'react'

export const useToggler = (defaultState = false) => {
  const [state, setState] = useState(defaultState)

  const open = useCallback(() => {
    setState(true)
  }, [])

  const close = useCallback(() => {
    setState(false)
  }, [])

  const toggle = useCallback(() => {
    setState((prev) => !prev)
  }, [])

  return [state, { open, close, toggle }]
}
