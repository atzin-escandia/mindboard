// import { Component } from "react";

import { useState } from "react"

// export default class CounterClass extends Component {
//     constructor(props: {}) {
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }

//     handleIncrement = () => {
//         this.setState((prevState) => {
//             count = prevState.count + 1
//         })
//     }

//     render() {
//         return <div>
//             <h2>Counter {this.state.count}</h2>
//             <button onClick={this.handleIncrement} >Increment</button>
//         </div>

//     }
// }


export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleCounter = (str: string) => {
        const isIncrement = str === 'up';
        setCounter(prev => !!isIncrement ? prev + 1 : prev - 1)
    }

    return <div>
        <h2>Counter {counter}</h2>
        <button onClick={() => handleCounter('up')} >Increment</button>
        <button onClick={() => handleCounter('down')} >Decrement</button>
    </div>
}