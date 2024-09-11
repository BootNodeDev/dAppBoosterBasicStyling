import { type FC } from 'react'

import { LogoMini } from '@bootnodedev/db-ui-toolkit'
import { Center } from '@chakra-ui/react'

export const Footer: FC = ({ ...restProps }) => {
  return (
    <Center
      alignItems="center"
      backgroundColor="var(--theme-footer-background-color)"
      height="92px"
      justifyContent="center"
      mt="calc(var(--base-gap-xl) * 2)"
      pl={4}
      pr={4}
      width="100%"
      {...restProps}
    >
      <a
        href="https://www.bootnode.dev/"
        rel="noreferrer"
        target="_blank"
        title="Building the future of Web3"
      >
        <LogoMini />
      </a>
    </Center>
  )
}
