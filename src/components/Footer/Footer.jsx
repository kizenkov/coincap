import logo from './../../files/logo.png'
import post from '../../files/postFooter.png'

function Footer() {
    return (
        <div className=' row align-items-center text-center m-0 ps-4 footer'>
            <div className='row align-items-center '>
                <div className='col text-end'>
                    Национальный оператор почтовой связи Республики Беларусь
                </div>
                <div className='col text-center py-4'>
                    <img className='post' src={post} alt='post'/> БЕЛПОЧТА
                </div>
                <div className='col text-start'>
                    Покупайте белорусские товары на shop.belpost.by
                </div>
            </div>
            <div className='row align-items-center'>
                <div className='col text-center'>
                    Разработано компанией <img className='logo' src={logo} alt='logo'/> High-tech.by
                </div>
            </div>
        </div>
    )
}

export default Footer