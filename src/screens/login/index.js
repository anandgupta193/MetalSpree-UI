import React, {useCallback} from 'react';
import { Platform, ToastAndroid } from "react-native";
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
} from 'native-base';

export function Login({ navigation }) {

  const onSignUpClicked = useCallback(() => {
    if (Platform.OS == 'android') {
      ToastAndroid.show("Please fill details!!", ToastAndroid.SHORT)
    }
    navigation.navigate('RegisterScreen', { name: 'Jane' })
  }, [navigation])

  return (
    <Box safeArea flex={1} p="2" py="8" w="90%" mx="auto">
      <Heading size="lg" fontWeight="600" color="coolGray.800">
        MetalSpree
      </Heading>
      <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
        Sign in to continue!
      </Heading>

      <VStack space={3} mt="5">
        <FormControl>
          <FormControl.Label
            _text={{
              color: 'coolGray.800',
              fontSize: 'xs',
              fontWeight: 500,
            }}>
            Email ID
          </FormControl.Label>
          <Input type="email"/>
        </FormControl>
        <FormControl>
          <FormControl.Label
            _text={{
              color: 'coolGray.800',
              fontSize: 'xs',
              fontWeight: 500,
            }}>
            Password
          </FormControl.Label>
          <Input type="password" />
          {/* <Link
            _text={{ fontSize: 'xs', fontWeight: '500', color: 'indigo.500' }}
            alignSelf="flex-end"
            mt="1">
            Forget Password?
          </Link> */}
        </FormControl>
        <Button shadow={2} mt="2" colorScheme="indigo" _text={{ color: 'white' }}>
          Sign in
        </Button>
        <HStack mt="6" justifyContent="center">
          <Text fontSize="sm" color="muted.700" fontWeight={400}>
            I'm a new user.{' '}
          </Text>
          <Link
            _text={{
              color: 'indigo.500',
              fontWeight: 'medium',
              fontSize: 'sm',
            }}
            onPress={onSignUpClicked}>
            Sign Up
          </Link>
        </HStack>
      </VStack>
    </Box>
  );
}
