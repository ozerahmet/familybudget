import React, { useEffect, useState, useRef } from 'react';

const CurrencyHeader = () => {
    const [exchangeRates, setExchangeRates] = useState({});
    const [location, setCurrentLocation] = useState("TR");
    const [currency, setCurrency] = useState("TRY");
    const [loading, setLoading] = useState(true);
    const slideContentRef = useRef(null);
    const [animationDuration, setAnimationDuration] = useState(30);

    useEffect(() => {
        const fetchExchangeRates = async () => {
            try {
                const currentLocation = await fetch('https://ipinfo.io/json');
                const currentLocationResponse = await currentLocation.json();
                currentLocationResponse.country != null ? setCurrentLocation(currentLocationResponse.country) : "TR";

                const allCurrencies = await fetch('https://api.frankfurter.app/currencies');
                const allCurrenciesResponse = await allCurrencies.json();
                const allCurrenciesList = Object.keys(allCurrenciesResponse);

                const currencyOfCountry = await fetch('https://restcountries.com/v3.1/alpha/' + location);
                const currencyOfCountryResponse = await currencyOfCountry.json();
                Object.keys(currencyOfCountryResponse[0].currencies)[0] != null ? setCurrency(Object.keys(currencyOfCountryResponse[0].currencies)[0]) : "TRY";

                const currencyValueResponse = await fetch('https://api.frankfurter.app/latest?from='+ currency +'&to=' + allCurrenciesList.join(','));
                const data = await currencyValueResponse.json();
                
                setExchangeRates(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
                setLoading(false);
            }
        };

        fetchExchangeRates();
    }, []);

    const ratesArray = exchangeRates.rates ? Object.entries(exchangeRates.rates) : [];

    useEffect(() => {
        if (slideContentRef.current && ratesArray.length > 0) {
            const width = slideContentRef.current.scrollWidth;
            const duration = width / 150;
            setAnimationDuration(duration);
        }
    }, [exchangeRates, ratesArray.length]);

    return (
        <header style={{ padding: '5px', backgroundColor: '#f4f4f4', borderBottom: '1px solid #ddd' }}>
            {loading ? (
                <p>Yükleniyor...</p>
            ) : (
                <div className='col-sm-12 slideWrapper' style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    <div
                        className='slideContent'
                        ref={slideContentRef}
                        style={{
                            animation: `kayan ${animationDuration}s linear infinite`
                        }}
                    >
                        {[...ratesArray, ...ratesArray].map(([code, value], idx) => (
                            <div className='slideDiv' key={code + idx}>
                                {code}: {value}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default CurrencyHeader;