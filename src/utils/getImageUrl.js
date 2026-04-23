export const getImageUrl = path => {
  if (!path) {
    return 'https://via.placeholder.com/300x450?text=No+Image';
  }

  return `https://image.tmdb.org/t/p/w500${path}`;
};