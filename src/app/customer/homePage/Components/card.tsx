import React from 'react'
import ProductCard from './productCard'

const Card = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default Card