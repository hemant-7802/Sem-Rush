
// const ListItems = {
//     li1: '',
//     li1: '',
//     li1: '',
//     li1: '',
//     li1: '',
//     li1: '',

// }
// const ul = document.getElementById("ul")
// function lists()
// {
//     for(let i=1;i<=4;i++)
//     {
//         if(i>4)
//         {
//             break;
//         }
//         else
//         {
//             let newlist = document.createElement("li");
//             newlist.innerText = "this is new line";
//             ul.appendChild(newlist);
//         }
//     }
// }
// console.log(document.getElementsByTagName("ul"));

// function Temp(){
//     return(
//         <>
//         <h1></h1>
//         <ul id="ul">{lists()}</ul>
//         </>
//     )
// }
const titles = {
    t1: 'Evaluate Performence of Competative sites',
    t2: 'Discover New Business Opportunities',
    t3: 'Understand User,s Behaviour'
}

const img1 = "../../stocks/logo.png";
function Temp({title="Not Loaded Yet", lists="Not Found",image="Image not Found"}){
    return(
        <>
        <div className="details overflow-auto">
            <h1 className="title inline bg-orange-300 mt-48">{title}</h1>
            <ul></ul>
            {/* <img src={image} alt="" className="float-right"/> */}
            <img src={image} alt="" className="float-right bg-orange-600"/>

        </div>
        <div className="imgs overflow-auto border-green-700">
            {/* <img src={image} alt="" className="float-right bg-orange-600"/> */}
        </div>
        </>
    )
}
export default Temp;
export {titles}