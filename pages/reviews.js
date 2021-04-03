import Head from "next/head";
import Layout from "../components/Layout";
import {
  Grid,
  Card,
  Avatar,
  CardContent,
  CardHeader,
} from "@material-ui/core/";
import { Rating } from "@material-ui/lab/";
import styled from "styled-components";

import data from "../data/reviews";

export async function getStaticProps() {
  return {
    props: {
      reviews: data,
    },
  };
}

export default function Reviews({ reviews }) {
  return (
    <Layout warning='Reviews'>
      <Head>
        <title>Reviews | Livvy Beauty</title>
        <meta
          name="description"
          content="Reviews from the customers of Livvy Beauty."
          key="description"
        />
        <meta name="og:title" content="Reviews | Livvy Beauty" key="title" />
      </Head>
      <h1 style={{ margin: 0 }}>Reviews</h1>

      <ReviewList container spacing={3}>
        {reviews.map((review) => (
          <Grid item xs={12} md={6} lg={4} key={review.id}>
            <Card>
              <Reviewer
                title={review.name}
                subheader={
                  <Rating name="read-only" value={5} size="small" readOnly />
                }
                avatar={
                  <ReviewerAvatar aria-label="recipe">
                    {review.name.charAt(0)}
                  </ReviewerAvatar>
                }
              />
              <CardContent>
                <Review>{review.review}</Review>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </ReviewList>
      <div style={{ height: 80, width: 80 }}></div>
    </Layout>
  );
}

const ReviewList = styled(Grid)``;

const Reviewer = styled(CardHeader)`
  &&& {
    padding-bottom: 0;
  }
`;

const Review = styled.p`
  margin: 0;
`;

const ReviewerAvatar = styled(Avatar)`
  &&& {
    background-color: #c83aa8;
  }
`;
