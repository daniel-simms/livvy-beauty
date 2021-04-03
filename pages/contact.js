import Head from "next/head";
import Layout from "../components/Layout";
import styled from "styled-components";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { Instagram, Phone, Email } from "@material-ui/icons/";

export default function Contact() {
  return (
    <Layout warning="Contact details">
      <Head>
        <title>Contact | Livvy Beauty</title>
        <meta
          name="description"
          content="Contact details for Livvy Beauty."
          key="description"
        />
        <meta name="og:title" content="Contact | Livvy Beauty" key="title" />
      </Head>

      <Container container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <DetailsContainer>
            <Title variant="h4" component="h5">
              How can I help?
            </Title>
            <Typography variant="body">
              Please let me know if there is anything I can help you with; no
              question is a silly one!
            </Typography>
            <Details>
              <DetailsGroup>
                <Instagram /> @livvy_beauty_x
              </DetailsGroup>
              <DetailsGroup>
                <Phone /> 07987654321
              </DetailsGroup>
              <DetailsGroup>
                <Email /> livvy@livvy.beauty
              </DetailsGroup>
            </Details>
          </DetailsContainer>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormContainer>
            <form
              noValidate
              autoComplete="off"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Input id="name" label="Name" />
              <Input id="email" label="Email" />
              <Input id="message" multiline rows={4} label="Message" />
              <Send variant="outlined">Submit</Send>
            </form>
          </FormContainer>
        </Grid>
      </Container>
      <div style={{ height: 80, width: 80 }}></div>
    </Layout>
  );
}

const Input = styled(TextField)`
  &&& {
    margin-bottom: 0.5rem;
  }
`;

const Details = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: space-evenly;
  gap: .2rem;
`;

const DetailsGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled(Grid)`
  justify-content: center;
`;

const FormContainer = styled(Paper)`
  padding: 2rem;
`;

const DetailsContainer = styled(Paper)`
  padding: 2rem;
  height: 100%;
`;

const Title = styled(Typography)`
  &&& {
    margin-bottom: 1rem;
  }
`;

const Send = styled(Button)`
  &&& {
    text-transform: capitalize;
    color: #c83aa8;
    border: 1px solid #c83aa8;
    margin: 2rem 0;
  }
`;
