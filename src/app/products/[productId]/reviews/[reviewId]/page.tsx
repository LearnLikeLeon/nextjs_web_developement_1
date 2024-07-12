// This code is for the root route aka ' /products/{productId}/reviews/{reviewId} : Nested Dynamic Routes
export default function ReviewDetail( {
    params,
} : {
    params : {
        productId : string
        reviewId : string
    }
}){
    return(
        <>
            <h1> Review {params.reviewId} for product {params.productId}</h1>
        
        </>

    ) 
}