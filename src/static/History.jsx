import React from 'react'
import PageHeader from '../components/PageHeader/PageHeader'
import AboutLayout from '../components/uiBased/AboutLayout'

const History = () => {
    return (
        <>
            <PageHeader
                title={'About Us'}
                path={'Home / History'}
            />
            <AboutLayout>
            {/* <h1 className="universal_h1">History of Sanskrit Education in Bihar</h1> */}

<h2 className="universal_h1">Before 1960</h2>
<p className="universal_p">Before 1960, there was no Act regarding Sanskrit education in the State of Bihar. However, provisions were made in the Bihar Education Code for this purpose. They are as follows:</p>

<h3 className="universal_h1">Recognised Sanskrit Institutions are of two kinds:</h3>
<ul className="history_ul">
    <li className="history_li universal_p">Sanskrit Vidyalayas (Tols): These institutions prepare candidates for Prathma, Madhyama, Shastri, and Acharya's examinations.</li>
    <li className="history_li universal_p">Primary Sanskrit Schools: These schools teach Sanskrit in addition to the departmental and vernacular curriculum, up to the lower or upper primary section.</li>
</ul>

<p className="universal_p">The control of vidyalayas was exercised through the Bihar Sanskrit Association, which conducted their examinations. This Association consisted of a convocation and a council called, respectively, the Sanskrit Parishad and Sanskrit Council, each body having the same President and Secretary. The Sanskrit Parishad was a larger body consisting of 55 members, whereas the Sanskrit Council was a smaller one consisting of 16 members.</p>

<h3 className="universal_h1">Functions of the Council:</h3>
<ul className="history_ul">
    <li className="history_li universal_p">Conduct Sanskrit examinations.</li>
    <li className="history_li universal_p">Issue titles and certificates signed by the President and Secretary.</li>
    <li className="history_li universal_p">Advise on various matters regarding Sanskrit education, such as:
        <ul className="history_ul">
            <li className="history_li universal_p universal_p">The courses of studies for various Sanskrit examinations and classes.</li>
            <li className="history_li universal_p universal_p">Rules for Sanskrit examinations.</li>
            <li className="history_li universal_p universal_p">General matters affecting Sanskrit education.</li>
            <li className="history_li universal_p universal_p">Recognition of Tols and proposals for Government rules regarding their recognition.</li>
        </ul>
    </li>
</ul>

<h3 className="universal_h1">Recognition Rules:</h3>
<p className="universal_p">The rules were framed for the recognition of Sanskrit vidyalayas. No vidyalaya was considered eligible to present candidates at examinations of the Sanskrit Association unless it was recognized by the Association. A vidyalaya seeking recognition had to submit an application in the prescribed form.</p>

<h2 className="universal_h1">After 1960</h2>

<h3 className="universal_h1">Sanskrit University Act of 1960:</h3>
<p className="universal_p">In 1960, the Caineshwai Singh Sanskrit Vishwavidyala Act came into force, redefining the Board of Sanskrit Education (Sanskrit Shiksha Parishad), which was constituted by the State to exercise control and supervision over institutions other than Tols imparting education up to Madhyama. Tol was defined as a recognized Sanskrit institution preparing candidates for Prathma, Madhyama, Shastri, Acharya, or any other degree under Section V4(1) of the Act. The authority was given power to give degrees and hold examinations.</p>

<p className="universal_p">The university was given the power of affiliation but no power of recognition. The Senate and Syndicate of the university were also not given the power of recognition of Sanskrit schools up to Madhyama standard.</p>

<h3 className="universal_h1">Powers and Duties of the Board of Sanskrit Education:</h3>
<p className="universal_p">Under Section 244 of the Act, the powers and duties of the Bihar Sanskrit Association were to be exercised by the university or the Board of Sanskrit Education as the Government might decide by order in writing. The university was never given the authority to grant recognition to Sanskrit institutions up to Madhyama standard. This power always remained with the Bihar Sanskrit Association. By this very section, the Bihar Sanskrit Association was dissolved, and its powers and duties were to be exercised and performed by the Board of Sanskrit Education.</p>

<h2 className="universal_h1">Bihar State Universities Act of 1976</h2>
<p className="universal_p">With the operation of the Bihar State Universities Act 23 of 1976, the jurisdiction of the Sanskrit University was confined to colleges imparting education above Madhyama standard. This Act repealed the earlier Sanskrit University Act 21 of 1965.</p>

<h2 className="universal_h1">Bihar Sanskrit Shiksha Board</h2>
<p className="universal_p">Under the Bihar Sanskrit Shiksha Board Ordinance, the Bihar Sanskrit Shiksha Board was constituted. This Ordinance has now been converted into Act 31 of 1982. The Act provides for the establishment of an Autonomous Board for the development and better supervision of Sanskrit education up to the Madhyama standard.</p>

<h3 className="universal_h1">Powers of the Board:</h3>
<ul className="history_ul">
    <li className="history_li universal_p">Grant recognition to Sanskrit schools and Tols up to Madhyama standard with the prior approval of the State Government.</li>
    <li className="history_li universal_p">Withdraw recognition of recognized Sanskrit institutions.</li>
    <li className="history_li universal_p">Maintain a register of recognized Sanskrit schools and Tols.</li>
    <li className="history_li universal_p">Institute and conduct different Sanskrit examinations up to Madhyama standard.</li>
    <li className="history_li universal_p">Publish results of the examinations instituted by the Board and award prizes and scholarships.</li>
    <li className="history_li universal_p">Grant permission to candidates to appear at the examination up to Madhyama standard instituted by the Board and to refuse or withdraw such permission.</li>
</ul>

            </AboutLayout>
        </>
    )
}

export default History