import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import axios from 'axios';

function TermsConditions() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const url = `http://universities.hipolabs.com/search?country=Malaysia`;

    axios
      .get(url)
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err));
  });

  return (
    <Box>
      <Flex
        flexDir="column"
        justifyContent="space-between"
        w="100%"
        h="200px"
        _hover={{ WebkitBoxShadow: '0 0 3px 0 #9299a4' }}
        bgColor="white"
      >
        {/* <Image src={''} w="100%" h="50%" /> */}
        <Flex flexDir="column">
          <Text m="10px" fontSize="2xl" textAlign="center" fontWeight="bold">
            {data.name}
          </Text>
          <Text m="20px 40px" fontSize="md" textAlign="justify" noOfLines={3}>
            <Text>Website: {data.web_pages}</Text>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}
export default TermsConditions;
