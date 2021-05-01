import React from 'react'
import {useAnimatedScale, useDimension} from './hooks'
import AccordionItem from './AccordionItem'

interface AccordionText {
    title : string, 
    subTitle: string
}
interface AccordionProps {
    texts : Array<AccordionText> 
} 
const accordionStyle = () => (
    {
        display: 'flex',
        justifyContent: 'space-around'
    }
)
const getScale = (i : number, scale : number, currI : number, prevI : number) => (
    i === currI ? scale : (prevI == i) ? (1 - scale) : 0 
)
const Accordion : React.FC<AccordionProps> = (props : AccordionProps) => {
    const {w, h} = useDimension()
    const {scale, prevI, currI, start} = useAnimatedScale()
    return <div>
        {props.texts.map((text : AccordionText, i : number) => (<AccordionItem i = {i} text = {text} w = {w} h = {h} scale = {getScale(i, scale, currI, prevI)} currI = {currI} prevI = {prevI} onClick = {start}></AccordionItem>))}
    </div>
}

export default Accordion