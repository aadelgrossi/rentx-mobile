import { showMessage } from 'react-native-flash-message'

export const authErrorMessage = (message: string): void => {
  showMessage({
    message,
    type: 'danger',
    duration: 2500,
    style: {
      height: 50,
      paddingTop: 15,
      alignItems: 'center'
    },
    titleStyle: {
      fontFamily: 'inter-400'
    }
  })
}
