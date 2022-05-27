import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  render() {
    const {suggestionList} = this.props
    return (
      <div className="google_bg_container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google Logo"
          className="google_logo"
        />
        <div className="search_input_bar">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="Search_icon"
            />
            <input type="Search" placeholder="Google Search" />
          </div>
          <ul>
            {suggestionList.map(eachSuggest => (
              <SuggestionItem
                key={eachSuggest.id}
                SuggestionItemDetails={eachSuggest}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
