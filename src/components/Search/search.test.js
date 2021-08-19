import {render,fireEvent} from '@testing-library/react'
import Serach from './index'
it('serchTest',()=>{
    const {queryByTitle} = render(<Serach />)
    const input = queryByTitle('input')
    expect(input).toBeTruthy()

})

describe("inputChange",()=>{
    it('change',()=>{
        const {queryByTitle} = render(<Serach />)
        const input = queryByTitle('input')
        fireEvent.change(input,{target:{value:"ANYvALUE"}})
        expect(input.value).toBe("ANYvALUE")
    })
})