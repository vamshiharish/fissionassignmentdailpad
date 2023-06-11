import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Dailpad from './components/Dailpad/dailpad';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <div className="contact-profile">
            <h3 className="heading">NEW CALL FROM</h3>
            <div className="name-container">
                <div className="name-div">
                    <h4 className="name-icon">SP</h4>
                </div>
                <p className="content">Shadow Properties</p>
                <FontAwesomeIcon icon={faCaretDown}/>
            </div>
              <p className="name-display">Your caller ID displays as (202) 944-6641. <a href='#' className="change-option">Change</a></p>
        </div>
        <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon"/>
            <input className="type-numbers" placeholder='Type a Name or Number'></input>
        </div>
        <hr/>
        <div className="Related-contacts">
          <div className="contact">
            <h1 className="single-letter">P</h1>
          </div>
          <div className="contact contact-2">
            <h1 className="single-letter">#</h1>
          </div>
          <div className="contact contact-3">
            <h1 className="single-letter">P</h1>
          </div>
          <div className="contact contact-4">
            <h1 className="single-letter">#</h1>
          </div>
          <div className="contact contact-5">
            <h1 className="single-letter">U</h1>
          </div>
          <div className="contact contact-6">
            <h1 className="single-letter">RR</h1>
          </div>
        </div>
        <Dailpad/>
      </div>
    </div>
  );
}

export default App;
