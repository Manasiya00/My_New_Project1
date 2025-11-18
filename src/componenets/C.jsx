import React, { useEffect, useState } from 'react'
import axios from 'axios'

function C() {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        axios.get('https://dummyjson.com/recipes')
            .then((res) => setProducts(res.data.recipes))
    }, [])
    return (
        <div>
            {products && products.map((p, i) => {
                return <>
                    <p>{p.id}{p.name}{p.ingredients}</p>
                    <img src={p.image} alt="" />
                </>
            })}

        </div>
    )
}

export default C