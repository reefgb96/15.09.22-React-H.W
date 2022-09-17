import React, { Fragment, useState, useEffect } from "react";
import "./Cards.css";
import "./CardsFilters.css";
// import Filters from "./CardsFilters";

const dataArr = [
  {
    img: "https://images.pexels.com/photos/1203803/pexels-photo-1203803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Film Camera",
    desc: "Vintage film camera with professional lens",
    price: 300,
  },
  {
    img: "https://images.pexels.com/photos/2439712/pexels-photo-2439712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Retro Camera",
    desc: "Retro B&W camera with professional lens",
    price: 500,
  },
  {
    img: "https://images.pexels.com/photos/206501/pexels-photo-206501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Ricoh KR-10",
    desc: "Mirrorless camera with professional lens",
    price: 460,
  },
  {
    img: "https://images.pexels.com/photos/1034096/pexels-photo-1034096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Praktica MTL 50",
    desc: "Vintage Mirrorless camera with professional lens",
    price: 880,
  },
  {
    img: "https://images.pexels.com/photos/10775338/pexels-photo-10775338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Cannon EOS 80D",
    desc: "DSLR Camera without lens",
    price: 200,
  },
  {
    img: "https://images.pexels.com/photos/6370371/pexels-photo-6370371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Cannon EOS Rebel T6i",
    desc: "DSLR Camera with professional lens",
    price: 700,
  },
  {
    img: "https://images.pexels.com/photos/8539296/pexels-photo-8539296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Sony Alpha 7R",
    desc: "DSLR camera without lens",
    price: 750,
  },
  {
    img: "https://images.pexels.com/photos/838680/pexels-photo-838680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Olympus OM10",
    desc: "Vintage film Camera with lens",
    price: 300,
  },
];

const DispCards = () => {
  const [sortAndFilter, setSortAndFilter] = useState(dataArr);
  const [findInput, setFindInput] = useState("");

  let sortAndFilterCopy = JSON.parse(JSON.stringify(dataArr));
  const handleSortPriceUp = () => {
    setSortAndFilter(
      sortAndFilterCopy.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      )
    );
  };
  const handleSortPriceDown = () => {
    setSortAndFilter(
      sortAndFilterCopy.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      )
    );
  };

  useEffect(() => {
    let regex = new RegExp(findInput, "i");
    sortAndFilterCopy = sortAndFilterCopy.filter((item) =>
      regex.test(item.title)
    );
    setSortAndFilter(sortAndFilterCopy);
  }, [findInput]);

  const handleFilterItems = (e) => {
    setFindInput(e.target.value);
  };

  return (
    <Fragment>
      {/* <Filters /> */}
      <div className="filters container border-bottom pb-2 pt-4">
        <h2>Products</h2>
        <nav className="nav">
          <button onClick={handleSortPriceUp} className="btn nav-link">
            Sort Price Up
          </button>
          <button onClick={handleSortPriceDown} className="btn nav-link">
            Sort Price Down
          </button>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="   Search here..."
            className="filter-search"
            value={findInput}
            onChange={handleFilterItems}
          />
        </nav>
      </div>
      <div className="row container row-cols-1 row-cols-md-4 g-4 products-wrapper">
        {sortAndFilter.map((item, key) => {
          return (
            <div className="col" key={key}>
              <div className="card card-wrapper p-2">
                <img
                  src={item.img}
                  className="card-img-top product-img"
                  alt={item.title}
                />
                <div className="card-body">
                  <h5 className="card-title border-top pt-2">{item.title}</h5>
                  <p className="card-text">{item.desc}</p>
                </div>
                <div className="product-price fs-4 d-flex justify-content-center m-2 text-dark">
                  {item.price}$
                  <div className="prev-price fs-6 text-danger">
                    {item.price + item.price * 0.6}$
                  </div>
                </div>
                <button className="btn btn-primary cart-btn">
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default DispCards;
