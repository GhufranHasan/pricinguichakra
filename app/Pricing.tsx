import React from 'react'
import { Box, Flex, Heading, Text, Button, HStack, Icon } from '@chakra-ui/react'
import checkMarkIcon from './icons/checkMarkIcon'

export default function Pricing() {
  return (
    // Main Box Container starts 
    <Box 
    w={'994px'} 
    h={'319px'} 
    mt={'-150px'} 
    mx="auto" 
    bg={'white'} 
    borderRadius={'12px'} 
    overflow={'hidden'} 
    boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'}
    >
        <Flex>
            {/* Left Box */}
            <Box w={'378px'} bg={'#652cd32e'} p="48px" textAlign={'center'}>
                <Text fontWeight={'bold'} fontSize={'24px'}>Premium PRO</Text>
                <Heading mt={'16px'} fontSize={'60px'}>$329</Heading>
                <Text mt={'8px'} fontSize={'18px'}>billed just once</Text>
                <Button w={'282px'} mt={'24px'} bg={'#805AD5'} color={'white'}>Get Started</Button>
            </Box>
            {/* Right Box */}
            <Box w={'616px'} p="48px">
                <Text mb={'8px'}>Access these features when you get this pricing package for your business.</Text>
                <HStack mt={'16px'}>
                    <Icon as={checkMarkIcon}></Icon>
                    <Text>International calling and messaging API</Text>
                </HStack>
                <HStack mt={'16px'}>
                    <Icon as={checkMarkIcon}></Icon>
                    <Text>Additional phone numbers</Text>
                </HStack>
                <HStack mt={'16px'}>
                    <Icon as={checkMarkIcon}></Icon>
                    <Text>Automated messages via Zapier</Text>
                </HStack>
                <HStack mt={'16px'}> 
                    <Icon as={checkMarkIcon}></Icon>
                    <Text>24/7 support and consulting</Text>
                </HStack>
            </Box>
        </Flex>
    </Box>
    // Main Box Container ends
  )
}
