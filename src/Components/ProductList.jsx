import { useEffect, useState } from "react";
import Product from "./Product";
import LoadingSpinner from "./LoadingSpinner";
import { BsSearch } from 'react-icons/bs';

const ProductList = () => {
    const [items, setInitialItems] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [searchIconClick, searchIconClickSet] = useState(false);
    const [searchValue, setSearchValue] = useState("")
    const [products, setProducts] = useState([]);

    const handleSearch = () => {
        if (searchValue == "") {
            alert("Plear enter the item name to search")
          return;
        }
        const filteredItems = items.filter(item => {
            if (item.title.toLowerCase()
                .includes(searchValue.toLowerCase()))
                return item;
        })
        if(filteredItems.length > 0)
        setProducts(filteredItems);
        else
        setProducts([])
        console.log("Search icon click")
        searchIconClickSet(true);
        setSearchValue("");
    }

    useEffect(() => {
        setFetching(true)
        fetch('https://dummyjson.com/products')
            .then(res => {
                console.log("response",res);
                return res.json();
            })
            .then(data => {
                setInitialItems(data.products);
                setFetching(false)
               // console.log("Data",data)
            })
            .catch((err)=> {
                console.log(err)
            })
    }, []);
    return (
        <>
            <div className="search-box">
                <input placeholder="Please enter product name" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}>
                </input>
                <BsSearch className="search-icon" onClick={() => handleSearch()}></BsSearch>
            </div>
            {fetching && <LoadingSpinner />}
            <div className="products-container">
                { products.map((item) => <Product key={item.id} items={item}></Product>)}
                {!fetching && !searchIconClick && items.map((item) => <Product key={item.id} items={item}></Product>)}
            </div>
        </>
    )
}
export default ProductList;