import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { actionCreaters } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoItem,
    SearchInfoSwitch,
    SearchInfoList,
    IconWrapper
} from './style';

class Header extends Component {

    getList = () => {
        const {focused , list, page, totalPage, handleMouseEnter, handleMouseLeave, mouseIn ,handleChangePage} = this.props
        const newList = list.toJS()
        const pageList = []
        if (newList.length){
            for(let i = (page * 10) ; i < ( page + 1 ) * 10 ; i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter = {handleMouseEnter}
                    onMouseLeave = {handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage ,this.spinIcon)}>
                            <svg ref={(icon) => {this.spinIcon = icon}} className="icon spin" aria-hidden="true">
                                <use xlinkHref="#icon-spin"></use>
                            </svg>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>  
                    {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null
        }
    }

    render() {
        const { focused ,handleInputFocus,handleInputBlur} = this.props
        return (
        <HeaderWrapper>
            <Logo href='/' />
            <Nav>
                <NavItem className='orange flex'>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-zhinanzhen"></use>
                    </svg> 
                    首页
                </NavItem> 
                <NavItem className='flex'>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-shoujixiazai"></use>
                    </svg>
                    下载APP
                </NavItem> 
                <SearchWrapper>
                    <NavSearch 
                        className={focused ? 'focused' : '' } 
                        placeholder="搜索"
                        onFocus={handleInputFocus} 
                        onBlur={handleInputBlur}
                    />
                    <IconWrapper className={focused ? 'wrapperActive' : 'wrapperUnactive'}>
                    <svg 
                        aria-hidden="true"
                        className={focused ? 'icon iconActive' : 'icon iconUnactive' }
                    >
                        <use xlinkHref="#icon-search"></use>
                    </svg>
                    </IconWrapper>
                    {this.getList(focused)}
                </SearchWrapper>
                <NavItem className='rightFlow navLight'>Aa</NavItem>                     
                <NavItem className='navLight'>登录</NavItem> 
            </Nav>
            <Addition>
                <Button className='sign-up'>注册</Button>
                <Button className='write flex'>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-write"></use>
                    </svg>
                    写文章
                </Button>
            </Addition>
        </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused']) ,
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage: state.getIn(['header','totalPage'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus () {
            dispatch(actionCreaters.getList())
            dispatch(actionCreaters.searchFocus())
        },
        handleInputBlur () {
            dispatch(actionCreaters.searchBlur())
        },
        handleMouseEnter () {
            dispatch(actionCreaters.mouseEnter())
            console.log('in')
        },
        handleMouseLeave () {
            dispatch(actionCreaters.mouseLeave())
            console.log('out')
        },
        handleChangePage (page,totalPage,spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
            if (originAngle) {
                originAngle = parseInt(originAngle,10)
            }else{
                originAngle = 0
            }

            spin.style.transform = 'rotate(' + (originAngle + 360 ) + 'deg)'
            if (page+1 < totalPage) {
                dispatch(actionCreaters.changePage( page + 1 ))
            }else{
                dispatch(actionCreaters.changePage(1))
            }
        }
    }
}

export default connect (mapStateToProps, mapDispathToProps) (Header)