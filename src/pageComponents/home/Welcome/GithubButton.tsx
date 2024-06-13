import styled from 'styled-components'

import { PrimaryButton } from '@/src/sharedComponents/Buttons'

const Icon = () => (
  <svg fill="none" height="18" viewBox="0 0 18 18" width="18" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.02056 14.3563C6.02056 14.4289 5.9371 14.487 5.83185 14.487C5.7121 14.4978 5.62863 14.4398 5.62863 14.3563C5.62863 14.2837 5.7121 14.2257 5.81734 14.2257C5.92621 14.2148 6.02056 14.2728 6.02056 14.3563ZM4.89194 14.193C4.86653 14.2656 4.93911 14.349 5.04798 14.3708C5.14234 14.4071 5.25121 14.3708 5.27298 14.2982C5.29476 14.2257 5.22581 14.1422 5.11694 14.1095C5.02258 14.0841 4.91734 14.1204 4.89194 14.193ZM6.49597 14.1313C6.39073 14.1567 6.31814 14.2257 6.32903 14.3091C6.33992 14.3817 6.43427 14.4289 6.54315 14.4035C6.64839 14.3781 6.72097 14.3091 6.71008 14.2365C6.69919 14.1676 6.60121 14.1204 6.49597 14.1313ZM8.88387 0.224854C3.8504 0.224854 0 4.04622 0 9.07969C0 13.1043 2.53306 16.5482 6.15121 17.7603C6.61573 17.8438 6.77903 17.5571 6.77903 17.3212C6.77903 17.0962 6.76815 15.8551 6.76815 15.093C6.76815 15.093 4.22782 15.6374 3.69435 14.0115C3.69435 14.0115 3.28065 12.9555 2.68548 12.6833C2.68548 12.6833 1.85444 12.1136 2.74355 12.1245C2.74355 12.1245 3.64718 12.197 4.14435 13.0607C4.93911 14.4615 6.27097 14.0587 6.78992 13.8192C6.87339 13.2386 7.10927 12.8357 7.37056 12.5962C5.34194 12.3712 3.29516 12.0773 3.29516 8.58614C3.29516 7.58816 3.57097 7.08735 4.15161 6.44864C4.05726 6.21276 3.74879 5.24018 4.24597 3.98453C5.00444 3.74864 6.75 4.96437 6.75 4.96437C7.47581 4.76114 8.25605 4.6559 9.02903 4.6559C9.80202 4.6559 10.5823 4.76114 11.3081 4.96437C11.3081 4.96437 13.0536 3.74501 13.8121 3.98453C14.3093 5.24381 14.0008 6.21276 13.9065 6.44864C14.4871 7.09098 14.8427 7.59179 14.8427 8.58614C14.8427 12.0882 12.7052 12.3676 10.6766 12.5962C11.0105 12.8829 11.2935 13.4273 11.2935 14.2801C11.2935 15.5031 11.2827 17.0164 11.2827 17.314C11.2827 17.5499 11.4496 17.8365 11.9105 17.7531C15.5395 16.5482 18 13.1043 18 9.07969C18 4.04622 13.9173 0.224854 8.88387 0.224854ZM3.52742 12.7414C3.48024 12.7777 3.49113 12.8611 3.55282 12.9301C3.61089 12.9882 3.69435 13.0136 3.74153 12.9664C3.78871 12.9301 3.77782 12.8466 3.71613 12.7777C3.65806 12.7196 3.5746 12.6942 3.52742 12.7414ZM3.13548 12.4474C3.11008 12.4946 3.14637 12.5527 3.21895 12.589C3.27702 12.6253 3.3496 12.6144 3.375 12.5636C3.4004 12.5164 3.36411 12.4583 3.29153 12.422C3.21895 12.4003 3.16089 12.4111 3.13548 12.4474ZM4.31129 13.7394C4.25323 13.7865 4.275 13.8954 4.35847 13.9644C4.44194 14.0478 4.54718 14.0587 4.59435 14.0007C4.64153 13.9535 4.61976 13.8446 4.54718 13.7757C4.46734 13.6922 4.35847 13.6813 4.31129 13.7394ZM3.89758 13.2059C3.83952 13.2422 3.83952 13.3365 3.89758 13.42C3.95565 13.5035 4.05363 13.5398 4.10081 13.5035C4.15887 13.4563 4.15887 13.362 4.10081 13.2785C4.05 13.195 3.95565 13.1587 3.89758 13.2059Z"
      fill="currentColor"
    />
  </svg>
)

const Wrapper = styled(PrimaryButton)`
  column-gap: calc(var(--base-gap) * 2);
  font-size: 1.8rem;
  height: 50px;
`

const GithubButton = ({ ...restProps }) => {
  return (
    <Wrapper
      as="a"
      href="https://github.com/bootnodedev/dappbooster/"
      target="_blank"
      {...restProps}
    >
      <Icon />
      Github
    </Wrapper>
  )
}

export default GithubButton
