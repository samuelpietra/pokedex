import axios, { AxiosError, HttpStatusCode } from 'axios'

type ApiErrorResponse = {
  status: number
  message: string
}

type CustomAxiosError = AxiosError<ApiErrorResponse>

const errorInterceptor = (error: CustomAxiosError) => {
  if (axios.isCancel(error)) return Promise.reject(error)

  const {
    response: { status, statusText },
  } = error ?? {}

  // eslint-disable-next-line prefer-promise-reject-errors
  return Promise.reject({
    status: status ?? HttpStatusCode.InternalServerError,
    message: statusText ?? 'Internal Server Error',
  })
}

export type { ApiErrorResponse, CustomAxiosError }
export { errorInterceptor }
