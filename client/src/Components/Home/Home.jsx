import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipes } from '../../actions/index'
import Cards from '../Cards/Cards';

export default function Home() {

        const dispatch = useDispatch();

        useEffect(() => {
                dispatch(getRecipes())
        }, [dispatch])

        return (
                <div>
                        <Cards />
                </div>
        )
}