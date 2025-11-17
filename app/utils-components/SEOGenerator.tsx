import React, { ReactElement } from 'react'

const SEOGenerator = ({children , ariaLabel} : {children : ReactElement , ariaLabel : string}) => {
    return (
        <div
            className='h-0 w-0 opacity-0 absolute top-0 left-0 overflow-hidden'
            aria-label={ariaLabel}
        >
            {children}
        </div>
    )
}

export default SEOGenerator ; 