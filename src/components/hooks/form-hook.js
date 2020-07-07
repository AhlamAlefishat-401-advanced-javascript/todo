import  { useState } from 'react';

const useForm = (callback) => {
    const [item, setItem ] = useState({});

    const handleSubmit = event => {

         event.preventDefault();
         
         event.target.reset();
        callback(item);
    }

    const handleChange = event => {
        event.persist(); 
        setItem(({ ...item, [event.target.name]: event.target.value }));
    }




    return [handleSubmit, handleChange, item];
}

export default useForm;