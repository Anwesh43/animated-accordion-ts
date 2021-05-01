import {useState, useEffect, CSSProperties} from 'react'

const delay : number = 20 
const scGap : number = 0.02 
export const useAnimatedScale = () => {
    const [currI, setCurrI] : [number, Function]  = useState(-1)
    const [prevI, setPrevI] : [number, Function] = useState(-1)
    const [animated, setAnimated] : [boolean, Function] = useState(false)
    const [scale, setScale] : [number, Function] = useState(0)
    return {
        currI, 
        prevI, 
        scale, 
        setCurrI, 
        setPrevI,
        start() {
            if (!animated) {
                setAnimated(true)
                const interval  = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] : [number, Function] = useState(window.innerWidth)
    const [h, setH] : [number, Function] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
}

export const useStyle = (w : number, h : number, scale : number) => {
    const hFactor : number = h / 6
    return {
        itemStyle() : CSSProperties {
            return {
                width : `${w / 3}px`,
                height : `${hFactor * scale}px`,
                background : '#2962FF',
                fontSize : `20px`,
                color : 'white', 
                textAlign: 'center'
            }
        },
        headerStyle() : CSSProperties {
            return {
                width : `${w / 3}px`,
                height : `${h / 15}px`,
                fontSize : `30px`,
                color: 'white',
                background: '#2962FF'
            }
        },
    }
}