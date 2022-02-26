import {animated, useSpring} from 'react-spring'
import React from 'react'

interface ExportProps {
   name: string;
   time: Date;
   description: string;
}

export default function Event({name, time, description}: ExportProps) {
    
    let [hovered, setHovered] = React.useState(false)

    let dropped = useSpring({
        opacity: hovered ? 1: 0,
        height: hovered ? '20px' : '0px',
        borderTop: hovered ? '1px solid' : '0rem solid',
        paddingTop: hovered ? '0.5rem' : '0rem' 
    })

    let time_info = {
        day: time.getDay(),
        hour: time.getHours(),
        min: time.getMinutes(),
        full_year: time.getFullYear(),
        local_time: time.toLocaleString(),
        local_date: time.toLocaleDateString(),
        local_overall: time.toLocaleTimeString()
    }

    return (
        <div 
            className='p-3 rounded-md bg-gray-300 hover:bg-gray-200'
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className='flex'>
                <div>
                    {name}
                </div>
                <div>
                    {time_info.local_time} on {time_info.local_date}
                </div>
            </div>
            <animated.div style={dropped}>
                {description}
            </animated.div>
        </div>
    )
}
