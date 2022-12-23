import React from "react";
import { useState, useRef } from 'react'

const FindNumbers = () => {

    const [input, setInput] = useState({
        input1: 0,
        input2: 0,
        input3: 0,
    })


    const ref1 = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)

    //reads values of inputs
    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: Number(e.target.value)
        })
        ref1.current.className = ''
        ref2.current.className = ''
        ref3.current.className = ''
    }

    //max and min function to work if value is 0
    const maxMin = (arg1, arg2) => {
        let par = []

        for (let i = 0; i < arg1.length; i++) {
            if (arg1[i] !== 0) {
                par.push(arg1[i])
            }
        }


        //get from here 1 number, not array
        return arg2 === 'max'
            ? Math.max.apply(Math, par)
            : Math.min.apply(Math, par)


    }


    //based on button name highlights proper input field
    const findNumber = (e) => {
        let num
        let arr1 = Object.values(input)
        let ref = [ref1, ref2, ref3]

        e.target.name === 'big'
            ? num = maxMin(arr1, 'max')
            : num = maxMin(arr1, 'min')


        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === num) {
                ref[i].current.className = 'right'
            }
        }
    }

    return (
        <div>
            <div className="wrapperInputs">
                <input ref={ref1} name='input1' type='text' onChange={handleChange} ></input>
                <input ref={ref2} name='input2' type='text' onChange={handleChange} ></input>
                <input ref={ref3} name='input3' type='text' onChange={handleChange} ></input>
            </div>
            <div className="wrapperBtn">
                <button name="big" onClick={findNumber}>Biggest</button>
                <button name="small" className="" onClick={findNumber}>Smallest</button>
            </div>
        </div>
    )
}
export default FindNumbers