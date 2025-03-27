import React from 'react'
import ProductCard from './productCard'

const Card = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-10'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default Card