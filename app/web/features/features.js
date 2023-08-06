
import { GiDeathStar } from 'react-icons/gi';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import data from './info.json'

import "./features.css"

export default function Features() {

    const dataText = data.boardText;

    const arrayBoard = [];
    if (dataText != null) {
        for (var j = 0; j < dataText.length; j++) {
            if (dataText[j] != null) {
                arrayBoard.push(
                    <div className='board-feature-container' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                        <GiDeathStar style={{ fontSize: "32px", color: "#878f9a" }} />
                        <h3>{dataText[j].tittle}</h3>
                        <p data-aos="fade-up" data-aos-delay="110" data-aos-duration="800">{dataText[j].text}</p>
                    </div>
                )
            }
        }
    }
    return (
        <div className="container-feature">
            <div className="child-container-feature">
                <h2>Available for Desktop, Mobile, VR</h2>
                <div>
                    {arrayBoard}
                </div>
                <a className='btn button-hero'>
                    TRY OUR DEMO <IoIosArrowDroprightCircle style={{ fontSize: "22px" }} />
                </a>
            </div>
        </div>
    )
}





















