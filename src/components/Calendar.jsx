import '../App.css'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

export default function CalComp() {
    const handleSelect = (ranges) => {
        console.log(ranges)
    }
    const selectionRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    }
    return(
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}/>
    )
}