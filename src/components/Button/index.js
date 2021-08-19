import { useState } from "react"

const Button = () => {
    const [value, setValue] = useState('Press Here')
    const dummyFuction = ()=>{
        setValue('clicked')
    }
    return (
        <div>
            <button onClick={dummyFuction} title='dummyButton'>{value}</button>
        </div>
    )
}

export default Button
