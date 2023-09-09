// src/components/Main.js

import React from 'react';
import PhotoCarousel from './PhotoCarousel';
import Image from 'next/image';
import { Grid, Typography, Paper, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faGift, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const Main = () => {
  const images = [
    '/img/cancer_center_joey.jpg',
    '/img/jtbcrew.jpg',
    '/img/toys.jpg'
  ];
  return (

    <Container>
      <Grid container maxWidth={'lg'} spacing={2} justifyContent={'center'} style={{ padding: '8px 0px', placeContent: 'center', display: 'center' }}>
        <Grid item xs={12} lg={6}>
          <Paper style={{ padding: '20px', textAlign: 'center', height: '100%' }}>
            <PhotoCarousel images={images} />
          </Paper>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Paper style={{ padding: '20px', textAlign: 'center', height: '100%' }}>
            <Typography variant='h2'>Our Mission</Typography>
            <Typography variant='body1'>We are a 501(c) organization dedicated to providing toys and
              other care items to childhood cancer patients undergoing treatment.
              Based out of Atlanta, we support metro-area hospitals by delivering
              items like movies, video games, toys, and gift cards.
            </Typography>
            <br/>
            <Typography variant='body1'><strong>100% of all donations</strong> go directly into supporting families confronted
              by childhood illness.</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>&nbsp;</Grid>

        <Grid item xs={12} lg={4}>
          <Paper style={{ height: '100%', padding: '20px' }}>

            <Typography variant="h6">Compassion</Typography>
            <FontAwesomeIcon icon={faHeart} size='lg' color='#d83a50' style={{ fontSize: '3em' }} />
            <Typography variant="body1">We work with families, hospitals and other charitable organizations to provide toys to kids undergoing intensive medical treatments. We know the positive impact simple comforts can make in tough times.</Typography>

          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper style={{ height: '100%', padding: '20px' }}>

            <Typography variant="h6">Charity</Typography>
            <FontAwesomeIcon icon={faGift} size='lg' color='#23bf5a' style={{ fontSize: '3em' }} />
            <Typography variant="body1">Donations go directly to items like toys, movies, and video games for pediatric oncology centers to give to patients. We also give out things like gift cards and vouchers for entertainment and family outings.</Typography>

          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper style={{ height: '100%', padding: '20px' }}>

            <Typography variant="h6">Community</Typography>
            <FontAwesomeIcon icon={faThumbsUp} size='lg' color='#f7e30e' style={{ fontSize: '3em' }} />
            <Typography variant="body1">We hold motorcycle rides, brunches, auctions, and other events each year. Everything we do comes with the help and support of local businesses and community organizations that we appreciate so much.</Typography>

          </Paper>
        </Grid>
        <Grid item xs={12}>&nbsp;</Grid>


        <Grid item xs={12}>
          <Paper style={{ padding: '20px', textAlign: 'center'}}>
            <Typography variant='h3'>About us</Typography>
            <Image src="/img/joey.jpg" alt='Joey Doolittle' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />

            <Typography variant='body1'>JTB was founded by our son, Joey Doolittle.  Joey was a lifelong cancer warrior who was diagnosed with Rhabdomyosarcoma at only 3 months of age.
              Throughout Joey&apos;s life, he underwent numerous chemotherapy protocols, surgeries, and radiation treatments.
              Toys provided by the hospitals always seemed to make his treatments a little more bearable.
              During the twilight of Joey&apos;s young life, when he was the sickest, he decided to conduct a fundraiser to raise money to buy the other kids at the hospital toys.
              On June 7, 2008, Joey raised $1,800 by organizing a &lsquo;cycle-a-thon&rsquo; at a local gym in Peachtree City, GA.
              A few days later, Joey made his first and only delivery of toys to the AFLAC Children&apos;s Cancer Center at Scottish Rite hospital in Atlanta.
              On July 4, 2008, after a lifetime battle against cancer, Joey peacefully passed away in his mother&apos;s arms.</Typography>
            <br/>
            <Typography variant='body1'>
              Joey&apos;s impact on his family, friends, and other childhood cancer patients continues to evolve and flourish.  
              His simple dream of helping the other kids and their families continues to live on because of the incredible community of volunteers that have felt Joey in their hearts.  
              With no paid employees, we are a 100% volunteer army dedicated to the JTB mission.  
              We operate this way so that we can put every dollar towards helping these kids and their families.  
              We have dedicated ourselves to being good stewards of the money, time, and efforts of our volunteer community.  
              We will continue Joey&apos;s mission with the compassion and integrity that he had when he started it... simple as that.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>


  );
};

export default Main;