import { Container,Heading,SimpleGrid} from "@chakra-ui/react";
import Section from "../components/section";
import { ProjectGridItem } from "../components/grid-item";
import thumbplaceholder from '../public/images/projects/placeholder_3.jpg'

const Projects = () => {
    return (
       <Container>

                <Heading as="h2" fontSize={20} mt={12} mb={6}>
                    Projects
                </Heading>
        
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.1}>
                    <ProjectGridItem id="artinft" title="ArtiNFT" thumbnail={thumbplaceholder}>
                        An NFT marketplace for music and visual arts.
                    </ProjectGridItem>
                </Section>


                <Section delay={0.2}>
                    <ProjectGridItem id="nbapower" title="NBA Power Rankings" thumbnail={thumbplaceholder}>
                        Ranking of all 30 NBA Teams using advanced analytics.
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>

       </Container>  
    )
}

export default Projects;