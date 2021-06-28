import React from 'react'
import { Container, Grid, Header, List, Segment } from 'semantic-ui-react'

export default function Footer() {
  return (
    <div>
      <Segment inverted
        vertical
        style={{
          position: "static",
          bottom: 0,
          padding: "80px",
          width: "100%",
        }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={7}>
                <Header as='h4' inverted>
                  Teknik Destek Grubu
                </Header>
                <p>TDG, kurulduğu 2000 yılından bu yana Türkiye'nin ilk ve tek "Bilimsel Ölçme Sistemleri" üreticisidir.</p>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as='h4' content='About' />
                <List link inverted>
                  <List.Item as='a'>Sitemap</List.Item>
                  <List.Item as='a'>Contact Us</List.Item>
                  <List.Item as='a'>Religious Ceremonies</List.Item>
                  <List.Item as='a'>Gazebo Plans</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header inverted as='h4' content='Services' />
                <List link inverted>
                  <List.Item as='a'>Banana Pre-Order</List.Item>
                  <List.Item as='a'>DNA FAQ</List.Item>
                  <List.Item as='a'>How To Access</List.Item>
                  <List.Item as='a'>Favorite X-Men</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <br></br><br></br>
          <p> Tüm hakları saklı falan değildir. 💗 ve ☕ ile yapıldı!</p>
          <p> Powered by Kübra Nur BAYINDIR.</p>
        </Container>
      </Segment>
    </div>
  )
}
