import { type FC, type HTMLAttributes } from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.svg`
  display: block;
  flex-shrink: 0;
`

const Icon: FC<HTMLAttributes<SVGElement>> = ({ ...restProps }) => (
  <Wrapper
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      d="M20.25 4.07324H12.75V2.57324C12.75 2.37433 12.671 2.18356 12.5303 2.04291C12.3897 1.90226 12.1989 1.82324 12 1.82324C11.8011 1.82324 11.6103 1.90226 11.4697 2.04291C11.329 2.18356 11.25 2.37433 11.25 2.57324V4.07324H3.75C3.35218 4.07324 2.97064 4.23128 2.68934 4.51258C2.40804 4.79389 2.25 5.17542 2.25 5.57324V16.8232C2.25 17.2211 2.40804 17.6026 2.68934 17.8839C2.97064 18.1652 3.35218 18.3232 3.75 18.3232H7.44L5.41406 20.8545C5.28974 21.0099 5.23225 21.2083 5.25422 21.4061C5.2762 21.6039 5.37585 21.7849 5.53125 21.9092C5.68665 22.0335 5.88507 22.091 6.08286 22.069C6.28066 22.047 6.46162 21.9474 6.58594 21.792L9.36 18.3232H14.64L17.4141 21.792C17.4756 21.8689 17.5517 21.933 17.638 21.9805C17.7244 22.0281 17.8192 22.0581 17.9171 22.069C18.0151 22.0799 18.1142 22.0714 18.2088 22.044C18.3035 22.0165 18.3918 21.9707 18.4688 21.9092C18.5457 21.8476 18.6098 21.7715 18.6573 21.6852C18.7048 21.5989 18.7349 21.504 18.7458 21.4061C18.7567 21.3082 18.7481 21.209 18.7207 21.1144C18.6933 21.0198 18.6475 20.9314 18.5859 20.8545L16.56 18.3232H20.25C20.6478 18.3232 21.0294 18.1652 21.3107 17.8839C21.592 17.6026 21.75 17.2211 21.75 16.8232V5.57324C21.75 5.17542 21.592 4.79389 21.3107 4.51258C21.0294 4.23128 20.6478 4.07324 20.25 4.07324ZM20.25 16.8232H3.75V5.57324H20.25V16.8232ZM9.75 11.5732V13.8232C9.75 14.0222 9.67098 14.2129 9.53033 14.3536C9.38968 14.4942 9.19891 14.5732 9 14.5732C8.80109 14.5732 8.61032 14.4942 8.46967 14.3536C8.32902 14.2129 8.25 14.0222 8.25 13.8232V11.5732C8.25 11.3743 8.32902 11.1836 8.46967 11.0429C8.61032 10.9023 8.80109 10.8232 9 10.8232C9.19891 10.8232 9.38968 10.9023 9.53033 11.0429C9.67098 11.1836 9.75 11.3743 9.75 11.5732ZM12.75 10.0732V13.8232C12.75 14.0222 12.671 14.2129 12.5303 14.3536C12.3897 14.4942 12.1989 14.5732 12 14.5732C11.8011 14.5732 11.6103 14.4942 11.4697 14.3536C11.329 14.2129 11.25 14.0222 11.25 13.8232V10.0732C11.25 9.87433 11.329 9.68357 11.4697 9.54291C11.6103 9.40226 11.8011 9.32324 12 9.32324C12.1989 9.32324 12.3897 9.40226 12.5303 9.54291C12.671 9.68357 12.75 9.87433 12.75 10.0732ZM15.75 8.57324V13.8232C15.75 14.0222 15.671 14.2129 15.5303 14.3536C15.3897 14.4942 15.1989 14.5732 15 14.5732C14.8011 14.5732 14.6103 14.4942 14.4697 14.3536C14.329 14.2129 14.25 14.0222 14.25 13.8232V8.57324C14.25 8.37433 14.329 8.18357 14.4697 8.04291C14.6103 7.90226 14.8011 7.82324 15 7.82324C15.1989 7.82324 15.3897 7.90226 15.5303 8.04291C15.671 8.18357 15.75 8.37433 15.75 8.57324Z"
      fill="currentColor"
    />
  </Wrapper>
)

export default Icon
