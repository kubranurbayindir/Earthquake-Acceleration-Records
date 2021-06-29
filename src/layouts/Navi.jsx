import React from 'react'
import LangSupport from "./LangSupport.jsx";
import { Container, Menu, Icon } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div >
            <Menu inverted fixed="top"
                style={{
                    position: "static",
                    bottom: 0,
                    padding: "10px",
                    width: "100%",
                }}>
                <Container>
                    <Menu.Item name='Home' ><Icon name='home' /> Home </Menu.Item>

                    <Menu.Item
                        name='About'
                    />
                    <Menu.Item
                        name='Contact'
                    />
                    <Menu.Menu position='right'>
                        <LangSupport />
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
