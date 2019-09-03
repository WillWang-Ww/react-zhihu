import React from 'react';
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

const getList = (focused) => {
    if (focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>  
                        <SearchInfoItem href='www.baidu.com'>教育</SearchInfoItem>
                        <SearchInfoItem>C++</SearchInfoItem>
                        <SearchInfoItem>JavaScript</SearchInfoItem>
                        <SearchInfoItem>软件工程</SearchInfoItem>
                    </SearchInfoList>
                </SearchInfo>
            )
    }else{
        return null
    }
}

const Header = (props) => {
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
                    className={props.focused ? 'focused' : '' } 
                    placeholder="搜索"
                    onFocus={props.handleInputFocus} 
                    onBlur={props.handleInputBlur}
                />
                <IconWrapper className={props.focused ? 'wrapperActive' : 'wrapperUnactive'}>
                <svg 
                    aria-hidden="true"
                    className={props.focused ? 'icon iconActive' : 'icon iconUnactive' }
                >
                    <use xlinkHref="#icon-search"></use>
                </svg>
                </IconWrapper>
                {getList(props.focused)}
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

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus () {
            dispatch(actionCreaters.searchFocus())
        },
        handleInputBlur () {
            dispatch(actionCreaters.searchBlur())
        }
    }
}

export default connect (mapStateToProps, mapDispathToProps) (Header)