import {
  Heading,
  Container,
  Text,
  Input,
  Button,
  Box,
  Center,
  VStack,
  Link,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field, Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ErrorMessage } from "../../shared/ErrorMessage";
// import { useAuth } from "./useAuth";
import { createUser as createUserService } from "./AuthService";

export default function SignupPage() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // const { loginUser } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
      birthday: new Date(),
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .email("Email inválido")
        .required("Email é obrigatório"),
      password: Yup.string()
        .min(5, "Senha deve ter pelo menos 5 caracteres")
        .required("Senha é obrigatório"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Senhas devem ser iguais")
        .required("Digite a senha novamente"),
      name: Yup.string()
        .min(5, "Nome deve ter pelo menos 5 caracteres")
        .required("Nome é obrigatório"),
      birthday: Yup.date().required("Data de nascimento é obrigatório"),
    }),
    onSubmit: async (formValues) => {
      setIsLoading(true);

      try {
        await createUserService(
          formValues.email,
          formValues.name,
          formValues.password,
          formValues.birthday
        );
        // loginUser({ token, userId, email: formValues.email });
        navigate("/");
      } catch (e: any) { // eslint-disable-line
        setError(e.message);
      }
      setIsLoading(false);
    },
  });

  const handleClose = useCallback(() => {
    setError("");
  }, []);

  return (
    <Container maxW="1400px">
      <Center>
        <Box
          w="500px"
          mt="150px"
          px="60px"
          py="30px"
          bg="#232326"
          borderRadius="10px"
        >
          <Heading
            mb="20px"
            textAlign="center"
            fontFamily="Iceland"
            color="#7860E3"
          >
            Titulo
          </Heading>

          {!!error && (
            <ErrorMessage message={error} onCloseAlert={handleClose} />
          )}

          <FormikProvider value={formik}>
            <Form>
              <VStack align="center" spacing="20px">
                <FormControl
                  isInvalid={formik.touched.name && !!formik.errors.name}
                >
                  <Field
                    as={Input}
                    type="text"
                    name="name"
                    placeholder="Nome Completo"
                    bg="#4f4f51"
                    color="white"
                    fontSize="14px"
                    border="1px solid"
                    borderColor="#151517"
                    _focus={{ borderColor: "gray" }}
                    _placeholder={{ color: "white" }}
                  />
                  <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={formik.touched.email && !!formik.errors.email}
                >
                  <Field
                    as={Input}
                    type="email"
                    name="email"
                    placeholder="Email"
                    bg="#4f4f51"
                    color="white"
                    fontSize="14px"
                    border="1px solid"
                    borderColor="#151517"
                    _focus={{ borderColor: "gray" }}
                    _placeholder={{ color: "white" }}
                  />
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={
                    formik.touched.password && !!formik.errors.password
                  }
                >
                  <Field
                    as={Input}
                    type="password"
                    name="password"
                    placeholder="Senha"
                    bg="#4f4f51"
                    color="white"
                    fontSize="14px"
                    border="1px solid"
                    borderColor="#151517"
                    _focus={{ borderColor: "gray" }}
                    _placeholder={{ color: "white" }}
                  />
                  <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={
                    formik.touched.confirmPassword &&
                    !!formik.errors.confirmPassword
                  }
                >
                  <Field
                    as={Input}
                    type="password"
                    name="confirmPassword"
                    placeholder="Digite a senha novamente"
                    bg="#4f4f51"
                    color="white"
                    fontSize="14px"
                    border="1px solid"
                    borderColor="#151517"
                    _focus={{ borderColor: "gray" }}
                    _placeholder={{ color: "white" }}
                  />
                  <FormErrorMessage>
                    {formik.errors.confirmPassword}
                  </FormErrorMessage>
                </FormControl>

                <FormControl
                  isInvalid={
                    formik.touched.birthday && !!formik.errors.birthday
                  }
                >
                  <Field
                    as={Input}
                    type="date"
                    name="birthday"
                    placeholder="DD/MM/YYYY"
                    bg="#4f4f51"
                    color="white"
                    fontSize="14px"
                    border="1px solid"
                    borderColor="#151517"
                    _focus={{ borderColor: "gray" }}
                    _placeholder={{ color: "white" }}
                  />
                </FormControl>

                <Button
                  type="submit"
                  w="100%"
                  bg="#7860E3"
                  color="white"
                  isLoading={isLoading}
                  _hover={{ bg: "#9380e9" }}
                >
                  Criar Conta
                </Button>
                <Text color="white">
                  Já é cadastrado? Faça o login{" "}
                  <Link href="/" color="#7860E3">
                    aqui
                  </Link>
                  .
                </Text>
              </VStack>
            </Form>
          </FormikProvider>
        </Box>
      </Center>
    </Container>
  );
}
