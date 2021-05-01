import React from 'react'
import {useStyle} from './hooks'


interface AccordionText {
    title : string, 
    subTitle: string
}

interface ItemProps {
    text : AccordionText, 
    onClick: Function, 
    currI: number, 
    prevI: number,
    scale : number,
    w : number,
    h : number ,
    i : number
}

const AccordionItem : React.FC<ItemProps> = (props : ItemProps) => {
    const {headerStyle, itemStyle} = useStyle(props.w, props.h, props.scale)
    console.log("Scale",props.scale)
    return (
        <div onClick = {() => props.onClick(props.i)}>
            {}
            <div style = {headerStyle()}>{props.text.title}</div>
            <div style = {itemStyle()}>{props.text.subTitle}</div>
        </div>
    )
}

export default AccordionItem