import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SidebarItem } from '../models/SidebarItem';

type SidebarLinkProps = {
    item: SidebarItem;
};

const SidebarLink = styled(Link)`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.75rem;
    font-size: 0.965rem;
    padding: 2rem;
    text-decoration: none;
    color: #b1b7c1;

    &:hover {
        background-color: #46546c;
        border-left: 4px solid #b1b7c1;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 1rem;
`;

const DropdownLink = styled(Link)`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 3.75rem;
    font-size: 0.965rem;
    padding-left: 3rem;
    text-decoration: none;
    color: #b1b7c1;

    &:hover {
        background-color: #3b4659;
    }
`;

const Submenu: FC<SidebarLinkProps> = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={item.path} onClick={showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>{item?.subnav && subnav ? item?.iconOpened : item?.iconClosed}</div>
            </SidebarLink>
            {subnav &&
                item?.subnav?.map((subnavItem, index) => {
                    return (
                        <DropdownLink to={subnavItem.path} key={index}>
                            {subnavItem.icon}
                            <SidebarLabel>{subnavItem.title}</SidebarLabel>
                        </DropdownLink>
                    );
                })}
        </>
    );
};

export default Submenu;
