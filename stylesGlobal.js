import colors from './Colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    rowContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    container: {
        flex: 1,
    },
    p: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 12
    },
    headline1: {
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 31.68
    },
    headline2: {
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 20
    },
    numberIndicator: {
        fontSize: 48,
        fontWeight: '500',
        lineHeight: 60,
        color: colors.secondaryColor
    },
    card: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 24,
        paddingVertical: 15,
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 15,
        overflow: 'hidden'
    }, 
    boxShadow: {
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: colors.white,
        shadowColor: colors.black,
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 15,
        overflow: 'hidden'
    }
});

export default styles;