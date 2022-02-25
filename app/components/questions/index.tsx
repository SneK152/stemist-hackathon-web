import {useSpring, a, animated, useTransition} from 'react-spring'
import {useState} from 'react';

export default function Question({answer, question, color}: {answer: string, question: string, color: string}) {
    
    let arrow = '▼'
    
    const [isToggled, setToggle] = useState(false);
    const questionSpring = useSpring({ 
        background: isToggled ? "#6ce2ff" : "#ebebeb",
        borderBottomLeftRadius: !isToggled ? '0.5rem' : '0rem',
        borderBottomRightRadius: !isToggled ? '0.5rem' : '0rem'
    });
    const answerSpring = useSpring({
        transform: isToggled ? "translate3D(0,0,0)" : "translate3D(0,-40px,0)",
        opacity: isToggled ? 1 : 0,
        background: isToggled ? 'pink' : 'white',
        borderTopLeftRadius: !isToggled ? '0.5rem' : '0rem',
        borderTopRightRadius: !isToggled ? '0.5rem' : '0rem'
    });
    const arrowSpring = useSpring({
        y: isToggled ? 180 : 0
    });
    return (
    <div className='max-h-fit h-fit px-3 text-2xl mx-1 rounded-md'>
        <animated.button
            style={questionSpring}
            className="rounded-lg w-screen text-left flex pl-2 py-3"
            onClick={() => setToggle(!isToggled)}
        >
            {question} ?
            
            <animated.p className={`pl-2`} style={{
                transform: arrowSpring.y.to(y => `rotateX(${y}deg)`)
            }}>
            
                {arrow}
            </animated.p>
        </animated.button>
        <animated.div style={answerSpring} className={`rounded-lg pl-2 py-3`}>
            {isToggled ? answer : null}
        </animated.div>
    </div>
            
    )
}