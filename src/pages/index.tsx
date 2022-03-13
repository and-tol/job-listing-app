import type { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import { ReactElement } from 'react';
// Components
import { TheHeaderComponent } from '../components/TheHeader';
import { FilterPanelComponent } from '../components/FilterPanel';
import { JobListComponent } from '../components/JobList';
// Other
import { positionActions } from '../bus/positions/position-actions';

import data from '../../data/data.json';
import { AppDispatch, wrapper } from '../store';

const HomePage: NextPage = (): ReactElement => {
  return (
    <div>
      <Head>
        <title>Job listing</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <TheHeaderComponent />
      <main className='container'>
        <FilterPanelComponent />
        <JobListComponent />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async () => {
    store.dispatch(positionActions.addPositions(data));
    return {
      props: {},
    };
  });

export default HomePage;
