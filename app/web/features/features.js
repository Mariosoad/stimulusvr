
import { FaHandshake } from 'react-icons/fa';
import { HiIdentification } from 'react-icons/hi';
import { IoIosPeople } from 'react-icons/io';
import { BsHeadsetVr } from 'react-icons/bs';
import { TbArrowsShuffle } from 'react-icons/tb';
import { TbArrowsJoin } from 'react-icons/tb';
import { IoMdAnalytics } from 'react-icons/io';

import { BsWindows } from 'react-icons/bs';
import { SiOculus } from 'react-icons/si';

import data from './info.json'

import "./features.css"

const iconMap = {
    HiIdentification: HiIdentification,
    IoIosPeople: IoIosPeople,
    FaHandshake: FaHandshake,
    BsHeadsetVr: BsHeadsetVr,
    TbArrowsShuffle: TbArrowsShuffle,
    IoMdAnalytics: IoMdAnalytics,
};

export default function Features() {

    const dataText = data.boardText;
    const arrayBoard = [];
    if (dataText != null) {
        for (var j = 0; j < dataText.length; j++) {
            if (dataText[j] != null) {
                const IconComponent = iconMap[dataText[j].icon];
                arrayBoard.push(
                    <div className='board-feature-container' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                        {IconComponent && <IconComponent style={{ fontSize: "50px", color: "#878f9a" }} />}
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
                <div className='container-button'>
                    <a className='btn button-hero'
                        href="https://www.stimulusvr.com/StimulusLauncher_WindowsInstaller.exe">
                        <BsWindows /> Windows</a>
                    <a className='btn button-hero'
                        href="https://sidequestvr.com/app/1194/stimulus">
                        <SiOculus /> Meta Quest</a>
                </div>
            </div>
        </div>
    )
}
