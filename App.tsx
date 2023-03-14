import React from 'react';
import {
  Text,
  Flex,
  NativeBaseProvider,
  Box,
  HamburgerIcon,
  Icon,
  Avatar,
  FlatList,
} from 'native-base';
import './src/localization';
import {useTranslation} from 'react-i18next';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dimensions} from 'react-native';
import {menuData, transactions, transactionType} from './constants';
// Color Switch Component

function ActionItems({
  name,
  title,
  isLastIndex,
}: {
  name: string;
  title: string;
  isLastIndex: boolean;
}) {
  return (
    <Box
      justifyContent="center"
      alignItems="center"
      bg={isLastIndex ? 'yellow.300' : 'white'}
      flex={1}
      rounded={100}
      w={Dimensions.get('window').width / 3}>
      <Icon as={Ionicons} name={name} size="xl" color="black" />
      <Text>{title}</Text>
    </Box>
  );
}

const TransactionItem = ({item}: {item: transactionType}) => {
  const {icon, title, amount, time} = item;
  return (
    <Flex direction="row" my={3}>
      <Box rounded={100} bg="black" p={2} alignItems="center" mr={4}>
        <Icon as={Ionicons} name={icon} size="xl" color="white" />
      </Box>
      <Box flex={1}>
        <Text fontSize={'md'}>{title}</Text>
        <Text>{time}</Text>
      </Box>
      <Text bold>{amount}</Text>
    </Flex>
  );
};

const App = () => {
  const {t} = useTranslation();
  // const [language, setLanguage] = useState('en');
  return (
    <NativeBaseProvider>
      <Box bgColor="black" flex={1}>
        <Box w="100%" h={'12%'} bgColor="white" mt={3} borderRadius={30}>
          <Flex direction="row" mt={10} mx={7}>
            <Avatar
              bg="cyan.500"
              mr={3}
              source={{
                uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
              }}>
              TE
            </Avatar>
            <Flex>
              <Text>Balance</Text>
              <Text bold fontSize="xl">
                Rs. 39,000
              </Text>
            </Flex>
            <Flex direction="row" flex={1} justifyContent="flex-end">
              <HamburgerIcon />
            </Flex>
          </Flex>
        </Box>
        <Box
          w="100%"
          h={'25%'}
          bg="purple.500"
          borderRadius={30}
          p={10}
          justifyContent="space-between">
          <Text color="white">Omnium</Text>
          <Box>
            <Text color="white" fontSize="xl">
              5882 3456 7990 1389
            </Text>
            <Text color="white" fontSize="sm" mt={3}>
              12/23
            </Text>
          </Box>
        </Box>
        <Box h={'15%'}>
          <FlatList
            horizontal
            data={menuData}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <ActionItems
                name={item.name}
                title={item.title}
                isLastIndex={index === menuData.length - 1}
              />
            )}
          />
        </Box>
        <Box flex={1} bgColor="white" rounded={30} p={10}>
          <Flex direction="row" justifyContent={'space-between'}>
            <Text fontSize="xl" bold>
              Transactions
            </Text>
            <Icon as={Ionicons} name="search" size="xl" />
          </Flex>
          <FlatList
            data={transactions}
            keyExtractor={item => item.id}
            renderItem={({item}) => <TransactionItem item={item} />}
          />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
};
export default App;
