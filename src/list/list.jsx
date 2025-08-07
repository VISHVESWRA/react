import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/Auth';
import './List.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteList, fetchList, updateList } from '../redux/Fetch';

const List = () => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state?.products)
  const [searchTerm, setSearchTerm] = useState('');
  const filteredItems = items.filter((item) =>
    item.title?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
    item.brand?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
    item.category?.toLowerCase().includes(searchTerm?.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch])

  const handleEdit = (product) => {
    navigate(`/form/${product?.id}`);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      dispatch(deleteList(id));
    }
  };

  return (
    <>
      <div style={{margin:'16px'}}>
        <input
          type="text"
          placeholder="Search by title, brand, or category"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', marginBottom: '16px', width: '100%' }}
        />
        {searchTerm && (
          <button onClick={() => setSearchTerm('')}>Clear</button>
        )}
      </div>
      <div className='table'>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Model</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Color</th>
              <th>Discount</th>
              {/* <th>Image</th> */}
              {/* <th>Description</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((product) => (
              <tr key={product?.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.model}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.color}</td>
                <td>{product.discount}</td>
                {/* <td><img src={product.image} alt="" /></td> */}
                {/* <td>{product.description}</td> */}
                <td>
                  <div className='icon'>
                    <svg onClick={() => handleEdit(product)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg>

                    <svg onClick={() => handleDelete(product.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                      <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>
  )
};

export default List;
