import './index.css'

const BrowserHistoryItem = props => {
  const {eachItem, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItem
  const onDeleteHistoryList = () => {
    onDeleteHistory(id)
  }
  return (
    <li className="history-item">
      <p className="history-section-time">{timeAccessed}</p>
      <div className="website-details-container">
        <img src={logoUrl} alt="logo url" className="company-logo" />
        <div className="website-company-details-container">
        <p className="company-title">{title}</p>
        <p className="company-domain-url">{domainUrl}</p>
        </div>
      </div>
      <div className='history-website-delete-icon'>
        <button onClick={onDeleteHistoryList} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistoryItem
