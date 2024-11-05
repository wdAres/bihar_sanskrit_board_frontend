import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import AboutLayout from '../components/uiBased/AboutLayout'

const Objectives = () => {
    return (
        <>
            <PageHeader
                title={'About Us'}
                path={'Home / Objectives'}
            />
            <AboutLayout>
                <p className={'universal_p'}>
                    To help in establishing a proper environment, where students acquire knowledge and technical skills enabling them to be competitive globally.

                </p>
                <p className={'universal_p'}>

                    To acquaint the students with socio-cultural and economic ethos of the nation.
                    To develop a balanced perception of life.
                </p>


            </AboutLayout>
        </>
    )
}

export default Objectives