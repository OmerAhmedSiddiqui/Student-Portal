import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Spinner = ({ path = "" }) => {
  const [count, setCount] = useState(3)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue)
    }, 1000);
    count === 0 && navigate(`/${path}`, {
      state: location.pathname
    })
    return () => clearInterval(interval)
  }, [count, navigate, location, path])

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "70vh" }}>
        <h1 className='text-center1'>Redirecting to you in {count} seconds</h1>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>

    </>
  )
}

export default Spinner
