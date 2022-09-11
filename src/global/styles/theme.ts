import { Dimensions, Platform } from "react-native"

const {height, width} = Dimensions.get('window')

export default {
    colors: {
        primary: '#5DA9E9',
        background: '#FFFFFF',
        shape: '#FFFFFF',
        title: '#363F5F',
        text: '#969CB3',
    },
    fonts: {
        regular: 'Poppins_400Regular',
        medium:  'Poppins_500Medium',
        bold: 'Poppins_700Bold',
    },
    sizes: {
        width: width,
        height: height,
        spacing: 10,
        item_size: Platform.OS === 'ios' ? width * 0.72 : width * 0.74,
        radius: 24,
        radius_2: 34
    }
}