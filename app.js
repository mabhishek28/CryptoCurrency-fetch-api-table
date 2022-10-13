fetch('https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=INR')
.then( (apiData) =>{
    // console.log(apiData.json());
    return apiData.json(); 
}).then((coinData)=>{
     console.log(coinData.coins[0]);
     let cd = coinData.coins;
    let data ="";
    cd.map((values)=>{
        data +=`
        <tr>   
                <td><img src= "${values.icon}"/></td>
                <td>${values.symbol}</td>
                <td>${values.name}</td>
                <td>${values.rank}</td>
                <td>${values.price}</td>
                
       </tr> `;
    });
    document.getElementById("tablebody").innerHTML = data;
}).catch((error)=>{
    console.log(error);
})


