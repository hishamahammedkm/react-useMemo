import { useState } from "react"

const Search = () => {
    const [inputValue, setInputValue] = useState()
    const handleChange = (e)=>{
        setInputValue(e.target.value)
    }
    return (
        <div>
            <input title='input' onChange={handleChange} type="text" name="" id="" />
        </div>
    )
}

export default Search
