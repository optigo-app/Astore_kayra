import React, { useEffect, useState } from 'react'
import { storImagePath } from '../../../Utils/globalFunctions/GlobalFunction';
import Footer from '../home/Footer/Footer';

export default function TermsPolicy() {

    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        fetch(`${storImagePath()}/html/terms.html`)
            .then((response) => response.text())
            .then((html) => {
                setHtmlContent(html);
                console.log('htmlssssssss', html);
            })
            .catch((error) => {
                console.error('Error fetching the HTML file:', error);
            });
    }, []);

    return (
        <div style={{
            backgroundColor: '#aab4b7',
            paddingTop: '110px'
        }}>
            <div className='daimondsEveryAbout'>
                <div style={{ marginInline: '25%', paddingTop: '50px' }}>
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </div>
                <Footer />
            </div>
        </div>
    )
}
