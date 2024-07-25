import { type PropsWithChildren, type FC } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'

import { config, WalletProvider, ConnectWalletButton } from '@/src/lib/wallets/connectkit.config'

const queryClient = new QueryClient()

export { ConnectWalletButton }

export const Web3Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WalletProvider>{children}</WalletProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default Web3Provider
