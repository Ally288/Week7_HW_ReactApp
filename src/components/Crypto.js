import '../css/Crypto.css';


const Crypto = ({ cryptocurrency, onWatchlistToggle}) => {

    if (!cryptocurrency) {
        return null
    }

    const handleClick = () => {
        onWatchlistToggle(cryptocurrency.symbol)
    }

    const watchlistBtnText = cryptocurrency.isWatched ? '- Watchlist' : '+ Watchlist'

    return (
        <>
        <div className="crypto_container">
        <button className="watch_button" onClick={handleClick}>{watchlistBtnText}</button>
            <div className="crypto_row">
                {/* <p>{cryptocurrency.market_cap_rank}</p> */}
                    <div className="crypto">
                <img class="spin" src={cryptocurrency.image} alt={cryptocurrency.name} />
                <h3>{cryptocurrency.name} ({cryptocurrency.symbol.toUpperCase()})</h3>
                    </div>
                    <div className="crypto_data">
                        <p className="market_cap">Market Cap: ${cryptocurrency.market_cap.toLocaleString()}</p>
                        <p className="price">${cryptocurrency.current_price.toLocaleString(undefined, { minimumFractionDigits: 5 })}</p>
                        {cryptocurrency.price_change_24h <0 ? (
                            <p className="price_change red">${cryptocurrency.price_change_24h.toLocaleString(undefined, { minimumFractionDigits: 4 })}</p>
                        ) : (
                            <p className="price_change green">${cryptocurrency.price_change_24h.toLocaleString(undefined, { minimumFractionDigits: 4 })}</p>
                        )}
                        {cryptocurrency.price_change_percentage_24h <0 ? (
                            <p className="price_perc_change red">{cryptocurrency.price_change_percentage_24h.toFixed(2)}%</p>
                        ) : (
                            <p className="price_perc_change green">{cryptocurrency.price_change_percentage_24h.toFixed(2)}%</p>
                        )}
                    </div>
            </div>
        </div>
        </>
    )
}

export default Crypto;