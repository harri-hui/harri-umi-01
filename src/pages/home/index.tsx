import React from 'react';
import Header from '@/components/Header';
import styles from './index.module.scss';

const Home:React.FC = () => {
  return <div>
    <Header title="哈哈哈"/>
    <div className={styles.red}>Home</div>
  </div>
}

export default Home;