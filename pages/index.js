import { Container, Box, Heading,Image, Link} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import {ExpSection, ExpYear} from '../components/experience'
import NextLink from 'next/link'

const Page = () => {
    return(
     <Container >
         <Box borderRadius="lg" bg="#A2A19F" p={3} mt={10} mb={6} align="center">
             Hi, I am a software developer from Austria!
         </Box>

         <Box display={{md:'flex'}}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Bence Repasi
                </Heading>
                <p>ML + Blockchain + Microcontrollers</p>
            </Box>
            <Box flexShrink={1} mt={{base: 4, md:0}} ml={{md: 6}} align="center" >
                <Image 
                src="/images/64_bence.png" 
                maxWidth="125px" 
                alt="Profile Picture"
                borderColor="#fcfcfc" 
                borderStyle="solid" 
                borderWidth={1}
                />
            </Box>
         </Box>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                About me
            </Heading>
            <Paragraph>My work revolves around the intersection of software testing and data science at a medical device development company. In my free time / by night I use my time to pick up new skills. Everyday is a chance to learn something exciting! </Paragraph>
        </Section>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
                Experience
            </Heading>
            <ExpSection>
                <ExpYear>2019</ExpYear> Internship at
                <NextLink href="https://dentarttechnik.hu/" passHref>
                    <Link fontWeight="bold" m={1}>Dent-Art Technik Kft.</Link>
                </NextLink>
                I worked on a Raspberry Pi controlled warehouse solution. 
            </ExpSection>
            <ExpSection>
                <ExpYear>2020</ExpYear> Graduated as BSc Mechatronics/Robotics from the University of Applied Sciences Technikum Vienna (FH Technikum Wien)
            </ExpSection>
            <ExpSection>
                <ExpYear>2021 to present</ExpYear> Working as a Software Engineer at 
                                <NextLink href="https://www.erbamannheim.com/" passHref>
                    <Link fontWeight="bold" m={1}>Erba Mannheim</Link>
                </NextLink>
                in Graz. My main tasks are software testing (automated and manual) and support of the data science department by creating tools and applications.
            </ExpSection>
        </Section>
        <Section delay={0.1}>
            <Heading as="h3" variant="section-title">Skillset</Heading>
            <ExpSection>
                <ExpYear>Coding</ExpYear> C , Python
            </ExpSection>
            <ExpSection>
                <ExpYear>Web</ExpYear> ReactJS
            </ExpSection>
            <ExpSection>
                <ExpYear>Machine Learning</ExpYear> Pytorch , Scikit-learn , Pandas
            </ExpSection>
            <ExpSection>
                <ExpYear>Blockchain</ExpYear> Solidity , Brownie
            </ExpSection>
            <ExpSection>
                <ExpYear>Languages</ExpYear> Hungarian , English , German 
            </ExpSection>

        </Section>
     </Container>
        
    )
}

export default Page