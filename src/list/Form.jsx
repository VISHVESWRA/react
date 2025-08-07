import { useForm } from 'react-hook-form';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../auth/Auth';
import './Form.css'
import { useDispatch, useSelector } from 'react-redux';
import { createList, fetchList, updateList } from '../redux/Fetch';
import { useEffect, useState } from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';

function MyForm() {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) {
        return <Navigate to="/" />;
    }

    const { id } = useParams();
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const nav = useNavigate();
    const { items } = useSelector((state) => state?.products)

    if (id) {
        useEffect(() => {
            async function fetchData() {
                try {
                    const res = await fetch(`https://fakestoreapi.in/api/products/${id}`);
                    const data = await res.json();
                    // setProduct(data?.product);
                    if (id ) {
                        reset({
                            id: data.product?.id,
                            title: data.product?.title,
                            price: data.product?.price,
                            brand: data.product?.brand,
                            model: data.product?.model,
                            category: data.product?.category,
                            color: data.product?.color,
                            discount: data.product?.discount,
                            description: data.product?.description,
                        });
                    }

                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            }

            fetchData();
        }, [id, reset]);
    }

    const onSubmit = (data) => {
        const sanitizedData = {
            ...data,
            price: String(data.price),
            discount: String(data.discount),
        };
        if (id) {
            dispatch(updateList(sanitizedData));
            dispatch(fetchList());
        } else {
            dispatch(createList(sanitizedData)).then(() => {
                dispatch(fetchList());
            });
        }
        nav('/list')
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Product Name:</label>
                <input type="text" placeholder='Enter Product'
                    {...register('title', { required: 'Required' })} />
                {errors.title && <p>{errors.title.message}</p>}
            </div><br />

            <div>
                <label>ID:</label>
                <input type="number" disabled={!!id}
                    {...register('id')} />
                {errors.id && <p>{errors.id.message}</p>}
            </div><br />

            <div>
                <label>Price:</label>
                <input type="number" placeholder='Enter Price'
                    {...register('price', { required: 'Price Required' })} />
                {errors.price && <p>{errors.price.message}</p>}
            </div><br />

            <div>
                <label>Brand:</label>
                <input type="text" placeholder='Enter Brand'
                    {...register('brand')} />
            </div><br />

            <div>
                <label>Model:</label>
                <input type="text" placeholder='Enter Model'
                    {...register('model')} />
            </div><br />

            <div>
                <label>Category:</label>
                <input type="text" placeholder='Enter Category'
                    {...register('category', { required: 'Category Required' })} />
                {errors.category && <p>{errors.category.message}</p>}
            </div><br />

            <div>
                <label>Color:</label>
                <input type="text" placeholder='Enter Color'
                    {...register('color')} />
            </div><br />

            <div>
                <label>Discount:</label>
                <input type="text" placeholder='Enter Discount'
                    {...register('discount')} />
            </div><br />

            <div>
                <label>Description:</label>
                <textarea type="text" placeholder='Enter Description'
                    {...register('description')} />
            </div><br />

            <button type='submit'>Submit</button>
        </form>
    )

}

export default MyForm;

