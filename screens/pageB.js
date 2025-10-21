import { StyleSheet, Text, View } from 'react-native';

export default function B(){
    return (
        <View style={styles.container}>
            <Text>B Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#00FFFF',
        alignItems: 'center',
        justifyContent: 'center'
    }
});