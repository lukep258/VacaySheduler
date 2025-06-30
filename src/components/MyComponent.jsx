import { DateRangePicker } from 'react-date-range'

class MyComponent extends Component {
    handleSelect(ranges){
        console.log(ranges)
    }
    render(){
        const selectionRange = {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    }
    
}