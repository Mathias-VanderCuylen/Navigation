import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function A(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>A Page</Text>
            <Button title="To page B" onPress={ () => navigation.navigate('B')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ff5',
        alignItems: 'center',
        justifyContent: 'center'
    }
});