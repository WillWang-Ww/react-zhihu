import React ,{ Component } from 'react'
import {connect} from 'react-redux'
import {
    ListItem,
    ListInfo
} from '../style'

class List extends Component {
    render () {
        const { list } = this.props
        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <ListInfo>
                                <h3 className='title'>{item.get('title')}</h3>
                                <p className='content'>{item.get('content')}</p>
                                </ListInfo>
                                <img className='picture' src={item.get('imgUrl')} alt='图片'/>
                            </ListItem>
                        )
                    })
                }
            </div>
            
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home','articleList'])
})

export default connect(mapState)(List)