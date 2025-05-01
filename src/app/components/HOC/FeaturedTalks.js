import React from 'react'
import Section from '../Section'
import Heading from '../Heading'
import Item from '../Item'

function FeaturedTalks() {
    return (
        <Section>
            <Heading>Featured Talks</Heading>
            <Item date={'05 Aug 2023'} title={'Mastering the Web'} titleLink={'https://www.sakec.ac.in/csi-sakec/mastering-the-web/'} location={'SAKEC, Mumbai'} >
                In this event I taught HTML, CSS, JavaScript, Node.js, and Database connectivity for web app development, promoting hands-on learning and motivating junior students to refine skills. Attendees presented Mini Projects utilizing web technologies.
            </Item>
            <Item date={'20 Jan 2023'} title={'Level Up Creative Coding with P5.js'} titleLink={'https://www.sakec.ac.in/csi-sakec/level-up-creative-coding-with-p5-js/'} location={'SAKEC, Mumbai'} >
                The session I conducted covered P5.js and JavaScript basics, supplying materials and setup files. Topics included variables, functions, loops, and shape manipulation, with participants creating projects like designs and wall art.
            </Item>
        </Section>
    )
}

export default FeaturedTalks