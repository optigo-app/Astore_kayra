import React from 'react'
import './SmilingRock.css'
import { storImagePath } from '../../../../Utils/globalFunctions/GlobalFunction'

export default function SmilingRock() {
    return (
        <div style={{ paddingBlock: '5%' }} className='smilingPAgeMain'>
            <p className='smilingTitle'>The Kayra's Difference</p>
            <div className='smilingRock'>
                <div className='smilingRockBox'>
                    <div className='smilingRockBoxSub1'>
                        <img className="simple-card__img " src={`${storImagePath()}/images/HomePage/TheDifference/TheDifference1.webp`} alt="" />
                    </div>
                    <div className='smilingRockBoxSub2'>
                        <p className='smilingBoxName'>Natural Diamond & jewellery</p>
                        <p className='learnMore'>LEARN MORE</p>
                    </div>
                </div>
                <div className='smilingRockBox'>
                    <div className='smilingRockBoxSub1'>
                        <img class="simple-card__img " src={`${storImagePath()}/images/HomePage/TheDifference/TheDifference2.webp`} alt="" />
                    </div>
                    <div className='smilingRockBoxSub2'>

                        <p className='smilingBoxName'>1% of each purchase goes to your choice of charity</p>
                        <p className='learnMore'>LEARN MORE</p>
                    </div>

                </div>
                <div className='smilingRockBox'>
                    <div className='smilingRockBoxSub1'>
                        <img class="simple-card__img " src={`${storImagePath()}/images/HomePage/TheDifference/TheDifference3.webp`} alt="" />
                    </div>
                    <div className='smilingRockBoxSub2'>

                        <p className='smilingBoxName'>Laser inscribed diamonds with Kayra logo</p>
                        <p className='learnMore'>LEARN MORE</p>
                    </div>

                </div>
                <div className='smilingRockBox'>
                    <div className='smilingRockBoxSub1'>
                        <img class="simple-card__img "src={`${storImagePath()}/images/HomePage/TheDifference/TheDifference4.webp`} alt="" />
                    </div>
                    <div className='smilingRockBoxSub2'>
                        <p className='smilingBoxName'>ECG+ Certified Brand Butterfly Mark</p>
                        <p className='learnMore'>LEARN MORE</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
