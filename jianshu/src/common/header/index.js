import React from 'react';
import { connect } from 'react-redux';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    IconWrapper
} from './style';

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
        focused: state.focused
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus () {
            const action = {
                type: 'search_focus'
            };
            dispatch(action)
        },
        handleInputBlur () {
            const action = {
                type: 'search_blur'
            };
            dispatch(action)
        }
    }
}

export default connect (mapStateToProps, mapDispathToProps) (Header)