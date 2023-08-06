
import data from './plan.json'
import { BsCheck } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';

import "./plan.css"

export default function Plan() {

    const dataPlan = data.boardPlan;

    const arrayBoardPlan = [];
    if (dataPlan != null) {
        console.log(dataPlan)
        for (var j = 0; j < dataPlan.length; j++) {
            if (dataPlan[j] != null) {
                arrayBoardPlan.push(
                    <div className='board-plan-container' data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                        <p>{dataPlan[j].nav}</p>
                        <div>
                            <h3>{dataPlan[j].header.price}</h3>
                            <p>{dataPlan[j].header.month}</p>
                            <p>{dataPlan[j].header.detail}</p>
                        </div>
                        {dataPlan[j].options.map((item, index) => (
                            <div className='container-options' key={index}>
                                {item.state == true ? <BsCheck /> : <GrFormClose />}
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                )
            }
        }
    }

    return (
        <div>
            <div>
                {/* 1do Plan */}
                <div>
                    {arrayBoardPlan}
                </div>
                {/* 2do Plan */}
                <div>

                </div>
                {/* 3ero Plan */}
                <div>
                    <p>hola plan</p>
                </div>
            </div>
        </div>
    )
}
