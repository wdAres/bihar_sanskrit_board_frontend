import React from 'react'
import classes from './PageHeader.module.css'

const PageHeader = ({title , path}) => {
  return (
    <div className={classes.div}>
        <div className={`${classes.inner_div} universal_width`}>
            <h5>{title}</h5>
            <h5>you are here : {path}</h5>
        </div>
    </div>
  )
}

export default PageHeader