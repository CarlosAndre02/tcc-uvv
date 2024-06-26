import {
  Box,
  Flex,
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  VStack,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Bell } from "@phosphor-icons/react";

import { useAuth } from "../modules/auth/useAuth";

type HeaderProps = {
  containerMaxWidth: string;
};

export function Header({ containerMaxWidth }: HeaderProps) {
  const navigate = useNavigate();
  const { logoutUser } = useAuth();

  const onLogout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <Box px="48px">
      <Flex
        maxW={containerMaxWidth}
        m="0 auto"
        h="50px"
        px="60px"
        align="center"
        justify="flex-end"
      >
        <Bell color="white" size={32} />

        <Flex ml="30px" align="center">
          <Popover>
            <PopoverTrigger>
              <Avatar
                as="button"
                src={undefined}
                border="1px solid white"
                bg="black"
                size="sm"
                cursor="pointer"
              />
            </PopoverTrigger>
            <PopoverContent w="140px">
              <PopoverBody p="0">
                <VStack spacing="0">
                  <Button
                    w="100%"
                    fontSize="14px"
                    fontWeight="normal"
                    bg="white"
                    borderRadius="0"
                    borderBottom="1px solid lightgray"
                    _hover={{ bg: "#f2f2f2" }}
                    onClick={() => navigate("/dashboard")}
                  >
                    Dashboard
                  </Button>
                  <Button
                    w="100%"
                    fontSize="14px"
                    fontWeight="normal"
                    bg="white"
                    borderRadius="0"
                    borderBottom="1px solid lightgray"
                    _hover={{ bg: "#f2f2f2" }}
                    onClick={onLogout}
                  >
                    Sair
                  </Button>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>
    </Box>
  );
}
