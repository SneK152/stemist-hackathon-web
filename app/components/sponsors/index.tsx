import AnimatedSponsor from "./SponsorSpring"
import AppleLogo from './images/apple_logo.jpg'
import FBLogo from './images/fb.jpeg'
import InstagramLogo from './images/instagram.jpg'
import SpotifyLogo from './images/spotify.png'

export default function Sponsors() {
    return (
        <div className='w-screen p-4'>
           <div className="flex p-3 space-x-6">
            <AnimatedSponsor name='apple' image={AppleLogo} className="" />
            <AnimatedSponsor name='facebook' image={FBLogo} className="" />
            <AnimatedSponsor name='instagram'image={InstagramLogo} className="" />
            <AnimatedSponsor name='spotify' image={SpotifyLogo} className="" />
           </div>
        </div>
    )
}