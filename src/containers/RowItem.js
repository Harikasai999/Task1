import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Button from '../components/Button';
function RowItem({ item, onDelete, onCheck, index, selecting }) {
    return (
        <View style={[styles.container, { backgroundColor: selecting ? "#e4e4e4" : "white" }]}>
            <View style={{ flex: 0.8 }}>
                <Text>{item.name}</Text>
            </View>
            <View style={{ flex: 0.1, alignItems: 'flex-end' }}>
                <Button onPress={() => onDelete(item, index, selecting)}>
                    <Image source={require("@images/delete.png")} style={{ height: 20, width: 20, tintColor: "red" }} />
                </Button>
            </View>
            <View style={{ flex: 0.1, alignItems: 'flex-end' }}>
                <Button onPress={() => onCheck(item, index, selecting)}>
                    {selecting ? (
                        <Image source={require("@images/checked.png")} style={styles.icon} />
                    ) : (
                        <Image source={require("@images/check.png")} style={styles.icon} />
                    )}

                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 45, borderWidth: 1, borderColor: "lightgrey",
        borderRadius: 10, marginHorizontal: 10, marginTop: 10,
        alignItems: 'center', flexDirection: "row",
        paddingHorizontal: 10,
    },
    icon: { height: 20, width: 20, tintColor: "black" }
})
export default React.memo(RowItem)