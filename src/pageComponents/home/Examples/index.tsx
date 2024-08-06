import { type FC, type HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

import { InnerContainer as Inner, ContainerPadding, breakpointMediaQuery } from 'db-ui-toolkit'
import { mainnet } from 'viem/chains'
import { useAccount } from 'wagmi'

import { Props as ItemProps } from '@/src/pageComponents/home/Examples/Item'
import List from '@/src/pageComponents/home/Examples/List'
import ImgAvatar from '@/src/pageComponents/home/Examples/assets/Avatar'
import ImgEns from '@/src/pageComponents/home/Examples/assets/Ens'
import ImgHash from '@/src/pageComponents/home/Examples/assets/Hash'
import ImgInputAddress from '@/src/pageComponents/home/Examples/assets/InputAddress'
import ImgSign from '@/src/pageComponents/home/Examples/assets/Sign'
import ImgSubgraph from '@/src/pageComponents/home/Examples/assets/Subgraph'
import ImgSubgraphStatus from '@/src/pageComponents/home/Examples/assets/SubgraphStatus'
import ImgSwitch from '@/src/pageComponents/home/Examples/assets/Switch'
import ImgTokenInput from '@/src/pageComponents/home/Examples/assets/TokenInput'
import ImgTokenList from '@/src/pageComponents/home/Examples/assets/TokenList'
import ImgTransaction from '@/src/pageComponents/home/Examples/assets/Transaction'
import ImgUserCheck from '@/src/pageComponents/home/Examples/assets/UserCheck'
import ImgWallet from '@/src/pageComponents/home/Examples/assets/Wallet'
import AvatarDemo from '@/src/pageComponents/home/Examples/demos/AvatarDemo'
import ERC20ApproveAndTransferButtonDemo from '@/src/pageComponents/home/Examples/demos/ERC20ApproveAndTransferButtonDemo'
import EnsNameDemo from '@/src/pageComponents/home/Examples/demos/EnsNameDemo'
import HashDemo from '@/src/pageComponents/home/Examples/demos/HashDemo'
import HashInputDemo from '@/src/pageComponents/home/Examples/demos/HashInputDemo'
import SignMessageDemo from '@/src/pageComponents/home/Examples/demos/SignMessageDemo'
import SubgraphDemo from '@/src/pageComponents/home/Examples/demos/SubgraphDemo'
import SubgraphStatusDemo from '@/src/pageComponents/home/Examples/demos/SubgraphStatusDemo'
import SwitchNetworkDemo from '@/src/pageComponents/home/Examples/demos/SwitchNetworkDemo'
import TokenDropdownDemo from '@/src/pageComponents/home/Examples/demos/TokenDropdownDemo'
import TokenInputDemo from '@/src/pageComponents/home/Examples/demos/TokenInputDemo'
import TransactionButtonDemo from '@/src/pageComponents/home/Examples/demos/TransactionButtonDemo'
import { ConnectWalletButton as ConnectWalletButtonDemo } from '@/src/providers/Web3Provider'

const Wrapper = styled.section`
  [data-theme='light'] & {
    --landing-page-main-background-color: #f7f7f7;
  }

  [data-theme='dark'] & {
    --landing-page-main-background-color: #2e3048;
  }

  background-color: var(--landing-page-main-background-color);
  flex-grow: 1;
`

const InnerContainer = styled(Inner)`
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
  padding-top: 50px;

  ${breakpointMediaQuery(
    'tabletPortraitStart',
    css`
      padding-bottom: 100px;
      padding-top: 100px;
    `,
  )}

  ${ContainerPadding}
`

const Examples: FC<HTMLAttributes<HTMLElement>> = ({ ...restProps }) => {
  const { address = '0x87885AaEEdED51C7e3858a782644F5d89759f245' } = useAccount()
  const items: ItemProps[] = [
    {
      demo: <ConnectWalletButtonDemo />,
      href: 'https://github.com/BootNodeDev/dAppBooster#wallet-setup',
      icon: <ImgWallet />,
      text: 'Authenticate using an EVM Account',
      title: 'Wallet connectivity',
    },
    {
      demo: <HashInputDemo />,
      href: 'https://github.com/BootNodeDev/dAppBooster/blob/a7d0a994f6d5c2a547513669fccb619be046f1d2/src/sharedComponents/HashInput.tsx#L25-L44',
      icon: <ImgInputAddress />,
      text: 'Validate address, ENS or transaction hash',
      title: 'Input address',
    },
    {
      demo: <TokenDropdownDemo />,
      href: 'https://github.com/BootNodeDev/dAppBooster/blob/a7d0a994f6d5c2a547513669fccb619be046f1d2/src/sharedComponents/TokenDropdown/index.tsx#L29-L37',
      icon: <ImgTokenList />,
      text: 'Dynamic token list dropdown',
      title: 'Token dropdown',
    },
    {
      demo: <TokenInputDemo />,
      href: 'https://github.com/BootNodeDev/dAppBooster/blob/a7d0a994f6d5c2a547513669fccb619be046f1d2/src/sharedComponents/TokenInput/index.tsx#L47-L111',
      icon: <ImgTokenInput />,
      text: 'Input with max, user balance, decimals',
      title: 'Token input',
    },
    {
      demo: <SwitchNetworkDemo />,
      href: '#',
      icon: <ImgSwitch />,
      text: 'Add or switch networks',
      title: 'Add / switch network',
    },
    {
      demo: <HashDemo chain={mainnet} hash={address} />,
      href: 'https://github.com/BootNodeDev/dAppBooster/blob/a7d0a994f6d5c2a547513669fccb619be046f1d2/src/sharedComponents/Hash.tsx#L32-L41',
      icon: <ImgHash />,
      text: 'Copy, open in explorer',
      title: 'Hash component',
    },
    {
      demo: <AvatarDemo address={address} size={80} />,
      href: 'https://github.com/BootNodeDev/dAppBooster/blob/a7d0a994f6d5c2a547513669fccb619be046f1d2/src/sharedComponents/Avatar.tsx#L21-L33',
      icon: <ImgAvatar />,
      text: 'Address blockie avatar image',
      title: 'Avatar',
    },
    {
      demo: <SubgraphDemo />,
      href: 'https://github.com/BootNodeDev/dAppBooster#subgraphs',
      icon: <ImgSubgraph />,
      text: 'Support for connecting with subgraphs',
      title: 'Subgraph',
    },
    {
      demo: <SubgraphStatusDemo />,
      href: 'https://github.com/BootNodeDev/dAppBooster#subgraphs',
      icon: <ImgSubgraphStatus />,
      text: 'Subgraph syncing status',
      title: 'Subgraph status',
    },
    {
      demo: <EnsNameDemo />,
      icon: <ImgEns />,
      text: 'Resolve ENS names',
      title: 'ENS name',
    },
    {
      demo: <TransactionButtonDemo />,
      href: 'https://github.com/BootNodeDev/dAppBooster/blob/a7d0a994f6d5c2a547513669fccb619be046f1d2/src/sharedComponents/Web3Buttons/TransactionButton.tsx#L18-L34',
      icon: <ImgTransaction />,
      text: 'Transaction Button',
      title: 'Tx button',
    },
    {
      demo: <ERC20ApproveAndTransferButtonDemo />,
      href: 'https://github.com/BootNodeDev/dAppBooster/blob/a7d0a994f6d5c2a547513669fccb619be046f1d2/src/sharedComponents/Web3Buttons/ERC20ApproveAndTransferButton.tsx#L19-L35',
      icon: <ImgUserCheck />,
      text: 'Combines the approve and transaction button checking allowance in one button',
      title: 'ERC20 approve and transfer',
    },
    {
      demo: <SignMessageDemo />,
      href: 'https://github.com/BootNodeDev/dAppBooster/blob/a7d0a994f6d5c2a547513669fccb619be046f1d2/src/sharedComponents/Web3Buttons/SignButton.tsx#L17-L38',
      icon: <ImgSign />,
      text: 'Sign a message and get the signature',
      title: 'Sign button',
    },
  ]

  return (
    <Wrapper id="examples" {...restProps}>
      <InnerContainer>
        <List items={items} />
      </InnerContainer>
    </Wrapper>
  )
}

export default Examples
