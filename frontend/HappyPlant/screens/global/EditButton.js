import {Text, TouchableOpacity} from "react-native"
import Feather from "react-native-vector-icons/Feather";

export default function EditButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={{margin: 8}}>
            <Feather name="edit" color="grey" size={25}/>
        </TouchableOpacity>
    )
}
