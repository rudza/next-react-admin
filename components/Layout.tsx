import * as React from "react"
import {
  Flex,
  Box,
  Link,
  Stack,
  useColorModeValue,
  Button,
  LinkProps,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { useRouter } from "next/router"
import { BiSun, BiMoon } from "react-icons/bi"

import { isActive } from "../lib/routes"

interface Props {
  children: React.ReactNode
}
export function Layout(props: Props) {
  return (
    <Flex w="100vw" h="100vh" overflow="hidden">
      <Flex
        flexDir="column"
        justify="space-between"
        w={200}
        p={8}
        h="100vh"
        bg={useColorModeValue("white", "gray.900")}
        borderRight="1px solid"
        borderColor={useColorModeValue("gray.100", "gray.900")}
      >
        <Stack>
          <SidebarLink href="/">Home</SidebarLink>
          <SidebarLink href="/admin">Admin</SidebarLink>
        </Stack>
        <Stack>
          <Button variant="outline">
            Logout
          </Button>
        </Stack>
      </Flex>
      <Box w="calc(100vw - 200px)" px={10} py={8} overflow="scroll">
        {props.children}
      </Box>
    </Flex>
  )
}

interface SidebarLinkProps extends LinkProps {
  href: string
  children: string
}

function SidebarLink({ href, ...props }: SidebarLinkProps) {
  const router = useRouter()
  return (
    <NextLink passHref href={href}>
      <Link
        {...props}
        fontWeight="bold"
        color={isActive(router.asPath, href) ? "primary.500" : undefined}
      >
        {props.children}
      </Link>
    </NextLink>
  )
}

function SidebarClientLink({ href, ...props }: SidebarLinkProps) {
  const router = useRouter()
  return (
    <Link
      {...props}
      href={href}
      fontWeight="bold"
      color={isActive(router.asPath, href) ? "primary.500" : undefined}
    >
      {props.children}
    </Link>
  )
}
