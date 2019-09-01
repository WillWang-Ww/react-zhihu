import styled from 'styled-components';
import LogoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.a`
    height: 56px;
    width: 100px;
    display: block;
    background: url(${LogoPic});
    background-size: contain;
`

export const Nav = styled.div`
    width: 960px;
    margin: 0 auto;
    display: flex;
`

export const NavItem = styled.div`
    padding: 15px;
    line-height: 26px;
    white-space: nowrap;
    &.rightFlow{
        margin-left: auto;
    }
    &.navLight{
        color: #969696;
    }
    &.orange{
        color: #ea6f5a;
    }
    &.flex{
        display:flex;
        justify-content: center;
        align-items: center;
    }
`
export const SearchWrapper = styled.div`
    position: relative;
    display:flex;
    justify-content: center;
    align-items: center;
    margin: 0px 40px 0px 20px;
    
`
export const NavSearch = styled.input`
    width: 200px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    padding: 0px 40px 0px 20px;
    font-size: 14px;
    background-color: #eee;
    color: #666;
    transition: all 0.3s;
    &.focused {
        width:260px;
    }
`

export const IconWrapper = styled.div`
    position: absolute;
    right: 4px;
    padding: 5px 5px;
    border-radius: 100%;
    &.wrapperUnactive{
        background-color: #eee;
    }
    &.wrapperActive{
        background-color: #999;
    }
    .iconUnactive{
        fill: #999;       
    }
    .iconActive{
        fill: white;
    }
`

export const Addition = styled.div`
    height:56px;
    display: flex;
    flex-wrap: nowrap;
`

export const Button = styled.button`
    display: inline-block;
    font-weight: 400;
    text-align: center;
    height:38px;
    line-height: 24px;
    border-radius: 20px;
    font-size: 15px;
    margin: 9px 5px 0 15px; 
    &.sign-up{
        width:80px;
        border: 1px solid rgba(236,97,73,.7);
        color: #ec6149;
        background-color: transparent;
    }
    &.write{
        display:flex;
        justify-content: center;
        align-items: center;
        width:100px;
        border: 1px solid rgba(236,97,73,.7);
        color: #fff;
        background-color: #ec6149;
    }
`

