export default (numbers, label = 'mobile') => {
  const res = numbers.find((el) => el.label === label);

  return res ? res.number : '89266475595';
};
