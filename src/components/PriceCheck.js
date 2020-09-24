import React, { useState } from 'react';
import {connect} from 'react-redux';
import {SAUTI_PRODUCTS, SAUTI_PRODUCT_CATEGORIES, SAUTI_PRODUCT_SUBCATEGORIES} from '../consts'
import {fetchPricing} from '../redux/actions/fetchPricing';


function PriceCheck ({fetchPricing}){
    let [product, setProduct] = useState({});


    function onChange (event) {
        let {name, value} = event.target;
        setProduct({...product, [name]:value})
    }

    async function productChange (event) {
        let {name, value} = event.target;
        await setProduct({...product, [name]:value});
        console.log(product);
        fetchPricing(value);
    }
    return (
        <form>
            <label htmlFor='category'> Select a Category:
                <select name='category' onChange={onChange}>
                    <option value=''>--Select a Category--</option>
                {SAUTI_PRODUCT_CATEGORIES.map(cat => {
                    return (
                        <option key={`cat-${cat}`} value={cat}>{cat}</option>
                    )
                })}
                </select>
            </label>
            <label htmlFor='subcategory'> Select a Subcategory:
                <select name='subcategory' onChange={onChange}>
                    <option value=''>--Select a Subcategory--</option>
                {SAUTI_PRODUCT_SUBCATEGORIES
                    .filter(item => item.category === product.category)
                    .map(item => {
                        return (
                         
                            <option key={`subcat-${item.subcategory}`} value={item.subcategory}>{item.subcategory}</option>
                        )
                })}
                </select>
            </label>
            <label htmlFor='product'> Select a Product:
                <select name='product' onChange={productChange}>
                    <option value=''>--Select a Product--</option>
                {SAUTI_PRODUCTS
                    .filter(item => item.subcategory === product.subcategory)
                    .map(item => {
                        return (
                            <option key={`prod-${item.product}`}value={item.product}>{item.product}</option>
                        )
                })}
                </select>
            </label>
        </form>
    )
}

function mapStateToProps (state){
    return {
        data: state.pricingReducer.data,
        isFetching: state.pricingReducer.isFetching,
        error: state.pricingReducer.error,

    }
}
export default connect((mapStateToProps),{fetchPricing})(PriceCheck)