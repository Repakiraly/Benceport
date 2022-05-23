import { Container, Heading, Link} from "@chakra-ui/react";
import Section from "../components/section";
import {ExpSection, ExpYear} from '../components/experience'
import NextLink from 'next/link'

const Contact = () => {
    return (
       <Container>
        <Section delay={0.1} >
            <Heading as="h2" variant="section-title" mt={300} mb={6}>
                Contact Me
            </Heading>
            <ExpSection>
            <ExpYear>Phone Number (AT) </ExpYear> +43 677 64822973
            </ExpSection>
            <ExpSection>
                <ExpYear>Phone Number (MY)</ExpYear> +60 11 29879045
            </ExpSection>
            <ExpSection>
                <ExpYear>Email</ExpYear> b.repasi@gmx.at
            </ExpSection>
            <ExpSection>
                <ExpYear>GitHub</ExpYear>
                <NextLink href="https://github.com/Repakiraly" passHref>
                    <Link  m={1}>https://github.com/Repakiraly</Link>
                </NextLink>
            </ExpSection>
            <ExpSection>
                <ExpYear>LinkedIn</ExpYear> 
                <NextLink href="https://www.linkedin.com/in/bence-repasi/" passHref>
                    <Link  m={1}>https://www.linkedin.com/in/bence-repasi/</Link>
                </NextLink>
            </ExpSection>

        </Section>
       </Container>  
    )
}

export default Contact;