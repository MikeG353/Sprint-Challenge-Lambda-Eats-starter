import React from 'react'

export default function Form(props) {
    const {
        values,
        onInputChange,
        onCheckboxChange,
        onRadioChange,
        onSubmit
    } = props

    return (
        <form className='pizza'>
            <div className='errors'>

            </div>
            <h2>Build Your Own Pizza</h2>
            <img src='./image/Pizza'></img>
            <h2>Name:</h2>
            <label>
                <input
                    value={values.customer_name}
                    onChange={onInputChange}
                    name='customer_name'
                    type='text'/>
            </label>
            <h2>Choice of Size:</h2>
            <label>
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
            <h2>Coice of Sauce:</h2>
            <div>
                <input
                type='radio'
                id='original_red'
                name='sauce'
                value='original'
                onChange={onRadioChange}
                checked/>
                <label>Original Red</label>

                <input
                type='radio'
                id='garlic_ranch'
                name='sauce'
                value='garlic_ranch'
                onChange={onRadioChange}
                /><label>Garlic Ranch</label>

                <input
                type='radio'
                id='sauceChoice3'
                name='sauce'
                value='bbq'
                onChange={onRadioChange}
                /><label>BBQ Sauce</label>

                <input
                type='radio'
                id='sauceChoice4'
                name='sauce'
                value='alfredo'
                onChange={onRadioChange}
                /><lable>Spinich Alfredo</lable>
            </div>
            <h2>Choice of Toppings:</h2>
                <lable><input
                checked={values.toppings.pepperoni}
                onChange={onCheckboxChange}
                name='pepperoni'
                type='checkbox'
                />
                Pepperonni</lable>

                <lable><input
                checked={values.toppings.sausage}
                onChange={onCheckboxChange}
                name='sausage'
                type='checkbox'/>Sausage</lable>

                <lable><input
                checked={values.toppings.canadian_bacon}
                onChange={onCheckboxChange}
                name='canadian_bacon'
                type='checkbox'/>Canadian Bacon</lable>

                <lable><input
                checked={values.toppings.bacon}
                onChange={onCheckboxChange}
                name='bacon'
                type='checkbox'/>Bacon</lable>

            <h2>Special Delivery Instructions:</h2>
            <label>
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