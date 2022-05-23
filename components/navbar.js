import Logo from "./logo";
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    useColorMode
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";

const LinkItem = ({href, path, children}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('#131313','#e1e1e1')

    return (
        <NextLink href={href}>
            <Link 
            p={2}
            bg={active ? 'glassTeal' : undefined}
            color={active ? '#202023' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props 

    return (
        <Box
        position="fixed"
        as="nav"
        w="100%"
        bg={useColorModeValue('#e9e9e9','#2e2e2e')}
        style={{backdropFilter:'blur(10px)'}}
        zIndex={1}
        {...props}>
            <Container 
            display="flex" 
            p={2} 
            maxW="container.md" 
            wrap="wrap" 
            align="center" 
            justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo></Logo>
                    </Heading>
                </Flex>
                <Stack
                direction={{base: 'colum', md:'row'}}
                display={{base: 'none',md: 'flex'}}
                width={{base: 'full', md: 'auto'}}
                alignItems="center"
                flexGrow={1}
                mt={{base: 4, nmd:0}}
                >
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                    <LinkItem href="/contact" path={path}>
                        Contact
                    </LinkItem>
                </Stack> 

           <Box flex={1} align="right">
               <ThemeToggleButton/>
               <Box ml={2} display={{base: "inline-block", md:'none'}}></Box>
                    <Menu>
                        <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant="outline" aria-label="Options" _focus={{boxShadow: "none"}}/>
                    <MenuList style={{ background: useColorModeValue('#e9e9e9','#2e2e2e') }}>
                        <NextLink href="/" passHref>
                            <MenuItem as={Link} _focus={{boxShadow: "none"}} >
                                About
                            </MenuItem>
                        </NextLink>
                        <NextLink href="/projects" passHref>
                            <MenuItem as={Link} _focus={{boxShadow: "none"}}>
                                Projects
                            </MenuItem>
                        </NextLink>
                        <NextLink href="/contact" passHref>
                            <MenuItem as={Link} _focus={{boxShadow: "none"}}>
                                Contact
                            </MenuItem>
                        </NextLink>
                    </MenuList> 
                    </Menu> 
                </Box> 
            </Container>
        </Box>
    )
}

export default Navbar