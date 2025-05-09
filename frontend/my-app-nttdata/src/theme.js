

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    components: {
        Button: {
            variants: {
                'style-button-dashboard': {
                    bg: '#242424',
                    color: 'black',
                    borderRadius: 'full',
                    border: '1px solid gray.400', // Añadimos un borde plomo
                    textAlign: 'left', // Alineamos el texto a la izquierda
                    _hover: {
                        bgGradient: 'linear(to-r, purple.500, blue.500)', // Fondo degradado al hacer hover
                    },
                    _active: {
                        bg: 'purple.700',
                    },
                },
                

                
            },
        },
    },
});

export default theme;



