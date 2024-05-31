import logomike from '../../assets/mikelogo.svg'
import { Geolocation } from '@capacitor/geolocation';


export default function NavbarMike () {
    const permission = async () => {
        try {
          const permissionStatus = await Geolocation.checkPermissions();
          console.log('Permission status: ', permissionStatus.location);
          if (permissionStatus?.location != 'granted') {
            const requestStatus = await Geolocation.requestPermissions();
            if (requestStatus.location != 'granted') {
              return;
            }
          }
          let options: PositionOptions = {
            enableHighAccuracy: true,
            timeout: 15000,
            maximumAge: 3000
          };
    
          const position = await Geolocation.getCurrentPosition(options);
          console.log(position);
        } catch (e) {
          console.log(e)
        }
      }

    return (
        <>
            <header className="p-0 bg-bluemike">
                <div className="container flex justify-between sm:h-16 md:h-24 lg:h-32 mx-auto px-4">
                    <a href="/" className="flex items-center p-2">
                        <img className="h-8 sm:h-8 md:h-16 lg:h-20" src={logomike} />
                    </a>
                    <div className="flex flex-row gap-6 items-center justify-center">
                        <a>
                            <img alt="" className="w-6 sm:w-8 md:w-12 lg:w-12 rounded-full ring-2 md:ring-4 ring-white ring-offset-4 ring-offset-bluemike" src="https://source.unsplash.com/40x40/?portrait?4" />
                        </a>
                        <div className="font-poppins text-xs sm:text-base md:text-xl lg:text-2xl text-white">
                            <p>Rafael Martins</p>
                            <p>COPOM</p>
                        </div>
                    </div>
                </div>
            </header>
        </>

    )
}