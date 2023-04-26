import React from 'react';
import {SafeAreaView, Image} from 'react-native';

function GameDetailView({route}:{route: any}) {
    console.log("Passed value.", route.params)
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Image source={{uri: route.params.getImage}} style={{width: 300, height: 450}}/>
        </SafeAreaView>
    );
}

export default GameDetailView;


