import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {apiNoToken} from "./network/Api";

function App() {
    const [member, setMember] = useState()
    const [data, setData] = useState([])

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        await apiNoToken('api', 'POST', member)
        setData([...data, {...member, id: data[data.length - 1].id + 1}])
    }

    const onInputHandler = (e) => {
        const {name, value} = e.target
        setMember({...member, [name]: value})
    }

    const getData = async () => {
        const {data} = await apiNoToken('api', 'GET')
        setData(data)
    }


    useEffect(() => {
        getData()
    }, [])


    return <div>
        <form onSubmit={onSubmitHandler}>
            <input name='name' onInput={onInputHandler}/>
            <input name='description' onInput={onInputHandler}/>
            <button type='submit'>확인</button>
        </form>


        <div>
            {data.map((member) =>
                <div id={member.id}>
                    <div>{member.id}</div>
                    <div>{member.id}</div>
                    <div>{member.id}</div>
                </div>
            )}
        </div>
    </div>

}

export default App;
