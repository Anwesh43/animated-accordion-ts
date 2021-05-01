import {useState, useEffect, CSSProperties} from 'react'

const delay : number = 20 
const scGap : number = 0.1 
const hFactor : number = 5 
export const useAnimatedScale = () => {
    const [currI, setCurrI] : [number, Function]  = useState(-1)
    const [prevI, setPrevI] : [number, Function] = useState(-1)
    const [animated, setAnimated] : [boolean, Function] = useState(false)
    const [scale, setScale] : [number, Function] = useState(0)
    return {
        currI, 
        prevI, 
        scale, 
        start(i : number) {
            if (!animated) {
                if (!currI) {
                    setPrevI(currI)
                }
                setCurrI(i)
                setAnimated(true)
                const interval  = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            setCurrI((i : number) => {
                                setPrevI(i)
                                return -1
                            })
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
    return {
        w, 
        h
    }
}

export const useStyle = (w : number, h : number, scale : number) => {
    const barH : number = h / hFactor
    return {
        itemStyle() : CSSProperties {
            const boxShadow : string | undefined= scale == 0 ? undefined : '5px 10px  10px 5px rgba(13,71,161 ,0.4)'
            return {
                width : `${w * 0.8}px`,
                height : `${barH * scale}px`,
                marginLeft: `${w * 0.1}px`,
                background : '#0D47A1',
                fontSize : `20px`,
                color : 'white', 
                overflow: 'hidden',
                boxShadow
            }
        },
        headerStyle() : CSSProperties {
            return {
                marginLeft: `${w * 0.1}px`,
                width : `${w * 0.8}px`,
                height : `${h / 15}px`,
                fontSize : `30px`,
                color: 'white',
                background: 'rgba(13,71,161 ,0.9)',
                marginTop: `${h / 30}px`,
                cursor: 'pointer'
            }
        },
        accordionStyle(n : number) : CSSProperties {
            return {
                height: `${1.6 * (barH) * n}px`,
                display: 'flex',
                justifyContent: 'space-around'
            }
        }
    }
}