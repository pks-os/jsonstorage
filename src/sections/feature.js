/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'Works on all devices',
    title: 'Works on all devices',
    text:
      'Post the data from desktop app, get it from web/mobile app or vice versa.',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Flexible API',
    title: 'Flexible API',
    text:
      'All requests support cross-origin resource sharing (CORS).',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Free Tier',
    title: 'Free Tier',
    text:
      'Free Tier is good for any purpose, as long as you dont issue to many requests.',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Secure',
    title: 'Secure',
    text:
      'You can get the data only if you know the ID. All requests are server over SSL.',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'No Tracking',
    title: 'No Tracking',
    text:
      'The rules are based on real-time request details, we do not store any information.',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Connectors',
    title: 'Connectors',
    text:
      'Pre-built connectors for modern JS frameworks, such as React, NextJS, Vue.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Feature rich"
          title="Exciting platform capabilities"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
