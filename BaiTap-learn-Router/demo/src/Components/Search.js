import { useSearchParams } from "react-router-dom";

export default function Search() {

    let products = [
        "iphone 13 mini",
        "iphone 13", 
        "iphone 13 pro", 
        "iphone 13 promax",
        "iphone 12 mini",
        "iphone 12", 
        "iphone 12 pro", 
        "iphone 12 promax"
    ];

    let [searchParams, setSearchParams] = useSearchParams();

    return(
        <div>
            <label>Search: </label>
            <input
                value={searchParams.get("filter") || ""}
                onChange={e => {
                    let filter = e.target.value;
                    if (filter) {
                        setSearchParams({ filter });
                    } else {
                        setSearchParams({});
                    }
                }} 
            />
            { products
                .filter(product => {
                    let filter = searchParams.get("filter");
                    if(!filter) {
                        return true;
                    }
                    let name = product.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                })
                .map((product, index) => (
                    <p key={index}>{product}</p>
                ))}
        </div>
    );

}