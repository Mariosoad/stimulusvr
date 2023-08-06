
import data from './plan.json'
import { BiCheck } from 'react-icons/bi';
import { MdClose } from 'react-icons/md';

import "./plan.css"

export default function Plan() {

    const dataPlan = data.boardPlan;

    const arrayBoardPlan = [];
    let aosDuration = 0;
    let aosDelay = 0;
    if (dataPlan != null) {
        for (var j = 0; j < dataPlan.length; j++) {
            if (dataPlan[j] != null) {
                aosDuration = `1${[j]}00`;
                aosDelay = `${[j]}00`;
                arrayBoardPlan.push(
                    <div className='board-plan-container' data-aos="fade-up" data-aos-delay={aosDelay} data-aos-duration={aosDuration}>
                        <p className='plan-nav'>{dataPlan[j].nav}</p>
                        <div className='plan-header'>
                            <div className='child-plan-header'>
                                <h3>{dataPlan[j].header.price}</h3>
                                <p>{dataPlan[j].header.month}</p>
                            </div>
                            <p className='details'>{dataPlan[j].header.detail}</p>
                        </div>
                        <div className='plan-options' >
                            {dataPlan[j].options.map((item, index) => (
                                <div className='child-plan-options' key={index}>
                                    {item.state == true ? <BiCheck className='check-option' /> : <MdClose className='close-option' />}
                                    <p>{item.text}</p>
                                </div>
                            ))}
                        </div>
                        <a className='plan-button' href={dataPlan[j].button.url}> {dataPlan[j].button.text} </a>
                    </div>
                )
            }
        }
    }

    return (
        <div className='container-plan'>
            <div className='child-container-plan'>
                <h2>Select your plan of your choice, no need to pay extra money</h2>
                <div className='board-plan'>
                    {arrayBoardPlan}
                </div>
            </div>
        </div>
    )
}
