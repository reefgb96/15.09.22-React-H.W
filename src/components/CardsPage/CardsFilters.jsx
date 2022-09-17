// import React, { Fragment, useState, useEffect } from "react";
// import "./CardsFilters.css";

// const Filters = () => {
//   const [sortPrice, setSortPrice] = useState(false);

//   // sortPrice = JSON.parse(JSON.stringify(dataArr));
//   // console.log(sortPrice);

//   const handleSortPrice = () => {
//     dataArr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
//     console.log("clicked");
//   };

//   return (
//     <Fragment>
//       <div className="filters container border-bottom pb-2 pt-4">
//         <h2>Products</h2>
//         <nav className="nav">
//           <button onClick={handleSortPrice} className="btn nav-link">
//             Sort Price
//           </button>
//           <button className="btn nav-link">Brands</button>
//           <button className="btn nav-link">Price</button>
//           <input
//             type="search"
//             name="search"
//             id="search"
//             placeholder="   Search here..."
//             className="filter-search"
//           />
//         </nav>
//       </div>
//     </Fragment>
//   );
// };

// export default Filters;
