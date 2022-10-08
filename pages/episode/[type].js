import React from 'react';
import {InnerPage } from '../../components/Common/index'
import { useRouter } from 'next/router'

const IdNewFile = () => {
    const router = useRouter()
    const {  type } = router.query
    console.log(type)
    return (
        <>
        <InnerPage type={type}/>
        
        </>
    );
}

export default IdNewFile;
