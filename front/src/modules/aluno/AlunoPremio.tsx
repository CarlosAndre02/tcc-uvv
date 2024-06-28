import { Box, Button, Center, Container, Flex, Text, VStack } from "@chakra-ui/react";
import { Header } from "../../shared/Header";
import { BookBookmark } from "@phosphor-icons/react";

export default function AlunoPremio() {
  const maxWidth = "1700px";

  return (
    <>
      <Header containerMaxWidth={maxWidth} />
      <Container maxW={maxWidth} px="250px">
        <Box mt="120px" bg="#19181E" p="20px 40px 70px" borderRadius="10px">
          <Flex justify="space-between">
            <Center w="800px" pl="40px" h="350px">
              <BookBookmark size={160} color="white" />
            </Center>

            <VStack
              pl="100px"
              color="white"
              align="flex-start"
              spacing="6"

            >
              <Text fontSize="35px" fontWeight="black">
                Introduction to Algorithms
              </Text>
              <Text fontSize="21px">Por Thomas H Cormen</Text>
              <Text fontSize="18px" fontWeight="light">
                Introdução aos Algoritmos é um livro sobre programação de
                computadores escrito por Thomas H. Cormen, Charles E. Leiserson,
                Ronald L. Rivest e Clifford Stein. O livro tem sido amplamente
                utilizado como material didático para disciplinas de algoritmos
                em muitas universidades e é comumente citado como referência
                para algoritmos em artigos publicados.
              </Text>
              <Text fontSize="21px" fontWeight="black">
                100 Vicoins
              </Text>
              <Button w="120px" bg="#7860E3" color="white" _hover={{ bg: "#9380e9" }}>
                Comprar
              </Button>
            </VStack>
          </Flex>
        </Box>
      </Container>
    </>
  );
}
