import { StyleSheet, Text, View } from 'react-native'; 
import {Logo} from '../Icons';

export default function Header() {
    return (
        <View style={styles.header}>
            <Logo />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 15
    }
})