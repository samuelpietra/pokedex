import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

const healthCheckPing = async (
  setMessage: React.Dispatch<React.SetStateAction<string>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  try {
    const response = await axios.get('/_health')
    const message = response.data
    setMessage(message)
  } catch (error) {
    setMessage(
      'Unable to check health of server. Please check that the server is started and that the proxy port matches the server port',
    )
  }
}

function App() {
  const [loading, setLoading] = useState(false)
  const [healthCheckMessage, setHealthCheckMessage] = useState('Loading...')

  useEffect(() => {
    healthCheckPing(setHealthCheckMessage, setLoading)
  }, [])

  if (!loading) console.info('Health Check from server: ', healthCheckMessage)

  return <RouterProvider router={router} />
}

export default App
