import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
font-weight: bold;
font-size: 20px;
display: inline-flex;
align-items: center;
vertical-align: middle;
height: 30px;
line-height: 30px;
padding: 10px;

`

const Logo = () => {
    const cubeImg=`/images/cube${useColorModeValue('','W')}.png`

    return(
       <Link href="/">
           <a>
               <LogoBox>
                <Image src={cubeImg} alt="logo" width={32} height={32}>
                </Image>
                <Text color={useColorModeValue('#131313','#e1e1e1')}
                fontFamily='Jost'
                fontWeight="bold"
                ml={2}>
                    Bence Repasi
                </Text>
               </LogoBox>
           </a>
       </Link> 
    )

}

export default Logo

