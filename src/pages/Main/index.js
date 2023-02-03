import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {} from '../../assets'
import { customColors } from '../../utils'
import { MenuItem } from '../../components'
import { Home, Explore, Saved, Chats, Profile } from '../../pages'

const Main = () => {
    const [page, setPage] = useState(1)

    const BottomNav = () => {
        return (
            <View style={styles.bottomNav}>
                <MenuItem
                    title={"Home"}
                    icon={"home"}
                    active={page == 1}
                    onPress={() => setPage(1)}
                />
                <MenuItem
                    title={"Explore"}
                    icon={"explore"}
                    active={page == 2}
                    onPress={() => setPage(2)}
                />
                <MenuItem
                    title={"Saved"}
                    icon={"saved"}
                    active={page == 3}
                    onPress={() => setPage(3)}
                />
                <MenuItem
                    title={"Chats"}
                    icon={"chats"}
                    active={page == 4}
                    onPress={() => setPage(4)}
                />
                <MenuItem
                    title={"Profile"}
                    icon={"profile"}
                    active={page == 5}
                    onPress={() => setPage(5)}
                />
            </View>
        )
    }

    const RenderContent = () => {
        return page == 1 ? <Home/>
        : page == 2 ? <Explore/>
        : page == 3 ? <Saved/>
        : page == 4 ? <Chats/> : <Profile/>
    }

    return (
        <View style={styles.container}>
            <RenderContent/>
            <BottomNav/>
        </View>
    )
}

export default Main

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: customColors.def.white
    },
    bottomNav: {
        width: '100%',
        height: 71,
        elevation: 24,
        backgroundColor: customColors.def.white,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})