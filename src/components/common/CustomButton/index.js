import React from 'react'
import { View, Text, TextInput, Touchable, TouchableOpacity, ActivityIndicator } from 'react-native'
import colors from '../../../assets/theme/colors'
import styles from './styles'

const Input = ({title , secondary, primary, danger, disabled, loading , onPress
}) => {
    const [focused, setFocused] = React.useState(false);

    const getBgColor=()=>{

        if(disabled){
            return colors.grey;
        }

        if(primary){
            return colors.primary;
        }
        if(danger){
            return colors.danger;
        }

        if(secondary){
            return colors.secondary;
        }
    }
    
    return (
        <TouchableOpacity 
        disabled={disabled} 
        onPress={onPress}
        style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
        <View style={[styles.loaderSection]}>
            {loading && <ActivityIndicator color={loading? colors.primary:colors.secondary}/>}
            {title && <Text style={{color:disabled?"black":colors.white, paddingLeft:loading?5:0}}>{title}</Text>}
        </View>
        </TouchableOpacity>
    )
}

export default Input
