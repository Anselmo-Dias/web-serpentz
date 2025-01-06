import { isAxiosError } from 'axios'
import { ComponentType, useEffect } from 'react'
import { api } from '@/lib/axios'
import { Navigate, useNavigate } from 'react-router-dom'


interface PrivateRouteProps {
  protectedComponent: ComponentType
}

function isAuthenticated() {
  return !!localStorage.getItem('token')
}

export function PrivateRoute({
  protectedComponent: ProtectedComponent,
}: PrivateRouteProps) {
  const navigate = useNavigate()

  // useEffect(() => {
  //   const interceptorId = api.interceptors.response.use(
  //     (response) => response,
  //     (error) => {
  //       if (isAxiosError(error)) {
  //         const status = error.response?.status
  //         const message: string = error.response?.data?.message

  //         if (status === 401 && message.toLocaleLowerCase() === 'unauthorized') {
  //           localStorage.removeItem('token')
  //           navigate('/auth/sign-in', { replace: true })
  //         }
  //       }
  //     },
  //   )

  //   return () => {
  //     api.interceptors.response.eject(interceptorId)
  //   }
  // }, [navigate])

  // if (!isAuthenticated()) {
  //   return <Navigate to="/auth/sign-in" replace />
  // }

  return <ProtectedComponent />
}