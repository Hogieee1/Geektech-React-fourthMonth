import icon from './img/bag-icon.svg'

function Cards() {
    return (
        <div className="card">
        <div className="card-img">
            <img src={icon} alt="bag-img"/>
        </div>
            <div className="card-inner">
                <h3>Sample Headline</h3>
                <p><i>Sample text. Click to select the box. Click again or double click to start editing the text</i></p>
                <span>$250</span>
            </div>
        </div>
    )
}


export default Cards