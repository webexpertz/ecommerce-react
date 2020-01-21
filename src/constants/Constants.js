import { Dimensions } from 'react-native'

const Constants = {
  baseWidth: 374,
  baseScale: 2,
  ScreenSize: Dimensions.get('window'),
  Colors:{
    primary: '#e47702',
    secondary: '#027878',
    light: '#9e9e9e',
    overlaytext: '#5f5f5f',
    overlaytextlight: '#c2c2c2',
    overlaytextdark: '#332f2f',
    dark:'#272527',
    outlineButtonText:'#5c5c5c',
    outlineButtonIcon:'#5b5b5b',
    formLabel:'#969696',
    grey:'#efefef',
    white:'#feffff',
    backIcon:'#961819'
    
  },
  FontFamily: {
    regular: 'OpenSans-Regular',
    semibold: 'OpenSans-SemiBold',
    bold: 'OpenSans-Bold'
  },
 FontWeight:{
  heavy: '400'
 },
  FontSize: {
    superTiny: 9,
    tiny: 11,
    small: 13,
    medium: 15,
    big: 18,
    large: 20,
  },
}

export default Constants
