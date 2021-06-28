import React from 'react'
import { Container, Menu , Icon} from 'semantic-ui-react'

export default function Navi() {
    return (
        <div  style={{
            width: "100%",
            height: "100%",
          }}>
            <Menu inverted fixed="top"
        style={{
          position: "static",
          bottom: 0,
          padding: "10px",
          width: "100%",
        }}>
                <Container>
                    <Menu.Item  name='Home' ><Icon name='home' /> Home </Menu.Item>
                       
                    <Menu.Item
                        name='About'
                    />
                    <Menu.Item
                        name='Services'
                    />
                    <Menu.Item
                        name='Contact'
                    />
                </Container>
            </Menu>
        </div>
    )
}
