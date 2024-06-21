import { ChangeEvent, FC, useEffect, useState } from "react";
import { Input } from 'antd';
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

const { Search } = Input;
const ListSearch:FC = ()=>{
    const [SearchValue,setValue] = useState('');
    const nav = useNavigate();
    const [searchParams] = useSearchParams()
    const {pathname} = useLocation()
    function onSearch(value:string){
        console.log(value);
        nav({
            pathname,
            search:`keywords=${SearchValue}`,
        })
        
    }
    function onChange(event:ChangeEvent<HTMLInputElement>){
        setValue(event.target.value);
    }
    useEffect(()=>{
        let newValue = searchParams.get('keywords')||'';
        setValue(newValue);        
    },[searchParams])
    return <>
         <Search placeholder="input search text" onSearch={onSearch} onChange={onChange} style={{ width: 200 }} />
    </>   
}

export default ListSearch