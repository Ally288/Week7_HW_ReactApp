import { useState, useEffect } from "react"
import CryptoSelector from '../components/CryptoSelector'
import Crypto from '../components/Crypto'
import WatchedCrypto from '../components/WatchedCrypto'
import '../css/CryptoContainer.css';

const CryptoContainer = () => {

    const [cryptocurrencies, setCryptocurrencies] = useState([])
    const [selectedCryptoTicker, setSelectedCryptoTicker] = useState('')

    useEffect(() => {
        getCryptos()
    }, [])

    const getCryptos = () => {
        // fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=price_change_percentage')
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(rest => rest.json())
        .then(cryptoData => setCryptocurrencies(cryptoData))
    }

    const handleCyptoSelected = symbol => {
        setSelectedCryptoTicker(symbol)
    }

    const handleWatchlistToggle = (symbol) => {
        const updatedCryptos = cryptocurrencies.map((cryptocurrency) => {
            return cryptocurrency.symbol === symbol
            ? {...cryptocurrency, isWatched: !cryptocurrency.isWatched}
            : cryptocurrency
        })
        setCryptocurrencies(updatedCryptos)
    }

    const cryptoCapitalization = cryptocurrencies.reduce((total, cryptocurrency) => {
        return total + cryptocurrency.market_cap
    }, 0)

    const selectedCrypto = cryptocurrencies.find(cryptocurrency => cryptocurrency.symbol === selectedCryptoTicker)

    return (
        <>
        <div id="header">
            <h2>Top 100 Cryptocurrencies by Market Capitalization</h2>
        </div>
            <h3 id="sub-head">Total Market Cap of the Top 100 Cryptocurrencies: ${cryptoCapitalization.toLocaleString()}</h3>
            <CryptoSelector cryptocurrencies={cryptocurrencies} onCryptoSelected={handleCyptoSelected} />
            <Crypto cryptocurrency={selectedCrypto} onWatchlistToggle={handleWatchlistToggle} />
            <WatchedCrypto cryptocurrencies={cryptocurrencies} onCryptoSelected={handleCyptoSelected} />
        </>
    )
}

export default CryptoContainer;
