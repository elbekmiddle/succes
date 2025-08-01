// pages/success.js

import Head from 'next/head'

export default function Success() {
  return (
    <>
      <Head>
        <title>Оплата прошла успешно</title>
      </Head>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        backgroundColor: '#f0f8ff',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          textAlign: 'center',
          maxWidth: '500px',
        }}>
          <h1 style={{ color: '#28a745', fontSize: '2rem' }}>✅ Оплата прошла успешно!</h1>
          <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>Спасибо за ваш заказ! Мы уже начали его обработку.</p>
          <a href="/" style={{
            marginTop: '30px',
            display: 'inline-block',
            backgroundColor: '#0070f3',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            transition: 'background-color 0.3s',
          }}>Вернуться на главную</a>
        </div>
      </div>
    </>
  );
}
