import React, {useState, useEffect} from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

//https://www.youtube.com/watch?v=y7oT4XtzkXY

export default function Calendar() {
    const [dateRange, setDateRange] = useState("")
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(null)

    const onChange = (dates) => {
        const [start, end] = dates
        setStartDate(start)
        setEndDate(end)
    }

    useEffect(() => {
        if (startDate && endDate) {
            setDateRange("Selected date range: ${}")
        }}
    )
}

