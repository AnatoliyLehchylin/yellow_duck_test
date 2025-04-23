import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './style/style.scss'

function MyCalendar() {
    const [date, setDate] = useState(new Date());

    return (
        <div className='cal-wrapp'>
            <button className='ticket'>+ Купити квіток</button>
            <Calendar
                className='react-calendar'
                onChange={setDate}
                value={date}
                locale="en"
            />
        </div>
    );
}

export default MyCalendar