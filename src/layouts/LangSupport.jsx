import React from 'react'
import {Dropdown} from 'semantic-ui-react'

export default function LangSupport() {
    return (
        <div  style={{
            width: "100%",
            height: "100%",
          }}>
           <Dropdown item text='Language'>
                            <Dropdown.Menu>
                                <Dropdown.Item>English</Dropdown.Item>
                                <Dropdown.Item>Russian</Dropdown.Item>
                                <Dropdown.Item>Spanish</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
        </div>
    )
}
