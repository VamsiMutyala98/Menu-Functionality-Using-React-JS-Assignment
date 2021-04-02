import React, {useState} from 'react'

function TableComponent(props) {
    let arrObj = JSON.parse(localStorage.getItem('obj') || '[]');
    const [count,setCount] =useState(0)
    const onChangeCheckBox= (event,id) => {
        let obj=arrObj[id]
        obj.checker=event.target.checked
        console.log(arrObj,event.target.checked,id)
        arrObj[id]=obj
        const var1=arrObj.filter((obj)=>{
            return obj.checker===true
        }).length
        setCount(var1)
        console.log(count,var1)
    }
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ItemName</th>
                        <th>ItemPrice</th>
                        <th>Checker</th>
                    </tr>
                </thead>
                <tbody id="table">
                    {
                        arrObj.map((obj,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{obj.Iname}</td>
                                    <td>{obj.Iprice}</td>
                                    <td><input type="checkbox"  onChange={(event)=>onChangeCheckBox(event,index)} /></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            {
              count
            }
        </div>
    )
}

export default TableComponent
