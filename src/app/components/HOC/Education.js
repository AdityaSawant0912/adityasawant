import React from 'react'
import Section from '../Section'
import Heading from '../Heading'
import Item from '../Item'
import Detail from '../Detail'

const Education = () => {
    return (
        <Section>
            <Heading>Education</Heading>
            <Item
                date={'Aug 2025 - Exp. Dec 2026'}
                title={'University At Buffalo (GPA - 3.83)'}
                location={'Buffalo, New York'}
                titleLink={'https://www.buffalo.edu/'}
            >
                <Detail>
                    <strong> Relevant Courses</strong>:
                    Database System,
                    Operating System,
                    Analysis of Algorithms,
                    Data Intensive Computing.
                </Detail>

            </Item>
            <Item
                date={'Aug 2020 - Jun 2024'}
                title={'Shah and Anchor Kuttchi Engineering College - University of Mumbai'}
                location={'Chembur, Mumbai'}
                titleLink={'https://www.sakec.ac/'}
            >
            </Item>
        </Section>
    )
}

export default Education