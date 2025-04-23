import './style/style.scss'
import driverIn from '../../assets/driver-in.png';
import driverInst from '../../assets/driver-inst.png';

function Card({driver}) {
    return (
        <div className='card-wrapp'>
            <img src={driver.photo} alt='photo'/>
            <p className='driver-name'>{driver.name}</p>
            <p className='driver-experience'>Досвід роботи: {driver.experience}</p>
            <div className='network'>
                <img src={driverInst} alt='logo'/>
                <img src={driverIn} alt='logo'/>
            </div>
        </div>
    )
}

export default Card