import { Box, Container, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Header } from "../../shared/Header";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

export default function AlunoClassificacao() {
  const navigate = useNavigate();
  const maxWidth = "1700px";
  return (
    <>
      <Header containerMaxWidth={maxWidth} />
      <Container maxW={maxWidth} px="250px">
        <Box mt="120px" bg="#19181E" p="20px 40px 70px" borderRadius="10px">
          <Flex align="center">
            <ArrowLeft
              color="white"
              size={28}
              cursor="pointer"
              onClick={() => {
                navigate("/professor/home");
              }}
            />
            <Text color="white" ml="20px" fontSize="25px" fontWeight="black">
              Ciência da computação
            </Text>
          </Flex>

          <TableContainer mt="50px">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th fontSize="15px" color="white">
                    posição
                  </Th>
                  <Th fontSize="15px" color="white">
                    Aluno
                  </Th>
                  <Th fontSize="15px" color="white">
                    Pontos
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr fontSize="18px" color="white">
                  <Td cursor="pointer">1.</Td>
                  <Td>garchy</Td>
                  <Td>120 pontos</Td>
                </Tr>
                <Tr fontSize="18px" color="white">
                  <Td cursor="pointer">2.</Td>
                  <Td>kevinho88</Td>
                  <Td>100 pontos</Td>
                </Tr>
                <Tr fontSize="18px" color="white">
                  <Td cursor="pointer">3.</Td>
                  <Td>huguinho337</Td>
                  <Td>77 pontos</Td>
                </Tr>
                <Tr fontSize="18px" color="white">
                  <Td cursor="pointer">...</Td>
                  <Td>...</Td>
                  <Td>...</Td>
                </Tr>
                <Tr fontSize="18px" color="white">
                  <Td cursor="pointer">35.</Td>
                  <Td>carlosandre</Td>
                  <Td>12 pontos</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
}
