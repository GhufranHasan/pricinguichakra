import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Header() {
  return (
    <Box 
    textAlign={{base: 'left', md: 'left', lg: 'center'}} 
    bg="#6B46C1"
    pl="23px" 
    pt="89px" 
    pb="198px" 
    color="white">
        <Heading>Simple pricing for your business</Heading>
        <Text pt="18px">Plans that are carefully crafted to suit your business.</Text>
    </Box>
  )
}
