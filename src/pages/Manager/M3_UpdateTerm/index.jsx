import React from 'react';
import './style.scss';
import DashboardLayout from '../../../components/DashboardLayout';

export default function M3_UpdateTerm(props) {
  const { index } = props;
  return (
    <DashboardLayout>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '8%', // Adjust the padding top value as needed
      }}/>
      <p>ویرایش اطلاعات ترم ؟</p>
      <p>{index}</p>

    </DashboardLayout>
  );
}
