import React from 'react';
import './Sidebar.css';

// component
import SidebarRow from './SidebarRow.js'


// icons
import {
    LocalHospital,
    EmojiFlags,
    People,
    Chat,
    Storefront,
    VideoLibrary,
    ExpandMoreOutlined
} from '@material-ui/icons'

const Sidebar = () => {
    

    return (
        <div className="sidebar">
            <SidebarRow src='https://ogimg.infoglobo.com.br/in/13405454-d0b-3c1/FT1086A/2006-066836-_20060809.jpg' title='Foguinho' />
            <SidebarRow Icon={LocalHospital} title='COVID-19 Informações' />
            <SidebarRow Icon={EmojiFlags} title='Páginas' />
            <SidebarRow Icon={People} title='Amigos' />
            <SidebarRow Icon={Chat} title='Messenger' />
            <SidebarRow Icon={Storefront} title='Marketplace' />
            <SidebarRow Icon={VideoLibrary} title='Vídeos' />
            <SidebarRow Icon={ExpandMoreOutlined} title='Mais' />
        </div>
    )
}

export default Sidebar;