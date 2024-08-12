import React from 'react'
import PropTypes from 'prop-types'

export const ComponenteConChildren = ({title, children}) => {
  return (
    <div>
        <h1 className='title-heading'>
            {title}
        </h1>
        <div>
            {children}
        </div>
    </div>
  )
}

ComponenteConChildren.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}
