import './list.css'

interface Iprop {
    people:{
        id:number;
        name:string;
        age:number;
        img:string;
    }[]
}

export const List = ({people}:Iprop) => {
    return(
       <>
        {people.map((person) => (
            <div className='person-container'>
                <img src={person.img} alt='' />
                <div >
                    <h4>{person.name}</h4>
                    <p>{person.age} years</p>
                </div>
            </div>
        ))}
       </>
    )
}