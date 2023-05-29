import React from "react"

type ContainerProps = {
    style: React.CSSProperties
    children: React.ReactNode

}

const Container = (props: ContainerProps) => {
    return (
        <div style={props.style}>
            This is coming under Container
            {props.children}
        </div>
    )
}

export default Container