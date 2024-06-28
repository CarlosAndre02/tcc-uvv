import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { Header } from "../../shared/Header";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

export default function AlunoTarefa() {
  const navigate = useNavigate();
  const maxWidth = "1700px";

  return (
    <>
      <Header containerMaxWidth={maxWidth} />
      <Container maxW={maxWidth} px="250px">
        <Box
          mt="120px"
          h="75vh"
          bg="#19181E"
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
                navigate("/aluno/home");
              }}
            />
            <Text color="white" ml="20px" fontSize="25px" fontWeight="black">
              Oficina de software
            </Text>
          </Flex>

          <Box mt="50px" p="20px" bg="#232326">
            <Text color="lightgray" mb="20px" fontSize="22px">
              Qualidade de conteúdo: Excelente
            </Text>
            <Text color="white">Não houve feedback.</Text>
          </Box>
          <Box mt="50px" p="20px" bg="#232326">
            <Text color="lightgray" mb="20px" fontSize="22px">
              Originalidade: Excelente
            </Text>
            <Text color="white">Não houve feedback.</Text>
          </Box>
          <Box mt="50px" p="20px" bg="#232326">
            <Text color="lightgray" mb="20px" fontSize="22px">
              Organização: Excelente
            </Text>
            <Text color="white">Não houve feedback.</Text>
          </Box>
          <Box mt="50px" p="20px" bg="#232326">
            <Text color="lightgray" mb="20px" fontSize="22px">
              Coerência e coesão: Excelente
            </Text>
            <Text color="white">Não houve feedback.</Text>
          </Box>
          <Box mt="50px" p="20px" bg="#232326">
            <Text color="lightgray" mb="20px" fontSize="22px">
              Resolução de problemas: Excelente
            </Text>
            <Text color="white">Não houve feedback.</Text>
          </Box>
          <Box mt="50px" p="20px" bg="#232326">
            <Text color="lightgray" mb="20px" fontSize="22px">
              Criatividade: Excelente
            </Text>
            <Text color="white">Não houve feedback.</Text>
          </Box>

          <Button
            w="100%"
            p="25px"
            mt="40px"
            fontSize="18px"
            bg="#7860E3"
            color="white"
            _hover={{ bg: "#9380e9" }}
          >
            Resgatar pontos e Vicoins
          </Button>
        </Box>
      </Container>
    </>
  );
}
