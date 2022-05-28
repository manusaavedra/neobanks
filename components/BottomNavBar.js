import {TouchableOpacity, View, StyleSheet, Dimensions} from 'react-native';
import {GraphIcon, CompassIcon, UserIcon} from '../Icons';
import colors from '../Colors'; 

export default  function BottomNavbar() {
    return (
        <View style={styles.navbar}>
            <TouchableOpacity>
                <GraphIcon />
            </TouchableOpacity>
            <TouchableOpacity>
                <CompassIcon />
            </TouchableOpacity>
            <TouchableOpacity>
                <UserIcon />
            </TouchableOpacity>
        </View>
    )
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    navbar: {
        position: 'absolute',
        bottom: 15,
        alignSelf: 'center',
        width: width - 20,
        height: 62,
        backgroundColor: colors.primaryColor, 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        borderRadius: 31
    }
})