import { UserDataMap } from '@star-angry/core'
import { MessageMap } from './message'
import { UserModel } from './user'

export interface GameModel {
  version: string // 游戏数据的版本
  user: UserModel[]
  messages: MessageMap
  userDataMap: UserDataMap
}
