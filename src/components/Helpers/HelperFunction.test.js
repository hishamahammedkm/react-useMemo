import {multiply,makeLowerCase} from './HelperFunction'

test("fucTest",()=>{
    expect(multiply(2,3)).toBe(6)
})
test('lower',()=>{
    expect(makeLowerCase("ABC")).toBe("abc")
})