import styled from 'styled-components'

export const HomeWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const WidthWrapper = styled.div`
    width: 960px;
    box-sizing: border-box;
    display: flex;    
`

export const HomeLeft = styled.div`
    padding-top: 30px;
    width: 680px;
`

export const HomeRight = styled.div`
    padding-top: 30px;
    width: 280px;
`

export const ListItem = styled.div`
    padding: 20px 0 ;
    border-bottom: 1px solid #dcdcdc;
    display: flex
    .picture{
        width: 125px;
        height: 100px;
        display: block;
    }
`

export const ListInfo = styled.div`
    width: 500px;
    .title {
        color: #333;
        font-size: 18px;
        line-height: 27px;
        font- : bold;
    }
    .content {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`

export const NavWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`

export const NavItem = styled.div`
    height: 50px;
    width: 280px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`