import { Button, Container, Flex, Grid, GridItem, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";

import { Header } from "../../shared/Header";
import { Plus } from "@phosphor-icons/react";

export default function ProfessorHome() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const maxWidth = "1700px";

  return (
    <>
      <Header containerMaxWidth={maxWidth} />
      <Container maxW={maxWidth} px="250px">
        <Flex mt="120px" justify="space-between">
          <Text color="white" fontWeight="black" fontSize="30px">
            Minhas tarefas
          </Text>

          <Flex
            p="8px 14px"
            border="1px solid #A3A3C6"
            borderRadius="10px"
            cursor="pointer"
            onClick={onOpen}
          >
            <Plus size={24} color="#5E5E9B" />
            <Text ml="10px" color="white" fontSize="18px">
              Nova tarefa
            </Text>
          </Flex>
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="#232326">
            <ModalHeader color="#7860E3" fontSize="25px">Criar tarefa</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                bg="#4f4f51"
                color="white"
                fontSize="14px"
                border="1px solid"
                borderColor="#151517"
                _focus={{ borderColor: "gray" }}
                _placeholder={{ color: "white" }}
                placeholder="Nome"
              />
            </ModalBody>

            <ModalFooter>
              <Button bg="#7860E3" color="white" _hover={{ bg: "#9380e9" }}>
                Criar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Grid mt="50px" templateColumns="repeat(3, 1fr)" gap={4}>
          <GridItem
            w="100%"
            bg="#292832"
            p="20px"
            borderRadius="10px"
            cursor="pointer"
            _hover={{ bg: "#3e3e47" }}
          >
            <Flex justify="space-between" h="180px" direction="column">
              <Text color="white" fontSize="22px">
                Oficina de software
              </Text>
              <Text color="#9A9796">19 alunos ativos</Text>
            </Flex>
          </GridItem>

          <GridItem
            w="100%"
            bg="#292832"
            p="20px"
            borderRadius="10px"
            cursor="pointer"
            _hover={{ bg: "#3e3e47" }}
          >
            <Flex justify="space-between" h="180px" direction="column">
              <Text color="white" fontSize="22px">
                Oficina de IA
              </Text>
              <Text color="#9A9796">32 alunos ativos</Text>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}
