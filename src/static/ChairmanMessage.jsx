import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import AboutLayout from '../components/uiBased/AboutLayout'

const ChairmanMessage = () => {
    return (
        <>
            <PageHeader
                title={'About Us'}
                path={'Home / Chairman\'s Message'}
            />
            <AboutLayout>
                <p className={'universal_p'}>
                BIHAR SANSKRIT SHIKSHA BOARD has established to promote Secondary & Senior Secondary Education with motto to achieve complete literacy in India. EDUCATION FOR ALL is a basic aims of the BIHAR SANSKRIT SHIKSHA BOARD. BIHAR SANSKRIT SHIKSHA BOARD associates & facilitate to other organizations of similar aims and objects to achieve AIMS of BSEKANT SPN UP. The BIHAR SANSKRIT SHIKSHA BOARD is providing freedom of subject choice to the student.
                    </p>
            </AboutLayout>
        </>
    )
}

export default ChairmanMessage