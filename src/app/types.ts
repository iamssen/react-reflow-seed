export type UserInfo = {
  name: string,
}

export type UserInfoProps = {
  userInfo: UserInfo,
  login: () => void,
  logout: () => void,
}