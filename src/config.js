// Load config according to environment
const env = process.env.NODE_ENV || 'development';
export default require(`../config/${env}`);
