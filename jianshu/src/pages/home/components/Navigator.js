import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import {
    NavWrapper,
    NavItem
} from '../style'

class Navigator extends Component {
    render () {
        return (
            <NavWrapper>
                {
                    this.props.list.map((item) => {
                        return <NavItem imgUrl={item.get('imgUrl')} key={item.get('id')}></NavItem>
                    })
                }
            </NavWrapper>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home','NavList'])
})

export default connect(mapState,null)(Navigator)