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
            <label>Name:&nbsp;
                <input
                    value={values.customer_name}
                    onChange={onInputChange}
                    name='customer_name'
                    type='text'/>
            </label>
            <label>Choice of Size:&nbsp;
                <select 
                    value={values.size}
                    onChange={onInputChange}
                    name='size'

                >
                    <option value=''>Select 1:</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                </select>
            </label>
            <label>Coice of Sauce:&nbsp;
                <input
                type='radio'
                name='original'
                value='original'
                checked={true}
                />Original Red
                <input
                type='radio'
                name='garlic_ranch'
                value='garlic_ranch'
                />Garlic Ranch
                <input
                type='radio'
                name='bbq'
                value='bbq'
                />BBQ Sauce
                 <input
                type='radio'
                name='alfredo'
                value='alfredo'
                />Alfredo

            </label>
            <label>Choice of Toppings&nbsp;
                <input
                checked={values.pepperoni}
                onChange={onCheckboxChange}
                name='pepperoni'
                type='checkbox'/>Pepperonni

                <input
                checked={values.sausage}
                onChange={onCheckboxChange}
                name='sausage'
                type='checkbox'/>Sausage

                <input
                checked={values.canadian_bacon}
                onChange={onCheckboxChange}
                name='canadian_bacon'
                type='checkbox'/>Canadian Bacon

                <input
                checked={values.bacon}
                onChange={onCheckboxChange}
                name='bacon'
                type='checkbox'/>Bacon

            </label>
            <label>Special Delivery Instructions
                <input
                    value={values.instructions}
                    onChange={onInputChange}
                    name='instructions'
                    type='text'/>
            </label>
            <button onClick={onSubmit}>Place Order</button>

        </form>
    )
}