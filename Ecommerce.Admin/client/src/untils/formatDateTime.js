export const formatDateTime = (time) => {
  const temp = new Date(time)
  return temp.toLocaleDateString() + ' ' + temp.toLocaleTimeString()
}
