import * as React from 'react';
import {
  ArrowBackIcon,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
} from 'native-base';

export function Register({ navigation }) {
  return (      
    <VStack space={5} safeArea>
      <Box p="2">
        <ArrowBackIcon size="6" onPress={() => navigation.goBack()} />
      </Box>
      <Box p="2" w="90%" mx="auto">
        <Heading size="lg" color="coolGray.800" fontWeight="600">
          MetalSpree
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Sign up to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl isRequired>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              Email
            </FormControl.Label>
            <Input />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              Password
            </FormControl.Label>
            <Input type="password" />
          </FormControl>
          <FormControl isRequired>
            <FormControl.Label
              _text={{ color: 'muted.700', fontSize: 'xs', fontWeight: 500 }}>
              Confirm Password
            </FormControl.Label>
            <Input type="password" />
          </FormControl>
          <Button mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </VStack>
  );
}
