import { StyleSheet, Text, View } from 'react-native';

export default function C(){
    return (
        <View style={styles.container}>
            <Text>C Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FF0000',
        alignItems: 'center',
        justifyContent: 'center'
    }
});