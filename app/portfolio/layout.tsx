import React from 'react'
import Header from '../utils-components/Header'

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <>
        <Header isLayout = {true}/>
        <div className='relative pt-24'>
            {children}
        </div>
    </>
  )
}

export default layout