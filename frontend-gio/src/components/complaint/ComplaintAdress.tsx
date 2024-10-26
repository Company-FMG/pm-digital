import { useState } from "react"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import { Option } from "react-google-places-autocomplete/build/types"
import { SingleValue } from "react-select"
import { useForm } from "../../contexts/ComplaintFormContext"
const api_key = import.meta.env.VITE_REACT_GOOGLE_MAPS_KEY

interface ComplaintAdressProps {
    type: typeof GooglePlacesAutocomplete;
}

export default function ComplaintAdress({type}: ComplaintAdressProps,) {
    const { setFormData } = useForm()

    const [value, setValue] = useState<SingleValue<Option> | null>(null);

    const getLatAndLng = (place: SingleValue<Option> | null, type: any):void => {
        if (!place) {
            return;
        }

        const placeId = place.value.place_id

        if (!placeId){
            console.error("PlaceID não existe. Escolha uma localização válida")
            return;
        }

        const service = new google.maps.places.PlacesService(document.createElement('div'))
        service.getDetails({placeId}, (place, status) => {
            if(status === 'OK' && place?.geometry && place.geometry.location){
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng();
                const desc = place.formatted_address
                const postalCode = place.address_components?.find(c => c.types.includes('postal_code'))?.short_name

                setFormData((prevState) => ({
                    ...prevState,
                    geolocation: { lat, lng },
                    local: desc ?? prevState.local,
                    cep: postalCode?? prevState.cep,
                }));

                console.log(lat)
                console.log(lng)
                console.log(desc)
                console.log(postalCode)
            }
        })
        console.log(place, type)
    }
    
    
    return (
        <>
            <GooglePlacesAutocomplete
                apiKey={api_key}
                apiOptions={{ language: 'pt-BR', region: 'BR' }}
                selectProps={{
                    value,
                    onChange: (place) => {
                        
                        if (!place) {
                            // Se o endereço for limpo, também limpa o CEP
                            setFormData((prevState) => ({
                                ...prevState,
                                cep: undefined, // Limpa o CEP
                                endereco: "",   // Limpa o endereço
                            }));
                        } else {
                            getLatAndLng(place, type);
                        }
                        setValue(place)},
                    placeholder: "Ex: Avenida Dois Rios, Ibura...",
                    isClearable: true,
                    required: true,
                    className: "border-black bg-grey-custom border-2 rounded-lg px-7 py-3 placeholder:italic",
                    components: {
                        DropdownIndicator: () => null
                    },
                    styles: {
                        control: (provided) => ({
                            ...provided,
                            border: 'none',
                            paddingBottom: '0',
                            paddingTop: '0',
                            minHeight: '0',
                            boxShadow: 'none',
                            color: 'gray',
                            margin: 'none',
                            backgroundColor: 'none'
                        }),
                        valueContainer: (provided => ({
                            ...provided,
                            padding: '0',
                        })),
                        input: (provided => ({
                            ...provided,
                            paddingBottom: '0',
                            paddingTop: '0',
                            margin: 'none'
                        })),
                        placeholder: (provided => ({
                            ...provided,
                            color: '#9ca3af',
                            fontStyle: 'italic'
                        }))
                    }
                }}
                autocompletionRequest={{
                    componentRestrictions: {
                        country: ['br']
                    }
                }}
            />
        </>
    )
}