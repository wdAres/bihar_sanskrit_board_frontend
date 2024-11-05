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
                <h1 className='universal_h1'>Courses</h1>
                <p className="universal_p">1) 8th Class Examination</p>
<p className="universal_p">2) 10th Class Secondary School Examination</p>
<p className="universal_p">3) 12th Class Senior Secondary School Examination</p>
<p className="universal_p">4) Diploma in Education</p>
<p className="universal_p">5) Diploma in Sanskrit Language</p>
<p className="universal_p">6) All Other Diploma Programs</p>



            </AboutLayout>
        </>
    )
}

export default Courses