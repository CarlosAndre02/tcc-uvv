import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  Image,
} from "@chakra-ui/react";

import { Header } from "../../shared/Header";
import { Plus } from "@phosphor-icons/react";
import Carousel from "react-bootstrap/Carousel";

export default function AlunoHome() {
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
              Entrar tarefa
            </Text>
          </Flex>
        </Flex>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent bg="#232326">
            <ModalHeader color="#7860E3" fontSize="25px">
              Entrar em uma tarefa tarefa
            </ModalHeader>
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
                placeholder="Passcode"
              />
            </ModalBody>

            <ModalFooter>
              <Button bg="#7860E3" color="white" _hover={{ bg: "#9380e9" }}>
                Entrar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Grid mt="50px" templateColumns="repeat(3, 1fr)" gap={4}>
          <GridItem
            w="100%"
            bg="#292832"
            p="20px"
            h="140px"
            borderRadius="10px"
            cursor="pointer"
            _hover={{ bg: "#3e3e47" }}
          >
            <Flex justify="space-between" h="100%" direction="column">
              <Text color="white" fontSize="22px">
                Oficina de software
              </Text>
              <Text color="#9A9796">Em revisão</Text>
            </Flex>
          </GridItem>

          <GridItem
            w="100%"
            bg="#292832"
            p="20px"
            h="140px"
            borderRadius="10px"
            cursor="pointer"
            _hover={{ bg: "#3e3e47" }}
          >
            <Flex justify="space-between" h="100%" direction="column">
              <Text color="white" fontSize="22px">
                Oficina de IA
              </Text>
              <Text color="#66b366">Revisado</Text>
            </Flex>
          </GridItem>
        </Grid>

        <Flex mt="150px" justify="space-between">
          <Box w="500px">
            <Text color="white" fontWeight="black" fontSize="30px">
              Classificação
            </Text>

            <Box mt="20px" color="white" fontSize="19px">
              <Flex w="80%" justify="space-between">
                <Text color="lightgray" cursor="pointer">
                  Ciência da computação
                </Text>
                <Text color="lightgray">#32</Text>
              </Flex>
              <Flex w="80%" mt="20px" justify="space-between">
                <Text color="lightgray" cursor="pointer">
                  CC8M
                </Text>
                <Text color="lightgray">#5</Text>
              </Flex>
            </Box>
          </Box>

          <Flex w="500px">
            <Text color="white" fontWeight="black" fontSize="30px">
              Loja
            </Text>
            <Carousel>
              <Carousel.Item>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRip96Ykk_rBzk9X1Lb-i6uRbqvhLviGTkgJg&s" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRip96Ykk_rBzk9X1Lb-i6uRbqvhLviGTkgJg&s" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRip96Ykk_rBzk9X1Lb-i6uRbqvhLviGTkgJg&s" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Flex>
        </Flex>
      </Container>
    </>
  );
}
