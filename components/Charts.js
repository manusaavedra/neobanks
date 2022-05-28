import { View, Text, Dimensions } from 'react-native';
import {
    LineChart,
    BarChart,
} from "react-native-chart-kit";
import colors from '../Colors';
import api from '../api';

export function LinearChart() {
    return (
        <View>
            <LineChart
                data={api.chartMonthly}
                width={Dimensions.get("window").width - 30}
                height={220}
                yAxisInterval={1}
                chartConfig={{
                    backgroundColor: colors.black,
                    backgroundGradientFrom: colors.white,
                    backgroundGradientTo: colors.white,
                    decimalPlaces: 0,
                    color: (opacity = 1) => colors.lightGray,
                    labelColor: (opacity = 1) => colors.gray,
                    style: {
                        borderRadius: 0,
                    },
                    propsForHorizontalLabels: {
                        fill: colors.gray,
                        translateX: -30
                    },
                    propsForDots: {
                        r: "7",
                        strokeWidth: "2",
                        fill: colors.secondaryColor,
                        stroke: colors.white
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderColor: "#000",
                    borderRadius: 10,
                }}
            />
        </View>
    )
}

export function BarGraph() {
    return (
        <View>
            <BarChart
                data={api.chartDaily}
                width={Dimensions.get("window").width - 30}
                height={220}
                yAxisInterval={1}
                chartConfig={{
                    backgroundColor: colors.black,
                    backgroundGradientFrom: colors.white,
                    backgroundGradientTo: colors.white,
                    decimalPlaces: 0,
                    color: (opacity = 1) => colors.gray,
                    labelColor: (opacity = 1) => colors.gray,
                    style: {
                        borderRadius: 0,
                    },
                    propsForHorizontalLabels: {
                        fill: colors.gray,
                        translateX: -30
                    },
                    propsForDots: {
                        r: "7",
                        strokeWidth: "2",
                        fill: colors.secondaryColor,
                        stroke: colors.white
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderColor: "#000",
                    borderRadius: 10,
                }}
            />
        </View>
    )
}