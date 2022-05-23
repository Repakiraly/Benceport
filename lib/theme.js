import { extendTheme, MenuList } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            bg: mode('#fcfcfc','#131313')(props)
        }
    })
}

const components = {
    Heading: {
        variants: {
            'section-title': {
                textDecoration: 'underline',
                fontSize: 20,
                textUnderlineOffset: 6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            },

            'page-title': {
                fontSize: 20,
                marginTop: 4,
                marginBottom: 4
            }
        }
    },

    Link: {
        baseStyle: props => ({
            color: mode('#131313','#e1e1e1')(props),
            textUnderlineOffset:3
        })
    }
}

const fonts = {
    heading: "'Jost'",
    body:"'Jost'"
}

const colors = {
    glassTeal: '#fcfcfc'
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: true
}

const theme = extendTheme({
    config,styles,components,colors,fonts
})

export default theme