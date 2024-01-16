import Temp from "./Temp";
import { titles } from "./Temp";
const image1 = "../../stocks/img1.png";
const obj={
    h1:'head1',
}
const ListItems = [,2,3,4,5,6,7,8,9,10];
const list = ListItems.map((number) =>
    <li>{} </li>
);

function Services(){
    return(
        <>
        <div className="services bg-indigo-600 pt-12">
            <Temp title={titles.t1} image={image1}/>
            <Temp title={titles.t2} image={image1}/>
            <Temp title={titles.t3} image={image1}/>
        </div>
        <ul>{list}</ul>
        </>
    )
}
export default Services;