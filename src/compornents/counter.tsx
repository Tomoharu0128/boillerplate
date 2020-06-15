import React,{useState} from 'react'

const Counter = () => {
    const [number, setNumber] = useState(0)
    // var number = 0

    const plusCount = () => {
        // number += 1
        setNumber(number + 1)
        console.log(number)
    }

    return(
        <React.Fragment>
            <div>{number}</div>
            <button onClick={plusCount}>count</button>
        </React.Fragment>
    )
}

export default Counter