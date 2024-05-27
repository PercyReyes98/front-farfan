import { Link } from "react-router-dom"
const links=[
    {
        name: 'Report',
        href: '/',
    },
    {
        name: 'Form',
        href: '/form',
    },
    {
        name: 'Search',
        href: '/search',
    },
]

const Nabvar = ()=>{
    return(
    
        <div>
        {links.map((x)=>(
                <Link key={x.name} to={x.href}>{x.name}</Link>
            ))}
        </div>
        
    )
}

export default Nabvar