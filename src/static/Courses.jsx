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
            </AboutLayout>
        </>
    )
}

export default Courses