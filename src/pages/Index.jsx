import React from "react";
import { Box, Button, Container, Flex, Heading, HStack, Image, Input, Link, Stack, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Box bg="white" boxShadow="md" position="fixed" top={0} w="100%" zIndex={999}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between" py={4}>
            <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJib2dyYWZpJTIwbG9nb3xlbnwwfHx8fDE3MTM0MDk1ODN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Webbografi Logo" h={8} />
            <HStack spacing={8}>
              <Link href="#home" fontWeight="medium">
                Home
              </Link>
              <Link href="#services" fontWeight="medium">
                Services
              </Link>
              <Link href="#portfolio" fontWeight="medium">
                Portfolio
              </Link>
              <Link href="#contact" fontWeight="medium">
                Contact
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box id="home" bg="gray.100" pt={24} pb={16}>
        <Container maxW="container.lg">
          <Stack direction={["column", "row"]} align="center" spacing={8}>
            <VStack align={["center", "flex-start"]} spacing={4} flex={1}>
              <Heading as="h1" size="2xl">
                Webbografi
              </Heading>
              <Text fontSize="xl">Modern Web Design & Development</Text>
              <Button colorScheme="blue" size="lg">
                Get Started
              </Button>
            </VStack>
            <Flex flex={1} justify="flex-end">
              <Image src="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbGx1c3RyYXRpb258ZW58MHx8fHwxNzEzNDA5NTg0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Design" w={["100%", "80%"]} />
            </Flex>
          </Stack>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="services" py={16}>
        <Container maxW="container.lg">
          <Heading textAlign="center" mb={8}>
            Our Services
          </Heading>
          <Flex flexWrap="wrap" justify="center">
            <Box p={8} bg="white" borderRadius="md" boxShadow="md" m={4} maxW="sm" textAlign="center">
              <Image src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpY29ufGVufDB8fHx8MTcxMzQwOTU4NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Design" h={20} mx="auto" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Web Design
              </Heading>
              <Text>We create stunning and modern web designs tailored to your brand.</Text>
            </Box>
            <Box p={8} bg="white" borderRadius="md" boxShadow="md" m={4} maxW="sm" textAlign="center">
              <Image src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGljb258ZW58MHx8fHwxNzEzNDA5NTg1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Web Development" h={20} mx="auto" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                Web Development
              </Heading>
              <Text>We develop fast, responsive, and user-friendly websites.</Text>
            </Box>
            <Box p={8} bg="white" borderRadius="md" boxShadow="md" m={4} maxW="sm" textAlign="center">
              <Image src="https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzZW8lMjBpY29ufGVufDB8fHx8MTcxMzQwOTU4NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="SEO" h={20} mx="auto" mb={4} />
              <Heading as="h3" size="lg" mb={4}>
                SEO
              </Heading>
              <Text>We optimize your website for search engines to increase visibility.</Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Portfolio Section */}
      <Box id="portfolio" bg="gray.100" py={16}>
        <Container maxW="container.lg">
          <Heading textAlign="center" mb={8}>
            Our Portfolio
          </Heading>
          <Flex flexWrap="wrap" justify="center">
            <Box m={4}>
              <Image src="https://images.unsplash.com/photo-1513151233558-d860c5398176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwcG9ydGZvbGlvJTIwMXxlbnwwfHx8fDE3MTM0MDk1ODZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Portfolio 1" borderRadius="md" />
            </Box>
            <Box m={4}>
              <Image src="https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwcG9ydGZvbGlvJTIwMnxlbnwwfHx8fDE3MTM0MDk1ODZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Portfolio 2" borderRadius="md" />
            </Box>
            <Box m={4}>
              <Image src="https://images.unsplash.com/photo-1455612693675-112974d4880b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwcG9ydGZvbGlvJTIwM3xlbnwwfHx8fDE3MTM0MDk1ODd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Portfolio 3" borderRadius="md" />
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" py={16}>
        <Container maxW="container.lg">
          <Heading textAlign="center" mb={8}>
            Contact Us
          </Heading>
          <Flex justify="center">
            <Box maxW="md" w="100%">
              <Stack spacing={4}>
                <Input placeholder="Name" />
                <Input placeholder="Email" />
                <Textarea placeholder="Message" />
                <Button colorScheme="blue" size="lg">
                  Send Message
                </Button>
              </Stack>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={8}>
        <Container maxW="container.lg">
          <Stack direction={["column", "row"]} align="center" justify="space-between">
            <Image src="https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWJib2dyYWZpJTIwbG9nbyUyMHdoaXRlfGVufDB8fHx8MTcxMzQwOTU4N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Webbografi Logo" h={8} />
            <HStack spacing={4}>
              <Link href="#home">Home</Link>
              <Link href="#services">Services</Link>
              <Link href="#portfolio">Portfolio</Link>
              <Link href="#contact">Contact</Link>
            </HStack>
            <HStack spacing={4}>
              <Link href="https://facebook.com" isExternal>
                <FaFacebook />
              </Link>
              <Link href="https://twitter.com" isExternal>
                <FaTwitter />
              </Link>
              <Link href="https://instagram.com" isExternal>
                <FaInstagram />
              </Link>
              <Link href="https://linkedin.com" isExternal>
                <FaLinkedin />
              </Link>
            </HStack>
          </Stack>
          <Text mt={8} textAlign="center" fontSize="sm">
            &copy; {new Date().getFullYear()} Webbografi. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
