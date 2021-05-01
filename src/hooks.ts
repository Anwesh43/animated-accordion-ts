import {useState, useEffect} from 'react'

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