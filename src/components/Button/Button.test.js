import {render,fireEvent} from '@testing-library/react'
import { ExpectationFailed } from 'http-errors'
import { describe } from 'yargs'
import Button from './index'
it("button-render-check",()=>{
    const {queryByTitle} = render(<Button/>)
    const btn = queryByTitle('dummyButton')
    expect(btn).toBeTruthy()
})
describe("btnClick",()=>{
    it("clicked",()=>{
        const {queryByTitle} = render(<Button/>)
        const btn = queryByTitle('dummyButton')
        expect(btn.innerHTML).toBe('Press Here')
        fireEvent.click(btn)
        expect(btn.innerHTML).toBe('clicked')
    })
})