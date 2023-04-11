
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useState } from "react";
import "./App.css";

function App() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Tab 1
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Tab 2
        </button>
        
      </div>

      <div className="content-tabs">
        <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
          <div class='promos px-5 pt-5  '>
                <div class='promo first '  >
                  <h4 className='package-text'>Basic</h4>
                  <p className='price-rate'>AED 200 <span className='month'>/month</span></p>
                  <div className='feature'>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <button className='started-btn btn'>Get Started</button>
                  </div>
                </div>


                <div class="promo third scale">
                  <div className='popular'>
                    <h3 >Most popular</h3>
                  </div>
                  <h4 className='package-text'>Business</h4>
                  <p className='price-rate'>AED 200 <span className='month'>/month</span></p>
                  <div className='feature'>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>

                    <button className='started-btn btn'>Get Started</button>

                  </div>
                </div>
                <div class="promo second">
                  <h4 className='package-text'>Business</h4>
                  <p className='price-rate'>AED 200 <span className='month'>/month</span></p>
                  <div className='feature'>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>

                    <button className='started-btn btn'>Get Started</button>

                  </div>
                </div>
              </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div class='promos px-5 pt-5  '>
                <div class='promo first '  >
                  <h4 className='package-text'>Basic</h4>
                  <p className='price-rate'>AED 500 <span className='month'>/yearly</span></p>
                  <div className='feature'>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <button className='started-btn btn'>Get Started</button>
                  </div>
                </div>


                <div class="promo third scale">
                  <div className='popular'>
                    <h3 >Most popular</h3>
                  </div>
                  <h4 className='package-text'>Business</h4>
                  <p className='price-rate'>AED 200 <span className='month'>/month</span></p>
                  <div className='feature'>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>

                    <button className='started-btn btn'>Get Started</button>

                  </div>
                </div>
                <div class="promo second">
                  <h4 className='package-text'>Business</h4>
                  <p className='price-rate'>AED 200 <span className='month'>/month</span></p>
                  <div className='feature'>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>
                    <p className='color'><i className='fa fa-check'></i> One Time Setup Fee</p>

                    <button className='started-btn btn'>Get Started</button>

                  </div>
                </div>
              </div>
        </div>

        
      </div>
    </div>
  );
}







export default App;