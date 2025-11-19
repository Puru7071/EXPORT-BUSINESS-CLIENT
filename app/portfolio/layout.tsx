import React from 'react'
import Header from '../utils-components/Header'

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='zoom-85'>
        <Header isLayout = {true}/>
        <div className='relative pt-24'>
            {children}
        </div>
    </div>
  )
}

export default layout