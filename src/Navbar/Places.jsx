import React, { useState } from 'react';

const Places = () => {
    const [cityName, setCityName] = useState(""); // State to hold input value
    const [cityInfo, setCityInfo] = useState(""); // State to hold city information
    const [cityImage, setCityImage] = useState(""); // State to hold city image URL

    const searchCity = async (cityName) => {
        const searchUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${cityName}&limit=1&namespace=0&format=json&origin=*`;

        try {
            const response = await fetch(searchUrl);
            const data = await response.json();
            if (data[1].length > 0) {
                return data[1][0];
            } else {
                return null;
            }
        } catch (error) {
            console.error("Error searching for city:", error);
            return null;
        }
    };

    const getCityInfo = async (title) => {
        const infoUrl = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&exintro&titles=${title}&format=json&origin=*`;

        try {
            const response = await fetch(infoUrl);
            const data = await response.json();

            const pageId = Object.keys(data.query.pages)[0];
            const page = data.query.pages[pageId];
            const extract = page.extract || "No information available.";
            const imageUrl = page.thumbnail ? page.thumbnail.source : "";

            return { extract, imageUrl };
        } catch (error) {
            console.error("Error getting city information:", error);
            return { extract: "No information available.", imageUrl: "" };
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (cityName.trim() === "") {
            alert("Please enter a city name.");
            return;
        }

        const title = await searchCity(cityName);
        if (title) {
            const info = await getCityInfo(title);
            setCityInfo(info.extract); // Update state with city information
            setCityImage(info.imageUrl); // Update state with city image URL
        } else {
            setCityInfo(`No information found for ${cityName}.`);
            setCityImage("");
        }
    };

    return (
        <div className='container mt-5'>
            <form onSubmit={handleSearch} className='d-flex'>
                <input
                    type="text"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    placeholder="Enter city name"
                    className='form-control'
                />
                <button type='submit' className="btn btn-danger">Search</button>
            </form>
            
            <div className='box-place mt-5 d-flex justify-between'>
            <div>
                {cityImage && (
                    <div className='img-width'>
                        <img src={cityImage} alt={cityName} className='' />
                    </div>
                )}
                </div>
                <div dangerouslySetInnerHTML={{ __html: cityInfo }} />
            </div>
        </div>
    );
}

export default Places;
