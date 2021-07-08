import { Platform } from 'react-native';

import colors from './colors';

export default { // here we are exporting a default object, which represents dif default styles, can apply to various aspects beyond just text. 
    colors,
    text: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    },
}
