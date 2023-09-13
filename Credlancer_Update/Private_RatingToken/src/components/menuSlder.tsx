import React, { useState } from "react";
import { Sider } from "./layout";
import { Menu, MenuProps } from "antd";
import {
	LaptopOutlined,
	FileProtectOutlined,
	HomeOutlined,
	InsertRowBelowOutlined,
	SwapOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";


type MenuItem = Required<MenuProps>["items"][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem("Survey", "/", <HomeOutlined />),
];

export default function MenuSlder() {
	const navigate = useNavigate();

	const [collapsed, setCollapsed] = useState(false);
	return (
		<Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
			<div style={{display: "flex", justifyContent: "center", alignContent: "center",padding:"18px"}}>
				<img src={"./logo_icon.png"} style={{width: "50%", height: "80px", textAlign: "center"}}/>
			</div>
			<Menu
				theme="dark"
				defaultSelectedKeys={["1"]}
				mode="inline"
				items={items}
				onSelect={value => {
					navigate(value.key);
				}}
			/>
		</Sider>
	);
}
