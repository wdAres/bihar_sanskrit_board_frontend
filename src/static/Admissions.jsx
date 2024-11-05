import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import AboutLayout from '../components/uiBased/AboutLayout'

const Admissions = () => {
    return (
        <>
            <PageHeader
                title={'Admissions'}
                path={'Home / Admissions'}
            />
            <AboutLayout>
                <p className='universal_p'>Get bright future with us</p>
               <h1 className='universal_h1'>Admission Opens Now!</h1>
                <p className='universal_p'>Send mail at info@bssbpatna.ac</p>


            </AboutLayout>
        </>
    )
}

export default Admissions