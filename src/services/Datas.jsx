import { CiClock2 } from "react-icons/ci";

const Datas = () => {
    const data = {
        categorys : [
            {_id: 1, name:"Web development", icon: <CiClock2 />  ,color:'#ddd',totalCourse:10 },
            {_id: 2, name:"Web Design", icon: "icon",color:'#ddd',totalCourse:10 },
            {_id: 3, name:"Marketing", icon: "icon",color:'#ddd',totalCourse:10 },
            {_id: 4, name:"SEO code", icon: "icon",color:'#ddd',totalCourse:10 },
            {_id: 5, name:"Sports affiliate", icon: "icon",color:'#ddd',totalCourse:10 },
            {_id: 5, name:"Data algorithms", icon: "icon",color:'#ddd',totalCourse:10 },
        ],
        language:[
            {_id: 1, name:"English", icon: "icon",color:'#ddd'},
            {_id: 2, name:"Bangla", icon: "icon",color:'#ddd'},
            {_id: 3, name:"France", icon: "icon",color:'#ddd' },
            {_id: 4, name:"Hindi", icon: "icon",color:'#ddd' },
        ]
    }
    return data
};

export default Datas;