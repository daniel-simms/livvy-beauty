import Layout from "../components/Layout";
import styled from "styled-components";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core/";

import data from "../data/treatments";
import Head from "next/head";

export async function getStaticProps() {
  return {
    props: {
      treatments: data,
    },
  };
}

export default function Treatments({ treatments }) {
  return (
    <Layout>
      <Head>
        <title>Treatments | Livvy Beauty</title>
        <meta
          name="description"
          content="Treatments provided by Livvy Beauty."
          key="description"
        />
        <meta name="og:title" content='Treatments | Livvy Beauty' key="title" />
      </Head>
      <h1 style={{ margin: 0 }}>Treatments</h1>

      <TreatmentList container spacing={3}>
        {treatments.map((treatment) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={treatment.id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  image={treatment.thumbnail}
                  title="Contemplative Reptile"
                  style={{ height: 140 }}
                />
                <CardContent>
                  <Title>{treatment.name}</Title>
                  <Price>£{treatment.price}</Price>
                  {/* <Description>
                Threading is a method of hair removal originating in India and
                Central Asia. In more recent times it has gained popularity in
                Western countries.
              </Description> */}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </TreatmentList>
      <div style={{ height: 80, width: 80 }}></div>
    </Layout>
  );
}

const TreatmentList = styled(Grid)``;

const Title = styled.h2`
  margin: 5px 0;
`;

const Description = styled.p`
  line-height: 1.25rem;
  color: grey;
  margin-bottom: 0;
`;

const Price = styled.h3`
  margin: 0;
  color: #c83aa8;
`;
