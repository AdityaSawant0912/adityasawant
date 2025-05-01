import React from 'react'
import Section from '../Section'
import Heading from '../Heading'
import Item from '../Item'
import Detail from '../Detail'

function WorkExperices() {
    return (
        <Section>
            <Heading>Work Experience</Heading>
            <Item
                date={'Sept 2024 - June 2025'}
                title={'Associate Software Development Engineer at CarTrade Tech'}
                location={'Vashi, Navi Mumbai'}
                titleLink={'https://www.cartradetech.com/'}
            >
                <>
                    <Detail>
                        As a dedicated Frontend Developer, I bring a comprehensive skill set encompassing frontend technologies like JavaScript, ReactJS, Redux, HTML/CSS, and backend solutions using .NET, Node.js, and MySQL. My focus lies in building robust, high-performance web applications. I have successfully developed scalable, reusable component libraries that streamline development cycles. A key achievement includes optimizing the extensive Oxygen Design System, comprising over 68 UI components, to significantly improve accessibility and performance for a user base numbering in the millions.
                    </Detail>

                    <Detail>
                        My technical contributions extend to enhancing website performance through strategic DOM optimizations, implementing lazy loading, and refining image rendering processes. I am proactive in improving development efficiency by automating workflows, having created scripts for tasks such as unused CSS detection, import management, and build optimizations. Furthermore, I possess strong experience in implementing critical business campaigns with vanilla JavaScript, ensuring cross-browser compatibility and peak performance.
                    </Detail>

                    <Detail>
                        I have led the development of diverse features, from dynamic UI elements to responsive micro-sites and complex product workflows. Notably, I designed and implemented a modular Template Engine to facilitate efficient ad generation. Collaboration is central to my approach; I work closely with design, product, and engineering counterparts to ensure our applications are not only high-performing and scalable but also maintainable long-term, emphasizing strong system design principles.
                    </Detail>
                </>
            </Item>
            <Item
                date={'2024'}
                title={'Full stack Web Developer Intern at The Kutchi Printers & Allied Industries Association'}
                location={'Thane & Remote'}
                titleLink={''}
            >
                I developed a comprehensive web portal for an association of printers, designed to streamline inquiry management from clients by categorizing inquiries into specific printing categories and efficiently distributing them to association members specializing in corresponding areas. The system facilitated client inquiry submission through a user-friendly interface, with inquiries promptly routed to members via email notifications. Additionally, the portal featured strategically placed advertisements to promote member businesses. Its intuitive interface, scalability, and flexibility ensured efficient operations and the ability to adapt to evolving needs, ultimately enhancing inquiry response times and providing increased visibility and opportunities for association members within the industry.
            </Item>
            <Item
                date={'2023'}
                title={'Full stack Web Developer Intern working under Mr. Vinayak Shastri'}
                location={'Mumbai & Remote'}
            >
                My team and I collaborated on developing an Agenda Builder website tailored for event management purposes. Recognizing the critical need for seamless communication within remote teams organizing events, we prioritized creating a platform that facilitates real-time interaction and organization. The website offers a user-friendly interface where team members can collaboratively manage and organize different sections of the event. Key features include drag-and-drop functionality, allowing for effortless rearrangement and customization of event elements. Additionally, the platform integrates various tools and resources to streamline event planning, such as scheduling, task assignment, and document sharing capabilities. By providing a centralized hub for team communication and event coordination, the Agenda Builder significantly enhances efficiency and productivity in the event management process. Moreover, the website&apos;s intuitive design promotes ease of use, ensuring that even non-technical team members can effectively contribute to the planning and execution of successful events.
            </Item>
            <Item
                date={'2022-2023'}
                title={'Full stack Web Developer Intern at Indian Development Foundation'}
                location={'Mumbai & Remote'}
                titleLink={''}
            >
                My team and I collaborated to develop a website for the Indian Development Foundation (IDF), aimed at managing Balgurukul (small school) operations, including teacher, student, and management interactions. We implemented role-based logins for teachers, students, and administrators to streamline access. The primary challenge we addressed was the grading process, which previously relied on manual input through Google Forms, leading to redundant data entry and inefficiencies. To mitigate this issue, we designed an intuitive user interface that simplified the grading process significantly, alleviating the burden on teachers and enhancing overall efficiency. By automating and optimizing the grading workflow, we improved the educational experience for both teachers and students while enhancing the operational effectiveness of IDF&apos;s Balgurukul program.
            </Item>

        </Section>
    )
}

export default WorkExperices