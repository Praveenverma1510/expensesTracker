import { useState } from "react"
import { View, StyleSheet, StatusBar, Image, Text, Linking } from "react-native"
import { useSelector } from "react-redux"
import { Input, SubItemAdd, SubModelAdd, GoBack, LineButton } from "../components"
import icons from "../constants/icons"
import { FONTS, SIZES } from "../constants/theme"
import logo from '../assets/ic_launcher.jpg'

const About = ({ navigation }) => {
    const { theme } = useSelector(state => state.local);

    const style = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.main,
        },
        body: {
            flex: 1,
        },
        icon: {
            width: 100,
            height: 100,
            alignSelf: "center",
        },
        textMain: {
            color: theme.primary,
            ...FONTS.body3,
        },
        textSecondary: {
            color: theme.textDark,
            ...FONTS.body3,
        },
        pt: {
            paddingTop: SIZES.padding,
        },
        ptSm: {
            paddingTop: SIZES.padding / 2,
        },
        px: {
            paddingHorizontal: SIZES.padding,
        }
    })

    return (
        <View style={style.container}>
            <StatusBar
                backgroundColor="rgba(0,0,0,0.25)"
                translucent={true}
                barStyle="light-content"
            />
            <GoBack navigation={navigation} />
            <View style={style.body}>
                <View style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <Image
                        source={logo}
                        style={style.icon}
                    />
                    <Text style={style.textMain}>Expeses Tracker</Text>
                    <Text style={style.textSecondary}>
                        Version 0.0.1
                    </Text>
                    {/* <Text style={{...FONTS.body4, textAlign:'center'}}>
                    This app lets you keep track of your subscriptions and other expenses.
                </Text> */}
                </View>
                <View style={style.pt}>
                    <Text style={[style.textMain, style.px]}>
                        Links
                    </Text>
                    <View style={style.ptSm}>
                        <LineButton
                            label="View Source Code (GitHub)"
                            onPress={async () => {
                                await Linking.openURL('https://github.com/Praveenverma1510/expensesTracker')
                            }}
                            containerStyle={{
                                paddingVertical: 0
                            }}
                        />
                    </View>
                </View>
                <View style={style.pt}>
                    <Text style={[style.textMain, style.px]}>
                        Developed by
                    </Text>
                    <View style={style.ptSm}>
                        <LineButton
                            label="Praveen Verma"
                            onPress={async () => {
                                await Linking.openURL('https://github.com/Praveenverma1510')
                            }}
                            containerStyle={{
                                paddingVertical: 0
                            }}
                        />
                    </View>
                </View>
                <View style={style.pt}>
                    <Text style={[style.textMain, style.px]}>
                        About
                    </Text>
                    <View style={style.ptSm}>
                        <Text style={[style.px, { ...FONTS.body4, color: theme.textDark }]}>
                            This app lets you keep track of your subscriptions and other expenses.
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default About