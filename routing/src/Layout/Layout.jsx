import {NavLink, Outlet} from 'react-router-dom'

function Layout(){
    const colori = ({isActive})=> isActive ? '!text-red-500 font-bold' : '!text-gray-700'
    // const id = Math.floor(Math.random()*100)
    const id = "Hidden"
    return(
        
       <>
       <nav className='p-10 bg-gray-200 mb-10 text-lg font-semibold rounded-md' >
        <NavLink to='/' end className={colori}>Home</NavLink  > | {' '}
        <NavLink to='/about' className={colori}>About</NavLink> | {' '}
        <NavLink to='/contact'className={colori}>Contact</NavLink> | {' '}
        <NavLink to={`/user/${id}`}className={colori}>User</NavLink>
       </nav>
       
       <Outlet/>
       </>
    )

}
export default Layout