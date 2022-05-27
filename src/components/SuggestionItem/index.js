import './index.css'

const SuggestionItem = Props => {
  const {SuggestionItemDetails} = Props
  const {suggestion} = SuggestionItemDetails
  return (
    <li>
      <button type="button">
        {suggestion}
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
