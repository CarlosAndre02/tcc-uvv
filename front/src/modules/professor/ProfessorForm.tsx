import { Box, Container, Flex, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Header } from "../../shared/Header";
import { ArrowLeft, CopySimple } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export default function ProfessorForm() {
  const navigate = useNavigate();
  const maxWidth = "1700px";

  return (
    <>
      <Header containerMaxWidth={maxWidth} />
      <Container maxW={maxWidth} px="250px">
        <Box mt="120px" bg="#19181E" p="20px 40px 70px" borderRadius="10px">
          <Flex align="center">
            <ArrowLeft color="white" size={28} cursor="pointer" onClick={() => {
              navigate("/professor/home")
            }} />
            <Text color="white" ml="20px" fontSize="25px" fontWeight="black">
              Oficina de software
            </Text>
          </Flex>

          <Flex mt="50px">
            <Text color="white" fontSize="20px" mr="20px">
              Passcode:
            </Text>
            <Flex bg="#0a0a0c" align="center" px="10px" borderRadius="10px">
              <Text color="white" mr="10px">
                HY3SD7
              </Text>
              <CopySimple color="white" size={20} cursor="pointer" />
            </Flex>
          </Flex>

          <TableContainer mt="50px">
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th fontSize="15px" color="white">
                    Nome
                  </Th>
                  <Th fontSize="15px" color="white">
                    Matrícula
                  </Th>
                  <Th fontSize="15px" color="white">
                    Turma
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr fontSize="18px" color="white">
                  <Td cursor="pointer">Carlos André Gomes</Td>
                  <Td>2020154568</Td>
                  <Td>CC8M</Td>
                </Tr>
                <Tr fontSize="18px" color="white">
                  <Td cursor="pointer">Fulano Silva</Td>
                  <Td>202012354</Td>
                  <Td>CC7M</Td>
                </Tr>
                <Tr fontSize="18px" color="white">
                  <Td cursor="pointer">Ciclano Souza</Td>
                  <Td>202045879</Td>
                  <Td>CC6M</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
}
