import React from 'react'
import classes from './About.module.css'
import PageHeader from '../components/PageHeader/PageHeader'
import AboutLayout from '../components/uiBased/AboutLayout'
const About = () => {
    return (
        <>
            <PageHeader
                title={'About Us'}
                path={'Home / About'}
            />
            <AboutLayout>
                <h1 className="universal_h1">General Information </h1>
                <p className={'universal_p'}>
                The Bihar Sanskrit Shiksha Board was established for the promotion and propagation of the Sanskrit language. It operates approved Sanskrit schools from Class 1 to Class 10. Examinations for Classes 1 to 9 are conducted at the school level. The examinations for secondary schools are conducted at the board level, which is called the Madhyama (Class 10) annual examination. The control and administrative office for the Madhyama examination and Sanskrit schools from Class 1 to 10 under the board is the Bihar Sanskrit Shiksha Board. The curriculum and syllabus for these schools are determined by the board with the permission of the state government.

                </p>
                <p className='universal_p'>
                Every year, based on the curriculum set by the Bihar Sanskrit Shiksha Board/state government, the annual secondary examination is held in February/March. The Bihar Sanskrit Shiksha Board was established to conduct secondary school examinations, to determine the curriculum for such examinations, and to fulfill other objectives and duties deemed necessary for the purpose as mentioned in the board's Act, rules, and regulations.

                </p>
                <p className='universal_p'>
                Higher secondary and other higher-level examinations are not conducted by the Bihar Sanskrit Shiksha Board.
                </p>
                <p className="universal_p">
                Check COBSE Membership,
                Recognized by COBSE.
                </p>
                <a className='universal_a' href="https://www.cobse.org.in/" target='_blank'>https://www.cobse.org.in/</a>
                <p className='universal_p'></p>
                <a className='universal_a' href="cbose.pdf" download={true} target='_blank'>Download File</a>
            </AboutLayout>
        </>
    )
}

export default About