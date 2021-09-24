import React, { useState, useCallback } from 'react'
import { StyleSheet, Text, View, FlatList, Image, Alert, ScrollView } from 'react-native'
import TextField from '../components/TextField'
import Button from '../components/Button';
import RowItem from './RowItem'
export default function TodoList() {
    const [value, setValue] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [selectList, setSelectList] = useState([]);

    function onAddData() {
        var obj = {
            id: '_' + Math.random().toString(36).substr(2, 9),
            name: value
        }
        if (value) {
            setTodoList([obj, ...todoList])
            setValue("")
        } else {
            alert("Please enter text")
        }
    }
    const onCheck = useCallback((item, index, selecting) => {
        if (selecting) {
            selectList.splice(index, 1);
            setSelectList([...selectList])
            setTodoList([item, ...todoList])
        } else {
            todoList.splice(index, 1);
            setTodoList([...todoList])
            setSelectList([item, ...selectList])
        }

    }, [todoList, selectList])
    const onDelete = useCallback((item, index, selecting) => {

        Alert.alert(
            "Alert",
            "Are you sure you want to delete item?",
            [
                {
                    text: "Cancel",


                },
                {
                    text: "OK", onPress: () => {
                        if (selecting) {
                            selectList.splice(index, 1);
                            setSelectList([...selectList])

                        } else {
                            todoList.splice(index, 1);
                            setTodoList([...todoList])
                        }

                    }
                }
            ]
        );
    }, [todoList, selectList])

    const _renderItem = ({ item, index }) => (
        <RowItem item={item} onDelete={onDelete} onCheck={onCheck} index={index} />
    );
    const _renderItemSelect = ({ item, index }) => (
        <RowItem item={item} onDelete={onDelete} onCheck={onCheck} index={index} selecting />
    );

    return (
        <View style={styles.container}>

            <View style={styles.textBox}>

                <View style={{ flex: 0.9 }}>
                    <TextField
                        placeholder="Type here..."
                        value={value}
                        onChangeText={setValue}
                    />
                </View>

                <View style={{ flex: 0.1, alignItems: 'flex-end' }}>
                    <Button onPress={() => onAddData()}>

                        <Image source={require("@images/plus.png")} style={{ height: 25, width: 25, tintColor: "green" }} />
                    </Button>
                </View>

            </View>



            {(todoList && todoList.length > 0) || (selectList && selectList.length) > 0 ? (
                <View>
                    {todoList && todoList.length > 0 ? (
                        <FlatList
                            data={todoList}
                            renderItem={_renderItem}
                            keyExtractor={item => item.id}
                        />
                    ) : (
                        <Text style={{ textAlign: 'center' }}>No data</Text>
                    )}
                    <View style={{ borderBottomWidth: 1, borderColor: "lightgrey", margin: 20 }} />
                    {selectList && selectList.length > 0 ? (
                        <FlatList
                            data={selectList}
                            renderItem={_renderItemSelect}
                            keyExtractor={item => item.id}
                        />) : (
                        <Text style={{ textAlign: 'center' }}>No data</Text>
                    )}
                </View>
            ) : (
                <Text style={{ textAlign: 'center' }}>No data</Text>
            )}



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textBox: {
        height: 45, borderWidth: 1, borderColor: "lightgrey",
        borderRadius: 10, margin: 10,
        alignItems: 'center', flexDirection: "row",
        paddingHorizontal: 10,
        backgroundColor: "#e4e4e4"
    }
})
