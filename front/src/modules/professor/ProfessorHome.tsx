import { Container, Flex, Grid, GridItem, Text } from "@chakra-ui/react";

import { Header } from "../../shared/Header";
import { Plus } from "@phosphor-icons/react";

export default function ProfessorHome() {
  const maxWidth = "1700px";

  return (
    <>
      <Header containerMaxWidth={maxWidth} />
      <Container maxW={maxWidth} px="250px">
        <Flex mt="120px" justify="space-between">
          <Text color="white" fontWeight="black" fontSize="30px">
            Minhas tarefas
          </Text>

          <Flex p="8px 14px" border="1px solid #A3A3C6" borderRadius="10px">
            <Plus size={24} color="#5E5E9B" />
            <Text ml="10px" color="white" fontSize="18px">
              Nova tarefa
            </Text>
          </Flex>
        </Flex>

        <Grid mt="50px" templateColumns="repeat(3, 1fr)" gap={4}>
          <GridItem w="100%" bg="white">
            <Flex justify="space-between" h="220px" direction="column">
              <Text>Oi</Text>
              <Text>Ola</Text>
            </Flex>
          </GridItem>

          <GridItem w="100%" h="10" bg="blue.500" />
          <GridItem w="100%" h="10" bg="blue.500" />
        </Grid>
      </Container>
    </>
  );
}
