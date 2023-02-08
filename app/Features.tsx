import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import iconRecycle from './icons/iconRecycle'
import iconSecurity from './icons/iconSecurity'
import iconTag from './icons/iconTag'

export default function Features() {
  return (
    <Box mx="auto" w={'906px'} mt={'56px'}>
        <Flex mx="auto">
            <HStack>
                <Icon as={iconSecurity}></Icon>
                <Text w={'220px'} fontWeight="bold">30 days money back Guarantee</Text>
            </HStack>
            <HStack>
                <Icon as={iconTag}></Icon>
                <Text w={'140px'} fontWeight="bold">No setup fees 100% hassle-free</Text>
            </HStack>
            <HStack>
                <Icon as={iconRecycle}></Icon>
                <Text w={'200px'} fontWeight="bold">No monthly subscription Pay once and for all</Text>
            </HStack>
        </Flex>
    </Box>
  )
}
