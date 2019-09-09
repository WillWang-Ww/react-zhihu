import React ,{ Component } from 'react'
import List from './components/List'
import Navigator from './components/Navigator'
import Writer from './components/Writer'
import DownloadAPP from './components/DownloadAPP'
import {
    HomeWrapper,
    WidthWrapper,
    HomeLeft,
    HomeRight,
} from './style'

class Home extends Component {
    render () {
        return (
            <HomeWrapper>
                <WidthWrapper>
                <HomeLeft>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Navigator></Navigator>
                    <DownloadAPP></DownloadAPP>
                    <Writer></Writer>
                </HomeRight>
                </WidthWrapper>
            </HomeWrapper>
        )
    }
}

export default Home