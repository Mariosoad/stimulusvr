
import { GiDeathStar } from 'react-icons/gi';
import data from './info.json'

import "./features.css"

export default function Features() {

    const dataText = data.boardText;

    const arrayBoard = [];
    if (dataText != null) {
        for (var j = 0; j < dataText.length; j++) {
            if (dataText[j] != null) {
                arrayBoard.push(
                    <div className='board-info-container'>
                        <GiDeathStar style={{ fontSize: "32px", color: "#878f9a" }} />
                        <h3>{dataText[j].tittle}</h3>
                        <p>{dataText[j].text}</p>
                    </div>
                )
            }
        }
    }
    return (
        <div className="container-info">
            <div className="child-container-info">
                <h2>Available for Desktop, Mobile, VR</h2>
                <div>
                    {arrayBoard}
                </div>
            </div>
        </div>
    )
}





















