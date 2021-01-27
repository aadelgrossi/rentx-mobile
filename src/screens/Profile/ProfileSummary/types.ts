import { CompositeNavigationProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { AppRoutesParamList, TabRoutesParamList } from '~/navigation/types'

export interface ProfileScreenProps {
  navigation: CompositeNavigationProp<
    StackNavigationProp<TabRoutesParamList, 'Profile'>,
    StackNavigationProp<AppRoutesParamList>
  >
}
