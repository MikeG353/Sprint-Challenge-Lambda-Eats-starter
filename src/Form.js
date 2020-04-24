import React from 'react'

export default function Form(props) {
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onSubmit
    } = props

    return (
        <form className='pizza'>
            <div className='errors'>

            </div>
            <h2>Build Your Own Pizza</h2>
            <img src='./image/Pizza'></img>
            <label>Choice of Size:&nbsp;
                <select 
                    value={values.size}
                    onchange={onInputChange}
                    name='size'

                >
                    <option value=''>Select 1:</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                </select>
            </label>
            <label>Choice of Toppings
                <input
                checked={values.pepperoni}
                onChange={onCheckboxChange}
                name='pepperoni'
                type='checkbox'>Pepperonni</input>

            </label>

        </form>
    )
}