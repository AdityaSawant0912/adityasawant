import React from 'react'
import Section from '../Section'
import Heading from '../Heading'
import Contact from '../Contact'
function Contacts() {
    return (
        <Section>
            <Heading>Contact</Heading>
            <Contact label="Email" href="mailto:arsawant09@gmail.com">arsawant09@gmail.com</Contact>
            <Contact label="Github" href="https://github.com/AdityaSawant0912">AdityaSawant0912</Contact>
            <Contact label="Linkedin" href="https://www.linkedin.com/in/adityasawant09/">adityasawant09</Contact>
            <Contact label="X (Twitter)" href="https://www.x.com/in/adzzhere/">adzzhere</Contact>
            <Contact label="Resume" href="/Aditya Sawant Resume.pdf">Aditya Sawant</Contact>
        </Section>
    )
}

export default Contacts