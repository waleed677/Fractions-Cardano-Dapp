import React from 'react'

const ProgressBar = (props) => {
  return (
    <div className="progress__bar--wrap">
      <div className="progress__bar--name">
        <h3>{props.title}</h3>
        <h3>{props.percentage}</h3>
      </div>
      <div className="progress__bar--strip">
        <div className="progress__bar--active" style={{
          backgroundColor: props.bgcolor,
          width: props.percentage
        }} />
      </div>
    </div>
  )
}

export default ProgressBar
