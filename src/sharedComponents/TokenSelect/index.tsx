import React, { type HTMLAttributes, type ReactElement } from 'react'
import styled from 'styled-components'

import { Card } from 'db-ui-toolkit'
import { mainnet } from 'viem/chains'

import { useTokenSearch } from '@/src/hooks/useTokenSearch'
import { useTokens } from '@/src/hooks/useTokens'
import List from '@/src/sharedComponents/TokenSelect/List'
import Search from '@/src/sharedComponents/TokenSelect/Search'
import TopTokens from '@/src/sharedComponents/TokenSelect/TopTokens'
import { type Token } from '@/src/types/token'

export type Networks = Array<{
  label: string
  onClick: () => void
  id: number
  icon: ReactElement
}>

const Wrapper = styled(Card).attrs(({ className = 'tokenSelectWrapper' }) => ({ className }))`
  background-color: var(--theme-token-select-background-color, var(--theme-card-background-color));
  border-color: var(--theme-token-select-border-color, var(--theme-card-border-color));
  box-shadow: var(--theme-token-select-background-color, var(--theme-card-box-shadow));
  display: flex;
  flex-direction: column;
  padding: calc(var(--base-common-padding) * 5) 0 calc(var(--base-common-padding) * 3);
  row-gap: calc(var(--base-gap) * 3);
  width: 540px;
`

interface Props extends HTMLAttributes<HTMLDivElement> {
  containerHeight?: number
  currentNetworkId?: number
  iconSize?: number
  itemHeight?: number
  networks?: Networks | undefined
  onTokenSelect: (token: Token | undefined) => void
  placeholder?: string
  showTopTokens?: boolean
  showBalance?: boolean
  showValue?: boolean
}

/**
 * TokenSelect component, used to search and select a token from a list.
 *
 * @param {number} [currentNetworkId=mainnet.id] - The current network id. Default is mainnet's id.
 * @param {function} onTokenSelect - Callback function to be called when a token is selected.
 * @param {Networks} [networks] - Optional list of networks to display in the dropdown. The dropdown won't show up if undefined. Default is undefined.
 * @param {string} [placeholder='Search by name or address'] - Optional placeholder text for the search input. Default is 'Search by name or address'.
 * @param {number} [containerHeight=320] - Optional height of the virtualized tokens list. Default is 320.
 * @param {number} [iconSize=32] - Optional size of the token icon in the list. Default is 32.
 * @param {number} [itemHeight=64] - Optional height of each item in the list. Default is 64.
 * @param {boolean} [showBalance=false] - Optional flag to show the token balance in the list. Default is false.
 * @param {boolean} [showValue=false] - Optional flag to show the token value in the list. Default is false.
 * @param {boolean} [showTopTokens=false] - Optional flag to show the top tokens in the list. Default is false.
 *
 * Individual CSS classes are available for deep styling of individual components whitin TokenSelect:
 *
 * Also theme CSS vars are available for cosmetic changes:
 *
 * Main container:
 * * --theme-token-select-background-color (defaults to --theme-card-background-color)
 * * --theme-token-select-border-color (defaults to --theme-card-border-color)
 * * --theme-token-select-box-shadow (defaults to --theme-card-box-shadow)
 *
 * Network select button:
 * * --theme-token-select-network-button-color
 * * --theme-token-select-network-button-color-hover
 * * --theme-token-select-network-button-background-color
 * * --theme-token-select-network-button-background-color-hover
 *
 * List:
 * * --theme-token-select-list-border-top-color
 *
 * List item:
 * * --theme-token-select-row-background-color
 * * --theme-token-select-row-background-color-hover
 * * --theme-token-select-row-token-name-color
 * * --theme-token-select-row-token-name-color-hover
 * * --theme-token-select-row-token-balance-color
 * * --theme-token-select-row-token-balance-color-hover
 * * --theme-token-select-row-token-value-color
 * * --theme-token-select-row-token-value-color-hover
 *
 * Top tokens:
 * * --theme-token-select-top-token-item-color
 * * --theme-token-select-top-token-item-color-hover
 * * --theme-token-select-top-token-item-background-color
 * * --theme-token-select-top-token-item-background-color-hover
 * * --theme-token-select-top-token-item-border-color
 * * --theme-token-select-top-token-item-border-color-hover
 *
 * Search field:
 * * --theme-token-select-search-field-color
 * * --theme-token-select-search-field-color-active
 * * --theme-token-select-search-field-background-color
 * * --theme-token-select-search-field-background-color-active
 * * --theme-token-select-search-field-placeholder-color
 * * --theme-token-select-search-field-box-shadow
 * * --theme-token-select-search-field-box-shadow-active
 * * --theme-token-select-search-field-border-color
 * * --theme-token-select-search-field-border-color-active
 */
const TokenSelect: React.FC<Props> = ({
  containerHeight = 320,
  currentNetworkId = mainnet.id,
  iconSize = 32,
  itemHeight = 64,
  networks = undefined,
  onTokenSelect,
  placeholder = 'Search by name or address',
  showBalance = false,
  showTopTokens = false,
  showValue = false,
  ...restProps
}) => {
  const { tokensByChainId } = useTokens()
  const { searchResult, searchTerm, setSearchTerm } = useTokenSearch(
    tokensByChainId[currentNetworkId],
  )

  return (
    <Wrapper {...restProps}>
      <Search
        currentNetworkId={currentNetworkId}
        networks={networks}
        placeholder={placeholder}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      {showTopTokens && (
        <TopTokens onTokenSelect={onTokenSelect} tokens={tokensByChainId[currentNetworkId]} />
      )}
      <List
        containerHeight={containerHeight}
        iconSize={iconSize}
        itemHeight={itemHeight}
        onTokenSelect={onTokenSelect}
        showBalance={showBalance}
        showValue={showValue}
        tokenList={searchResult}
      />
    </Wrapper>
  )
}

export default TokenSelect
