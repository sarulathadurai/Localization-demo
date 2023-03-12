/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Menu,
  Box,
  HamburgerIcon,
  Pressable,
} from 'native-base';
import NativeBaseIcon from './src/components/NativeBaseIcon';
import './src/localization';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';

// Color Switch Component
function ToggleDarkMode() {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
const App = () => {
  const {t} = useTranslation();
  const [language, setLanguage] = useState('en');
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Box w="90%" alignItems="flex-end">
          <Menu
            w="190"
            trigger={triggerProps => {
              return (
                <Pressable
                  accessibilityLabel="More options menu"
                  {...triggerProps}>
                  <HamburgerIcon />
                </Pressable>
              );
            }}>
            <Menu.Item onPress={() => setLanguage('ta')}>Tamil</Menu.Item>
            <Menu.Item onPress={() => setLanguage('hi')}>Hindi</Menu.Item>
            <Menu.Item onPress={() => setLanguage('en')}>English</Menu.Item>
          </Menu>
        </Box>
      </SafeAreaView>
      <Center
        _dark={{bg: 'blueGray.900'}}
        _light={{bg: 'blueGray.50'}}
        px={4}
        flex={1}>
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">
            {' '}
            {t('Welcome to NativeBase', {lng: language})}
          </Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Box
              px={2}
              py={1}
              _dark={{bg: 'blueGray.800'}}
              _light={{bg: 'blueGray.200'}}>
              App.js
            </Box>
            <Text>and save to reload.</Text>
          </HStack>
          <Link href="https://docs.nativebase.io" isExternal>
            <Text color="primary.500" underline fontSize={'xl'}>
              {t('Learn NativeBase', {lng: language})}
            </Text>
          </Link>
          <ToggleDarkMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};
export default App;
