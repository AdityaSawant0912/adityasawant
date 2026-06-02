import React from 'react'
import Section from '../Section'
import Heading from '../Heading'
import Item from '../Item'
import Detail from '../Detail'

function Projects() {
    return (
        <Section>
            <Heading>Projects</Heading>
            <Item
                date={'2023 - Present'}
                title={'S3A-Net: Spatial-Spectral Self-Attention Network for Few-Shot Learning-Based Hyperspectral Image Classification'}
                location={'Fourth Year Engineering Major Project'}
            >
                This paper introduces the S3A-Net, a Spatial-Spectral Self-Attention Network, for few-shot learning in hyperspectral image classification. Developed by Dr. Manimala Mahato and Prof. Biplab Banerjee, the network utilizes self-attention mechanisms to capture spatial and spectral features, improving classification accuracy. Incorporating few-shot learning enables accurate classification with limited labeled data, addressing challenges in hyperspectral data scarcity. Experimental results demonstrate the superiority of S3A-Net in accuracy and robustness, indicating its potential for remote sensing applications.
            </Item>

            <Item
                date={'2022 - 2023'}
                title={'Plan It'}
                location={'Third Year Engineering Minor Project'}
            >
                &quot;Plan-It&quot; offers a task management solution enhanced with Natural Language Processing (NLP) integration, simplifying personal and team-level task organization. It provides intuitive interfaces, collaboration features, and NLP-driven task suggestions. Challenges in NLP implementation, especially in interpreting user inputs accurately, were addressed through research, framework selection, training, testing, and iterative improvement. The outcome is a robust system ensuring effective goal achievement, data security, and privacy.
            </Item>
            <Item
                date={'2021 - 2022'}
                title={'Project Gallery'}
                location={'Second Year Engineering Minor Project'}
            >
                &quot;Project Gallery&quot; is a platform for SAKEC students to showcase their projects, aiding in project discovery and collaboration. Despite challenges in integrating third-party image hosting and ensuring session security, thorough research, iterative improvements, and testing led to successful implementation. The platform fosters innovation, collaboration, and knowledge sharing within the SAKEC community, enhancing the educational experience.
            </Item>

            <Item
                date={'2020 - 2023'}
                title={'Mini Projects in P5.JS'}
                titleLink={'https://adityasawant0912.github.io/P5JS-MiniProjects/'}
                location={'Personal Project'}
            >
                    I have embarked on numerous mini projects utilizing P5.js, encompassing a diverse array of visualizations and applications. These include creations such as <em>Ray Tracing 2D & 3D</em> and <em>Fractal Tree Animations</em>, as well as game remakes including <em>Flappy Bird</em>, <em>Game of Life</em>, <em>Minesweeper</em>, and <em>Snake</em>. Additionally, I&apos;ve delved into engineering concepts through projects such as implementing the <em>A* algorithm</em>, solving the <em>8 Queens problem</em>, exploring <em>K-means clustering</em>, and simulating <em>Epsilon NFA</em>. These projects not only bolstered my understanding of programming and visualization techniques but also provided practical insights into engineering principles covered in my syllabus.
            </Item>
            <Item
                date={'2018 - 2020'}
                title={'Green Light for Emergency Vehicles'}
                location={'NES Ratnam, Bhandup & WMJC, Mulund'}
            >
                Developed during my junior college years, my electronics project aimed to alleviate the issue of emergency vehicles getting stuck in traffic by implementing a transponder system that communicates with traffic signals to grant priority access. Utilizing Arduino technology paired with a Bluetooth module, the transponder facilitated communication between vehicles and signals, enabling the allocation of green lights to the designated lane or side. The project presented a practical solution to enhance emergency response efficiency and safety on the roads, with potential for further advancements using WiFi modules for internet connectivity.
            </Item>
            <Item
                date={'2018'}
                title={'Salary Management Software'}
                location={'Python-driven Salary Management: Calculating Compensation with Confidence'}
            >
                Creating a salary management software in Python was my inaugural full-fledged project, which I&apos;m immensely grateful for, as it provided a valuable learning experience. The software&apos;s primary function was to accurately calculate the salaries of employees. Under the guidance and opportunity presented by my aunt, I embarked on this endeavor, which allowed me to deepen my understanding of Python programming and software development principles. Throughout the project, I gained practical insights into various aspects of software engineering, including data handling, calculations, and user interface design. This project not only honed my technical skills but also instilled in me a sense of responsibility and dedication towards delivering a functional and efficient solution. I am thankful for the opportunity to undertake this project, as it marked a significant milestone in my journey as a software developer and provided a solid foundation for future endeavors in the field.
            </Item>

        </Section>
    )
}

export default Projects