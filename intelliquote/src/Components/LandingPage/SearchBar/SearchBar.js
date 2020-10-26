import React, {useState} from 'react';
import './SearchBar.css'
import Quote from "../../Quote/Quote";

const SearchBar = () => {
    const BarStyling = {width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem"};
    const [keyword, setKeyword] = useState('');
    const [quotes, setQuotes] = useState([]);
    const searchQuotes = async (event) => {
        event.preventDefault();
        // TODO: Implement environment file to simplify api urls
        const apiUrl = `http://localhost:8080/api/search?query=${keyword}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setQuotes(data);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <>
            <form className='searchbar-div' onSubmit={searchQuotes}>
                <input
                    className='search-bar'
                    style={BarStyling}
                    key="random1"
                    value={keyword}
                    placeholder={"search quote"}
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <button className={"button"} type={"submit"}>Search</button>
            </form>
            <Quote quotes={quotes}/>
        </>

    );
}

export default SearchBar
