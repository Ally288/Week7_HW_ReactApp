import '../css/WatchedCrypto.css';


const WatchedCrypto = ({ cryptocurrencies, onCryptoSelected }) => {

    const watchedCrypto = cryptocurrencies.filter(cryptocurrency => cryptocurrency.isWatched)

    return (
        <>
        <div className="watchlist_header">
        <h2>Your Watchlist:</h2>
        </div>
        <ul>
            {watchedCrypto.map(cryptocurrency => {
                return (
                    <li className="watchlist" key={cryptocurrency.symbol}>
                        <button className="watchlistbtn" role="button" onClick={() => onCryptoSelected(cryptocurrency.symbol)}>{cryptocurrency.name} ({cryptocurrency.symbol.toUpperCase()})</button>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default WatchedCrypto;