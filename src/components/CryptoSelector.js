import '../css/CryptoSelector.css';


const CryptoSelector = ({ cryptocurrencies, onCryptoSelected }) => {

    const handleChange = event => {
        onCryptoSelected(event.target.value)
    }

    return (
        <>
        <select defaultValue="" onChange = { handleChange } >
            <option value="" disabled > Choose a Cryptocurrency </option> {
                cryptocurrencies.map(cryptocurrency => {
                    return ( <
                        option key = { cryptocurrency.symbol }
                        value = { cryptocurrency.symbol } > { cryptocurrency.name } </option>
                    )
                })
            }
        </select>
        </>
    )
}

export default CryptoSelector;