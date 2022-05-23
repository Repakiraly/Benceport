import { IconButton, useColorMode, useColorModeValue} from '@chakra-ui/react'
import { SunIcon, MoonIcon} from '@chakra-ui/icons'

const ThemeToggleButton = () => {
    const {toggleColorMode} = useColorMode()

    return(
       <IconButton aria-label='Toggle theme'
       _focus={{boxShadow: "none"}}
       icon={useColorModeValue(<MoonIcon/>,<SunIcon/>)}
       onClick={toggleColorMode}
       variant='ghost'>
       </IconButton> 
    )
}

export default ThemeToggleButton;