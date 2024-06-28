import { Avatar, Box, Container, Flex, Text } from "@chakra-ui/react";
import { Header } from "../../shared/Header";
import { Medal } from "@phosphor-icons/react";

export default function AlunoPerfil() {
  const maxWidth = "1700px";
  return (
    <>
      <Header containerMaxWidth={maxWidth} />
      <Container maxW={maxWidth} px="250px">
        <Box mt="120px" bg="#19181E" p="20px 40px 70px" borderRadius="10px">
          <Flex p="40px" justify="space-between">
            <Avatar
              boxSize="200px"
              src="https://pm1.aminoapps.com/6281/6fb130525d1fdb80e65230703f3491172cd42c8e_hq.jpg"
            />
            <Box w="600px">
              <Text color="white" fontSize="35px">
                @carlosandre
              </Text>
              <Flex justify="space-between">
                <Box w="320px">
                  <Text
                    mt="20px"
                    color="white"
                    fontSize="22px"
                    fontWeight="light"
                  >
                    1450 pontos
                  </Text>
                  <Text
                    mt="40px"
                    color="white"
                    fontSize="20px"
                    fontWeight="light"
                  >
                    Colocações
                  </Text>
                  <Box mt="10px" color="white" fontSize="19px">
                    <Flex w="80%" justify="space-between">
                      <Text color="lightgray" cursor="pointer">
                        Ciência da computação
                      </Text>
                      <Text color="#7860E3">#32</Text>
                    </Flex>
                    <Flex w="80%" mt="10px" justify="space-between">
                      <Text color="lightgray" cursor="pointer">
                        CC8M
                      </Text>
                      <Text color="#7860E3">#5</Text>
                    </Flex>
                  </Box>
                </Box>

                <Box w="270px">
                  <Text
                    mt="90px"
                    color="white"
                    fontSize="20px"
                    fontWeight="light"
                  >
                    Conquistas
                  </Text>
                  <Flex mt="20px">
                    <Medal size={40} color="#FFD700" />
                    <Medal size={40} color="red" />
                    <Medal size={40} color="green" />
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Container>
    </>
  );
}
