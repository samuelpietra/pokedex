import { InternalAxiosRequestConfig } from 'axios'

const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (!config.url) return config

  const { urlParams = {} } = config as unknown as {
    urlParams: { [key: string]: string }
  }
  // @INFO -> When setting the url params like 'url/:id', this code will get the urlParams values from config and  parse the to the path url
  Object.entries(urlParams).forEach(([key, value]) => {
    config.url = config.url?.replace(`:${key}`, encodeURIComponent(value))
  })

  return config
}

export { requestInterceptor }
