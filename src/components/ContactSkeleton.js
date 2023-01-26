import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/skeleton.css'
import useMediaQueries from '../hooks/useMediaQueries'
const ContactSkeleton = ({cards}) => {
    const isMobile = useMediaQueries('mobile')
    return Array(cards)
        .fill(0)
        .map((_, i) => (
            <div className=' container card-skeleton'>
                <div className='left-col'>
                    <Skeleton circle width={isMobile ? 70 : 100} height={isMobile ? 70 : 100} />
                </div>
                <div className='right-col'>
                    <Skeleton count={2} />
                </div>
            </div>
        ))
}

export default ContactSkeleton
