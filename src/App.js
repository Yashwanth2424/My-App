import EvenOddApp from './Components/EvenOddApp'
import Counter from './Components/Counter/index.js'
import DestinationSearch from './Components/DestinationSearch'
import SimpleTodos from './components2/SimpleTodos'
import CashWithdrawal from './CashWithdrawComponent/CashWithdrawal'
import GoogleSuggestions from './googleSearchSuggestions/GoogleSuggestions/index.js'
import LettersCalculator from './LettersCalculatorComponent/LettersCalculator/index.js'
import BrowserHistory from './BrowseHistoryComponent/BrowseHistory/index.js'
import './App.css';

const destinationsList = [
      {
        id: 1,
        name: 'Melaka Mosque',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png',
      },
      {
        id: 2,
        name: 'Shrubland',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/shrubland-img.png',
      },
      {
        id: 3,
        name: 'New York',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/new-york-img.png',
      },
      {
        id: 4,
        name: 'Escarpment',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/escarpment-img.png',
      },
      {
        id: 5,
        name: 'Westminster Abbey',
        imgUrl:
          'https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png',
      },
      {
        id: 6,
        name: 'South Downs National Park',
        imgUrl:
          'https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png',
      },
      {
        id: 7,
        name: 'National Historic Site',
        imgUrl:
          'https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png',
      },
      {
        id: 8,
        name: 'Tower Bridge',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png',
      },
      {
        id: 9,
        name: 'Arc Here',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/arc-here-img.png',
      },
      {
        id: 10,
        name: 'Steeple',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/steeple-img.png',
      },
      {
        id: 11,
        name: 'Glaciokarst',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/glaciokarst-img.png',
      },
      {
        id: 12,
        name: 'Parco Nazionale delle Cinque Terre',
        imgUrl:
          'https://assets.ccbp.in/frontend/react-js/parco-nazionale-delle-cinque-terre-img.png',
      },
    ]

const App = () => {
      return (
           
            <div className='app-bg-container'>
              <p className='my-description'>Hii,This this Yashwanth</p>
              <h1 className='my-heading-tag'>My Mini Projects</h1>
                  <div className='components-container'>
                  <div className='Section-1'>
                    <Counter />
                  </div>
                  <div className='Section-1'>
                  <EvenOddApp />
                  </div>
                  <div className='section-2'>
                  <DestinationSearch destinationsList={destinationsList} />
                  </div>
                  <div className='section-3'>
                  <SimpleTodos />
                  </div>
                  <div className='section-4'>
                  <CashWithdrawal />
                  </div>
                  <div className='section-5'>
                  <GoogleSuggestions />
                  </div>
                  <div className='section-5'>
                  <LettersCalculator />
                  </div>
                  <div className='section-5'>
                  <BrowserHistory />
                  </div>
                  </div>
            </div>
      )
}

export default App;
