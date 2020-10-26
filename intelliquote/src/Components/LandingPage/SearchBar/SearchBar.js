import React, {useState} from 'react';
import './SearchBar.css'
import Quote from "../../Quote/Quote";

const SearchBar = () => {
    const BarStyling = {width: "20rem", background: "#F2F1F9", border: "none", padding: "0.5rem"};
    const [keyword, setKeyword] = useState('');
    const [quotes, setQuotes] = useState([]);
    const getRandom = async (event) => {
        event.preventDefault();
        const apiUrl = `${process.env.REACT_APP_LOCALHOST_URL}/getRandom`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            setQuotes(data);
        } catch (err) {
            console.log(err);
        }
    }
    const searchQuotes = async (event) => {
        event.preventDefault();
        const apiUrl = `${process.env.REACT_APP_LOCALHOST_URL}/search?query=${keyword}`;

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
                <button className={"button"} onClick={getRandom}>Random</button>
            </form>
            <Quote quotes={quotes}/>
        </>

    );
}

export default SearchBar
