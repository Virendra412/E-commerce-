import React from 'react'
import Loader from './Loader'

 const LoaderComponent = ({isLoading,children}) => {
    if (isLoading) {
      return <Loader/>
    }
    return children
}

export default LoaderComponent;