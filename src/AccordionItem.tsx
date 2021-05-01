import React from 'react'
import {useStyle} from './hooks'

interface ItemProps {
    text : String, 
    onClick: Function, 
    currI: number, 
    prevI: number,
    scale : number,
    w : number,
    h : number  
}

const AccordionItem = (props : ItemProps) => {
    const {headerStyle, itemStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <div onClick = {() => props.onClick()}>
            <div style = {headerStyle()}></div>
        </div>
    )
}

export default AccordionItem