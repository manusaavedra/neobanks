import { View, Text, Dimensions } from 'react-native';
import {
    LineChart,
    BarChart,
} from "react-native-chart-kit";
import colors from '../Colors';

export function LinearChart() {
    return (
        <View>
            <LineChart
                data={{
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
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
                        r: "5",
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
                data={{
                    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
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
                        r: "5",
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