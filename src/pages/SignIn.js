import React from 'react';
import { Container, Grid, Panel, Row, Col } from 'rsuite';

const SignIn = () => {
  return (
    <Container>
      <Grid>
        <Row>
          <Col xs={24} md={12}>
            <Panel>
              <div>
                <h2>welcome to chat</h2>
                <p>progressive chat platfrom for neophytes</p>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
