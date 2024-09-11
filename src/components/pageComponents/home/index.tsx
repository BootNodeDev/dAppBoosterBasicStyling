import { Center } from '@chakra-ui/react'

import TokenInput from '@/src/components/sharedComponents/TokenInput'
import { useTokenInput } from '@/src/components/sharedComponents/TokenInput/useTokenInput'
import { useTokenLists } from '@/src/hooks/useTokenLists'
import { useTokenSearch } from '@/src/hooks/useTokenSearch'

export const Home = () => {
  const { tokensByChainId } = useTokenLists()
  const { searchResult } = useTokenSearch({ tokens: tokensByChainId[1], defaultSearchTerm: 'WETH' })
  const tokenInputSingle = useTokenInput(searchResult[0])

  return (
    <Center width="100%">
      <TokenInput currentNetworkId={1} singleToken title="You pay" tokenInput={tokenInputSingle} />
    </Center>
  )
}
