import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import iconRecycle from './icons/iconRecycle'
import iconSecurity from './icons/iconSecurity'
import iconTag from './icons/iconTag'

export default function Features() {
  return (
    <Box 
    m="auto" 
    maxW={'960px'} 
    mt={'56px'}
    // pl={'23px'}
    >
        <Flex direction={{ base: "column", lg: "row" }} alignItems="center">
            <HStack pt={{ base: "20px" }} pb={{ base: "20px" }}  mx={{ lg:'20px'}}>
                <Icon as={iconSecurity}></Icon>
                <Text w={'240px'} px={{ lg: "10px" }} fontWeight="bold">30 days money back Guarantee</Text>
            </HStack>
            <HStack pt={{ base: "20px" }} pb={{ base: "20px" }}  mx={{ lg:'20px'}}>
                <Icon as={iconTag}></Icon>
                <Text w={'240px'} pl={{ lg:"10px" }} pr={{lg:"85px" }} fontWeight="bold">No setup fees 100% hassle-free</Text>
            </HStack>
            <HStack pt={{ base: "20px" }} pb={{ base: "20px" }}  mx={{ lg:'20px'}}>
                <Icon as={iconRecycle}></Icon>
                <Text w={'240px'} pl={{ lg:"10px" }} pr={{ lg:"20px" }} fontWeight="bold">No monthly subscription Pay once and for all</Text>
            </HStack>
        </Flex>
    </Box>
  )
}
