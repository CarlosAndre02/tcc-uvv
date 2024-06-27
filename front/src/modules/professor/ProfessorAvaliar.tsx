import { Box, Button, Container, Flex, Text, Textarea } from "@chakra-ui/react";
import { Header } from "../../shared/Header";
import { ArrowLeft } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ProfessorAvaliar() {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState([false, false, false, false, false, false]);
  const maxWidth = "1700px";

  const updateElement = (index: number, newValue: boolean) => {
    const newArray = [...activeButton];

    newArray[index] = newValue;

    setActiveButton(newArray);
  };

  return (
    <>
      <Header containerMaxWidth={maxWidth} />
      <Container maxW={maxWidth} px="250px">
        <Box
          mt="120px"
          h="75vh"
          bg="#0B0B0E"
          p="20px 40px 70px"
          borderRadius="10px"
          overflowX="hidden"
          overflowY="auto"
          sx={{
            "&": {
              "-ms-overflow-style": "none",
              "scrollbar-width": "none",
            },
            "&::-webkit-scrollbar": {
              width: "12px",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#bebebe",
              border: "1px solid lightgray",
              "border-radius": "25px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#aeaeae",
            },
          }}
        >
          <Flex align="center">
            <ArrowLeft
              color="white"
              size={28}
              cursor="pointer"
              onClick={() => {
                navigate("/professor/tarefa");
              }}
            />
            <Text color="white" ml="20px" fontSize="25px" fontWeight="black">
              Avaliar desempenho
            </Text>
          </Flex>

          <Flex mt="50px">
            <Flex>
              <Text color="white" fontSize="20px" fontWeight="black" mr="10px">
                Nome:
              </Text>
              <Text color="white" fontSize="20px">
                Carlos André Gomes Daniel
              </Text>
            </Flex>
            <Flex ml="50px">
              <Text color="white" fontSize="20px" fontWeight="black" mr="10px">
                Turma:
              </Text>
              <Text color="white" fontSize="20px">
                CC8M
              </Text>
            </Flex>
            <Flex ml="50px">
              <Text color="white" fontSize="20px" fontWeight="black" mr="10px">
                Matrícula:
              </Text>
              <Text color="white" fontSize="20px">
                2020154568
              </Text>
            </Flex>
          </Flex>

          <Box mt="50px" p="20px" bg="#232326">
            <Text color="lightgray" mb="20px" fontSize="22px">
              Avaliar qualidade de conteúdo
            </Text>
            <Flex>
              <Button
                mr="10px"
                bg={activeButton[0] ? "black" : "#4f4f51"}
                color="lightgray"
                _hover="none"
                onClick={() => {
                  updateElement(0, true);
                }}
              >
                Excelente
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Bom
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Satisfatório
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Insatisfatório
              </Button>
            </Flex>
            <Box mt="20px">
              <Textarea
                placeholder="Escreva um feedback (Opcional)..."
                color="lightgray"
                border="none"
                // borderColor="transparent"
                _placeholder={{ color: "lightgray" }}
                _focus={{ border: "none" }}
              />
            </Box>
          </Box>
          <Box mt="50px" p="20px" bg="#232326">
            <Text color="lightgray" mb="20px" fontSize="22px">
              Avaliar Originalidade
            </Text>
            <Flex>
              <Button
                mr="10px"
                bg={activeButton[1] ? "black" : "#4f4f51"}
                color="lightgray"
                _hover="none"
                onClick={() => {
                  updateElement(1, true);
                }}
              >
                Excelente
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Bom
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Satisfatório
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Insatisfatório
              </Button>
            </Flex>
            <Box mt="20px">
              <Textarea
                placeholder="Escreva um feedback (Opcional)..."
                color="lightgray"
                border="none"
                // borderColor="transparent"
                _placeholder={{ color: "lightgray" }}
                _focus={{ border: "none" }}
              />
            </Box>
          </Box>
          <Box mt="50px" p="20px" bg="#232326">
            <Text color="lightgray" mb="20px" fontSize="22px">
              Avaliar organização
            </Text>
            <Flex>
              <Button
                mr="10px"
                bg={activeButton[2] ? "black" : "#4f4f51"}
                color="lightgray"
                _hover="none"
                onClick={() => {
                  updateElement(2, true);
                }}
              >
                Excelente
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Bom
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Satisfatório
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Insatisfatório
              </Button>
            </Flex>
            <Box mt="20px">
              <Textarea
                placeholder="Escreva um feedback (Opcional)..."
                color="lightgray"
                border="none"
                // borderColor="transparent"
                _placeholder={{ color: "lightgray" }}
                _focus={{ border: "none" }}
              />
            </Box>
          </Box>
          <Box mt="50px" p="20px" bg="#232326">
            <Text color="lightgray" mb="20px" fontSize="22px">
              Avaliar coerência e coesão
            </Text>
            <Flex>
              <Button
                mr="10px"
                bg={activeButton[3] ? "black" : "#4f4f51"}
                color="lightgray"
                _hover="none"
                onClick={() => {
                  updateElement(3, true);
                }}
              >
                Excelente
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Bom
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Satisfatório
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Insatisfatório
              </Button>
            </Flex>
            <Box mt="20px">
              <Textarea
                placeholder="Escreva um feedback (Opcional)..."
                color="lightgray"
                border="none"
                // borderColor="transparent"
                _placeholder={{ color: "lightgray" }}
                _focus={{ border: "none" }}
              />
            </Box>
          </Box>
          <Box mt="50px" p="20px" bg="#232326">
            <Text color="lightgray" mb="20px" fontSize="22px">
              Avaliar resolução de problemas
            </Text>
            <Flex>
              <Button
                mr="10px"
                bg={activeButton[4] ? "black" : "#4f4f51"}
                color="lightgray"
                _hover="none"
                onClick={() => {
                  updateElement(4, true);
                }}
              >
                Excelente
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Bom
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Satisfatório
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Insatisfatório
              </Button>
            </Flex>
            <Box mt="20px">
              <Textarea
                placeholder="Escreva um feedback (Opcional)..."
                color="lightgray"
                border="none"
                // borderColor="transparent"
                _placeholder={{ color: "lightgray" }}
                _focus={{ border: "none" }}
              />
            </Box>
          </Box>
          <Box mt="50px" p="20px" bg="#232326">
            <Text color="lightgray" mb="20px" fontSize="22px">
              Avaliar criatividade
            </Text>
            <Flex>
              <Button
                mr="10px"
                bg={activeButton[5] ? "black" : "#4f4f51"}
                color="lightgray"
                _hover="none"
                onClick={() => {
                  updateElement(5, true);
                }}
              >
                Excelente
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Bom
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Satisfatório
              </Button>
              <Button mr="10px" bg="#4f4f51" color="lightgray" _hover="none">
                Insatisfatório
              </Button>
            </Flex>
            <Box mt="20px">
              <Textarea
                placeholder="Escreva um feedback (Opcional)..."
                color="lightgray"
                border="none"
                // borderColor="transparent"
                _placeholder={{ color: "lightgray" }}
                _focus={{ border: "none" }}
              />
            </Box>
          </Box>

          <Flex mt="50px" justify="flex-end">
            <Button>Salvar</Button>
          </Flex>
        </Box>
      </Container>
    </>
  );
}
