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
                <p className={'universal_p'}>
                    The BIHAR SANSKRIT SHIKSHA BOARD is established for holding and conducting an examination at the end of the Secondary School stage, for prescribing course of studies for such examination and for carrying out such other objects and duties as may be considered necessary for the purpose as stated in the Act, Rules and Regulations of the Board.
                </p>
                <p className={'universal_p'}>
                    Normally every year the BIHAR SANSKRIT SHIKSHA BOARD conducts Annual Secondary School Examination in the month of February/March and Supplementary School Examination in the month of August/September on the basis of course/syllabus as prescribed by the state Government.
                </p>

                <p className={'universal_p'}>
                    Apart from the aforesaid Secondary School Examination, the Board also conducts departmental examinations (not on yearly basis) such as Diploma in Physical Education, Certificate in Physical Education and Teachers Training Examination on such terms and condition as laid down by the State Government.
                </p>
            </AboutLayout>
        </>
    )
}

export default About