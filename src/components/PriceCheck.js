import React from 'react';
import {SAUTI_PRODUCTS, SAUTI_PRODUCT_CATEGORIES, SAUTI_PRODUCT_SUBCATEGORIES} from '../consts'


export default function PriceCheck (props){

    return (
        <form>
            <label htmlFor='categories'> Select a Category:
                <select name='categories'>
                    <option value='' style={{textAlign: 'center'}}>-------</option>
                {SAUTI_PRODUCT_CATEGORIES.map(cat => {
                    return (
                        <option value={cat}>{cat}</option>
                    )
                })}
                </select>
            </label>
        </form>
    )
}