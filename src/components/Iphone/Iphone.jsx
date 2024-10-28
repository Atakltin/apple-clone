// import React from 'react'
// import { useState, useEffect } from 'react'
// import {Link} from 'react-router-dom'

// function Iphone() {
//     let [product, setProduct] = useState([]);
//     useEffect(() => {
//         fetch(
//             "http://localhost:1221/iphones"
//         )
//             .then((response) => response.json())
//             .then((data) => {
//                 let iphoneDta = data.products;
//                 setProduct(iphoneDta);
//             })
//             .catch (() => console.log('Error! unable to fetch'));

//     }, []);
    
//     let flip = true;
//     return (
//         <div>
//             <section className="internal-page-wrapper">
//                 <div className="container">
//                     <div className="row justify-content-center text-center">
//                         <div className="col-12 mt-5 pt-5">
//                             <h1 className='font-weight-bold'>Iphones</h1>
//                             <div className='brief-description mb-5'>
//                                 the best for the brightest.
//                             </div>
//                         </div>
//                     </div>
//                     {product?.map((singleProduct) => {
//                         let order1 = 1;
//                         let order2 = 2;
//                         if (flip) {
//                             order1 = 2;
//                             order2 = 1;
//                             flip = !flip;
//                         } else {
//                             flip = !flip;
//                         }
//                         let productDiv = (
//                             <div key={singleProduct.product_url} className='row justify-content-center text-center product-holder h-100'>
//                                 <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
//                                     <div className='product-title'>{singleProduct.product_name}</div>
//                                     <div className='product_brief'>{singleProduct.product_brief_discription}</div>
//                                     <div className='starting-price'>{`starting at ${singleProduct.starting_price}`}</div>
//                                     <div className='monthly-price'>{singleProduct.price_range}</div>
//                                     <div className='links-wraper'>
//                                         <ul>
//                                             <li>
                                                
//                                                 <Link to={`/iphone/${singleProduct.product_url}`}>
//                                                     Learn more
//                                                 </Link>
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className={`col-sm-12 col-md-6 order-${order2}`}>
//                                     <div className='product-image'>
//                                         <img src={singleProduct.product_img} alt="product" />
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                         return productDiv;
//                     }
//                     )}
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Iphone;
