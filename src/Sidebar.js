import React from 'react'
import SidebarRow from './SidebarRow.js'
import './Sidebar.css'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'



function Sidebar() {
	return (
		<div className='sidebar'>
			<SidebarRow src='https://avatars.githubusercontent.com/u/12779122?s=400&u=b3ea9947f59b5121bcf466e1a5fc20dd1320a1ee&v=4' title='Ernexian'/>
			<SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Info Center'/>
			<SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
			<SidebarRow Icon={ChatIcon} title='Messenger'/>
			<SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
			<SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
			<SidebarRow Icon={ExpandMoreOutlined} title='More'/>
		</div>
			
	)
}

export default Sidebar