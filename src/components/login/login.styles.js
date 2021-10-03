export const container = {
  hidden: { y: -100, opacity: 0 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 1.5, type: 'tween' },
  },
};

export const containerStyles = {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  pt: '150px',
  alignItems: 'center',
  overflow: 'hidden',
  borderRadius: '12px',
  fontWeight: 'bold',
};

export const inputStyles = {
  width: { xs: '90%', md: '370px' },
  marginBottom: '15px',
};
