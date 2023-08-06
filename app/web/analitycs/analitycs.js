import React from 'react'

import "./analitycs.css"

export default function Analitycs() {
    return (
        <div className='container-analitycs'>
            <div className='child-container-analitycs'>
                <div className='anim-analitycs'>
                    <div className='card-analitycs'>
                        <p>Learning Analytics are, in essence, the collection of data that is gathered while
                            learners are engaging in the Learning experience. Also consist of the analysis
                            and reporting of this information. Specifically concerning Learning, vital pieces
                            of data are recorded throughout the duration of the Learning course such as how
                            quickly they are progressing through a module, how many times have they have logged in,
                            whether they have participated in a discussion board, etc.
                        </p>
                    </div>
                    <div className='child-anim-analitycs'>
                        <lottie-player src="./analitycs.json" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
                    </div>
                </div>
                <div className='card-analitycs left'>
                    <p> At the same time,
                        Analytics also offer online facilitators and instructors a comprehensive look at how
                        a learner is performing, if he/she may need additional help with a particular lesson
                        or subject, and even if the learner is likely to pass or not an Learning course.
                        Such data can then be used to make educational analysis and predictions that help
                        to determine which learning materials are appropriate, useful or irrelevant for the
                        learners.
                    </p>
                </div>
            </div>
        </div>
    )
}
