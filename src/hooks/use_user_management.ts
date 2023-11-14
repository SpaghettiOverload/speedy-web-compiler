import { useDispatch, useSelector } from 'react-redux'

import { initialState as initialUserState, updateUserState } from '../store/user'
import { useEffect, useState } from 'react'
import { RootState } from '../store'

export const useUserManagement = () => {
  const dispatch = useDispatch()

  const { userName } = useSelector((state: RootState) => state.user)
  const [newUserName, setNewUserName] = useState<string>('')

  const handleLogIn = (userName: string) => {
    dispatch(updateUserState({
      userName: userName
    }))
  }

  const handleLogOut = () => {
    dispatch(updateUserState(initialUserState))
  }

  const isLoggedIn = (): boolean => {
    return !!userName
  }

  useEffect(() => {
    if (!userName) {
      setNewUserName('')
    }
  }, [userName])

  return {
    isLoggedIn,
    setNewUserName,
    newUserName,
    handleLogIn,
    handleLogOut
  }
}
