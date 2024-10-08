import { type ReactNode, useRef } from 'react'
import styled from 'styled-components'

import { useVirtualizer } from '@tanstack/react-virtual'

const Wrapper = styled.div<{ $containerHeight: number }>`
  height: ${({ $containerHeight }) => `${$containerHeight}px`};
  overflow: auto;
  width: 100%;
`

const Items = styled.div<{ height: number | string }>`
  height: ${({ height }) => `${height}px`};
  position: relative;
  width: 100%;
`

const VisibleItems = styled.div<{ height: number | string; start: number }>`
  height: ${({ height }) => `${height}px`};
  left: 0;
  position: absolute;
  top: 0;
  transform: ${({ start }) => `translateY(${start}px)`};
  width: 100%;
`

type VirtualizedListProps<Item> = {
  containerHeight: number
  itemHeight: number
  items: Array<Item>
  renderItem: (item: Item) => ReactNode
}

const VirtualizedList = <Item,>({
  containerHeight,
  itemHeight,
  items,
  renderItem,
  ...restProps
}: VirtualizedListProps<Item>) => {
  const parentRef = useRef(null)

  const rowVirtualizer = useVirtualizer({
    count: items.length,
    estimateSize: () => itemHeight,
    getScrollElement: () => parentRef.current,
    overscan: 5,
  })

  return (
    <Wrapper $containerHeight={containerHeight} ref={parentRef} {...restProps}>
      <Items height={rowVirtualizer.getTotalSize()}>
        {rowVirtualizer.getVirtualItems().map(({ index, key, size, start }) => (
          <VisibleItems height={size} key={key} start={start}>
            {renderItem(items[index])}
          </VisibleItems>
        ))}
      </Items>
    </Wrapper>
  )
}

export default VirtualizedList
