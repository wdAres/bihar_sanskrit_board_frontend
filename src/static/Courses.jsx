import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import AboutLayout from '../components/uiBased/AboutLayout'

const Courses = () => {
    return (
        <>
            <PageHeader
                title={'Courses'}
                path={'Home / Courses'}
            />
            <AboutLayout>
                <h1 className='universal_h1'>School Type</h1>
                <ul className="history_ul">
                    <li className="universal_p history_li">Primary (1-5)</li>
                    <li className="universal_p history_li">Primary & Middle (1-8)</li>
                    <li className="universal_p history_li">Middle (6-8)</li>
                    <li className="universal_p history_li">Secondary (9-10)</li>
                </ul>
                    <p className="universal_p"></p>
                <h1 className='universal_h1'>Syllabus</h1>
                <a className='universal_a' href="files/syllabus.pdf" download={true} target='_blank'>Download Syllabus</a>


            </AboutLayout>
        </>
    )
}

export default Courses