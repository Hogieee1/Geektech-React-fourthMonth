import BlockLeft from "./components/mainBlock/blockLeft/BlockLeft"
import BlockRight from "./components/mainBlock/blockRight/BlockRight"
import './MainBlock.css'

function mainBlock() {
    return (
    <div className="mainBlock">
        <BlockLeft/>
        <BlockRight/>
    </div>
    )
}



export default mainBlock