// src/components/DetailSectionsWrapper/DetailSectionsWrapper.jsx
import React from 'react';
import AnalyticsSection from '../AnalyticsCard/AnalyticsCard';
import SalesLeadSection from '../SalesLeadCard/SalesLeadCard';
import styles from './DetailSectionWrapper.module.css';

const DetailSectionsWrapper = () => {
  return (
    <div className={styles.wrapper}>
      {/* Analytics Section will be the first sticky layer */}
      <div className={styles.stickySection}>
        <AnalyticsSection />
      </div>

      {/* Sales Lead Section will be the second sticky layer, overlapping the first */}
      <div className={styles.stickySection}>
        <SalesLeadSection />
      </div>

      {/* Add more detail sections here if needed later */}
    </div>
  );
};

export default DetailSectionsWrapper;