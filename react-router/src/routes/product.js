import React from 'react'

import { useParams } from 'react-router-dom'//functional hook

function Product() {
    let Params = useParams();
    return (
    <>
        <h1>Product: {Params.productId}</h1>
    </>
    )
}

export default Product