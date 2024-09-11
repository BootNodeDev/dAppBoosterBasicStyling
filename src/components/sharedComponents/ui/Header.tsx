import { type FC, type HTMLAttributes } from 'react'

import { Logo as BaseLogo, SwitchThemeButton } from '@bootnodedev/db-ui-toolkit'
import { Flex, Box, chakra } from '@chakra-ui/react'
import { Link } from '@tanstack/react-router'
import { useTheme } from 'next-themes'

import { ConnectWalletButton } from '@/src/providers/Web3Provider'

const Logo = chakra(BaseLogo)

export const Header: FC<HTMLAttributes<HTMLElement>> = ({ ...restProps }) => {
  const { setTheme, theme } = useTheme()

  return (
    <Flex
      as="header"
      mb="calc(var(--base-gap-xl) * 2)"
      position="relative"
      pt="var(--base-common-padding-xl)"
      zIndex="10"
      {...restProps}
    >
      <Flex alignItems="center" justifyContent="space-between" pl={4} pr={4} width="100%">
        <Box flex="1">
          <Link to="/">
            <Logo minWidth="140px" />
          </Link>
        </Box>
        <Flex
          alignItems="center"
          columnGap="calc(var(--base-gap))"
          flex="1"
          justifyContent="flex-end"
        >
          <SwitchThemeButton onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
          <ConnectWalletButton />
        </Flex>
      </Flex>
    </Flex>
  )
}
