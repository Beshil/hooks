import React from 'react'
import PropTypes from 'prop-types'

const ListComponent = ({ children }) => {
  return (
    <ul className="list-group">
      {React.Children.map(children, (child, index) => {
        const config = {
          ...child.props,
          index: index + 1
        }

        return React.cloneElement(child, config)
      })}
    </ul>
  )
}

ListComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default ListComponent
