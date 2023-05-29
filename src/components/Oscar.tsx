import React from 'react'

type Props = {
    children?: React.ReactNode
}

const Oscar = (props: Props) => {
  return (
    <div>
        Reminder that this is within the Oscar Component
        {props.children}
    </div>
  )
}

export default Oscar