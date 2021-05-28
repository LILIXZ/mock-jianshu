import styled from 'styled-components';
import logoPic from '../../statics/logo-jianshu.png';
import { Settings } from '@styled-icons/feather';
import {Pencil, Search} from '@styled-icons/boxicons-regular';
import {Refresh} from '@styled-icons/heroicons-outline';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    height: 58px;
    position: absolute;
    top:0;
    left:0;
    display: block;
    width: 100px;
    background:url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100% ;
    padding-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left{
        float: left;
    }
    &.right{
        float:right;
        color: #969696;
    }
    &.active{
        color: #ea6f5a;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: 'Search'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 0px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    color: #666;
    font-size: 14px;
    &::placeholder {
        color: #999;
    }
    &.focused{
        width: 240px;
        +svg{
            background-color: #777;
            color: #fff;
        }
    }
    &.slide-enter{
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width: 240px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width: 160px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    display: none;
    &.focused{
        display: block;
        background: #fff;
    }
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 15px;
    margin-bottom: 15px;
    font-size: 12px;
    border 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    line-height: 38px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    border-radius: 19px;
    border: 1px solid;
    font-size: 14px;
    &.reg{
        color: #ec6149;
    }
    &.writing{
        color: #fff;
        background: #ec6149;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
`;


export const SettingIcon = styled(Settings)`
    display: block;
    height: 25px;
    width: 100px;
    margin-top: 15px;
`;

export const PencilIcon = styled(Pencil)`
    position: relative;
    height: 15px;
`;

export const SearchIcon = styled(Search)`
    position: absolute;
    right: 10px;
    height: 25px;
    bottom: 7px;
    width: 25px;
    line-height: 45px;
    border-radius: 15px;
    text-align: center;
    color: #999;
`;
export const RefreshIcon = styled(Refresh)`
    position: relative;
    height: 15px;
    width: 15px;
    color: #999;
    margin-right: 2px;
    transition: all .2s ease-in;
    transform-origin: center center;
`;