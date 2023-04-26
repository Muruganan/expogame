import React, {useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList, Image, Pressable, Dimensions, ToastAndroid} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useIsFocused} from "@react-navigation/native";
import {getGameListApi} from "./api/slice/getGameListSlice";
import {MovieModel} from "./model/movieModel";

const GameList = ({navigation}: { navigation: any }) => {
    const getGameList = useSelector((state: any) => state.getGameList);
    const dispatch = useDispatch();
    const isFocused = useIsFocused();


    useEffect(() => {
        if (isFocused) {
            dispatch(getGameListApi());
        }
    }, [isFocused])

    function getImage(item: MovieModel): string {
        const segments: string[] = item.steamUrl.split("https://store.steampowered.com/app/");
        return "https://steamcdn-a.akamaihd.net/steam/apps/" + segments[1] + "/library_600x900_2x.jpg";
    }

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <FlatList
                data={getGameList.data}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => (
                    <Pressable onPress={() =>
                        // navigation.navigate('GameDetailView', {getImage: getImage(item)})
                    {
                        ToastAndroid.show(item.title, ToastAndroid.LONG,)
                    }
                    }>
                        <View style={styles.card}>
                            <Image source={{uri: getImage(item)}} style={{width: 100, height: 150}}/>
                            <View style={styles.contentCard}>
                                <Text style={styles.contentTitle}>{item.title}</Text>
                                <Text style={styles.conSubTitle}>{item.publisher}</Text>
                                <Text style={styles.conSubTitle}>{item.genre}</Text>
                                <Text style={styles.conStatus}>{item.status}</Text>
                            </View>
                        </View>
                    </Pressable>
                )}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        width: Dimensions.get('window').width - 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: "row"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    contentCard: {
        // justifyContent: 'center',
        justifyContent: 'space-evenly',
        marginVertical: 20,
        marginLeft: 10,
        marginRight: 50,
        width: '70%',
        flexWrap: "wrap"
    },
    contentTitle: {
        fontSize: 18,
        width: '90%',
        fontWeight: 'bold',
        flexWrap: "wrap"
    },
    conSubTitle: {
        fontSize: 16, width: '90%'
    },
    conStatus: {
        width: '40%',
        borderRadius: 5,
        paddingHorizontal: 5,
        alignItems: 'center',
        padding: 3,
        backgroundColor: 'green',
        fontSize: 16,
        color: 'white'
    }
});

export default GameList;



