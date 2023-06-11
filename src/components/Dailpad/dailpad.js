import "./dailpad.css"

const Dailpad = () => {
    return(
        <div className="dailpad-container">
            <div className="dailpad-card">
                <div className="dail-numbers">1</div>
                <div className="dail-number">
                    <span className="number">2</span>
                    <p className="alpha">ABC</p>
                </div>
                <div  className="dail-number">
                    <span  className="number">3</span>
                    <p className="alpha">DEF</p>
                </div>
            </div>

            <div className="dailpad-card">
                <div  className="dail-number">
                    <span  className="number">4</span>
                    <p className="alpha">GEF</p>
                </div>
                <div  className="dail-number">
                    <span className="number">5</span>
                    <p className="alpha">JKL</p>
                </div>
                <div  className="dail-number">
                    <span className="number">6</span>
                    <p className="alpha">MNO</p>
                </div>
            </div>
            <div className="dailpad-card">
                <div  className="dail-number">
                    <span className="number">7</span>
                    <p className="alpha">PQRS</p>
                </div>
                <div className="dail-number">
                    <span className="number">8</span>
                    <p className="alpha">TUV</p>
                </div>
                <div  className="dail-number">
                    <span className="number">9</span>
                    <p className="alpha">WXYZ</p>
                </div>
            </div>
            <div className="dailpad-card">
                <div className="dail-number">
                    <span className="number">*</span>
                </div>
                <div className="dail-number">
                    <span className="number">0</span>
                    <p className="alpha">+</p>
                </div>
                <div className="dail-number">
                    <span className="number">#</span>
                </div>
            </div>
        </div>
    )
}

export default Dailpad