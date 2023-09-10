import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Divider,
    IconButton,
    SimpleGrid,
    Stack,
    Text,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import Logo from "../../assets/svg/credlancer_logo.svg";
  //import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
  //import { Logo } from './Logo'
  //import { links } from './_data'

  export const links = [
    {
      title: 'Company',
      links: [
        { label: 'Why Envelope', href: '#' },
        { label: 'Our story', href: '#' },
        { label: 'Careers', href: '#' },
      ],
    },
    {
      title: 'Product',
      links: [
        { label: 'How it works', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Use Cases', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '#' },
        { label: 'Partnerships', href: '#' },
        { label: 'Case studies', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Terms of Service', href: '#' },
        { label: 'Privacy Policy', href: '#' },
        { label: 'Offer terms', href: '#' },
      ],
    },
  ]
  
  export const Footer = () => (
    <Box mx="auto">
      <Box px="50px" maxWidth="7xl">
        <Stack
          justify="space-between"
          align="start"
          direction={{ base: 'column', lg: 'row' }}
          py={{ base: '12', md: '16' }}
          spacing="8"
        >
          <Stack spacing={{ base: '6', md: '8' }} align="start">
            <Logo />
            <Text color="on-accent-muted">Create beautiful websites remarkably fast.</Text>
          </Stack>

          <SimpleGrid columns={{ base: 2, md: 4 }} gap="8" width={{ base: 'full', lg: 'auto' }}>
            {links.map((group, idx) => (
              <Stack key={idx} spacing="4" minW={{ lg: '40' }}>
                <Text fontSize="sm" fontWeight="semibold" color="on-accent-subtle">
                  {group.title}
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  {group.links.map((link, idx) => (
                    <Button key={idx} as="a" variant="link-on-accent" href={link.href}>
                      {link.label}
                    </Button>
                  ))}
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
        <Divider borderColor="bg-accent-subtle" />
        <Stack
          pt="8"
          pb="12"
          justify="space-between"
          direction={{ base: 'column-reverse', md: 'row' }}
          align="center"
        >
        </Stack>
      </Box>
    </Box>
  )