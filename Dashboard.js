
import { Text, View, ScrollView } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Header from './components/Header';
import BottomNavBar from './components/BottomNavBar';
import styles from './stylesGlobal';
import colors from './Colors';
import api from './api';
import NavbarTab from './components/NavBarTab';


export default function Dashboard() {
    return (
        <SafeAreaView style={styles.container} forceInset={{ top: 'always' }}>
            <View style={{paddingHorizontal: 25, marginTop: 18}}>
                    <Header />
                    <View>
                        <Text style={{ ...styles.headline1, fontWeight: '400' }}>Transactions history</Text>
                        <Text style={styles.p}>These are your monthly and daily actions. ️📊</Text>
                    </View>
                    <View style={{ ...styles.rowContainer, marginTop: 24 }} >
                        <View style={styles.card}>
                            <Text style={styles.headline2}>Transactions</Text>
                            <Text style={styles.numberIndicator}>{api.lastTrasactionMonth}</Text>
                            <Text style={{ ...styles.p, textTransform: 'uppercase', color: colors.gray }}>Last Month</Text>
                        </View>
                        <View style={styles.card}>
                            <Text style={styles.headline2}>Transactions</Text>
                            <Text style={styles.numberIndicator}>{api.todayTrasaction}</Text>
                            <Text style={{ ...styles.p, textTransform: 'uppercase', color: colors.gray }}>Today</Text>
                        </View>
                    </View>
                    <View style={{ ...styles.boxShadow, marginTop: 24 }}>
                        <Text style={{ ...styles.headline2, fontWeight: '600' }}>Transactions Last Year</Text>
                        <NavbarTab />
                    </View>
            </View>
            <BottomNavBar />
        </SafeAreaView>
    );
}

