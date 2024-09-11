// // BlogDelete.jsx
// import { useEffect } from 'react';
// import { remove, show } from '../../services/blogService';
// import { useParams, useNavigate } from 'react-router-dom';

// export default function BlogDelete() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const deleteBlog = async () => {
//       await remove(id);
//       navigate('/blogs');
//     };
//     deleteBlog();
//   }, [id, navigate]);

//   return <div>Deleting blog...</div>;
// }
