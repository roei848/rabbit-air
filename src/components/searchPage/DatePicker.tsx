import React, {Dispatch, SetStateAction, useEffect} from 'react';

interface DatePickerProps {
    startDate: string;
    endDate: string;
    setStartDate: Dispatch<SetStateAction<string>>;
    setEndDate: Dispatch<SetStateAction<string>>;
    disabled?: boolean;
}

const DatePicker = ({disabled, endDate, setEndDate, setStartDate, startDate}: DatePickerProps) => {
    useEffect(() => {
        if (disabled) {
            setStartDate('');
            setEndDate('');
        }
    }, [setStartDate, setEndDate, disabled]);

    return (
        <div className="date-picker">
            <div className="date-input-label">
                Start:
                <input
                    className="date-input"
                    type="date"
                    value={startDate}
                    onChange={e => setStartDate(e.target.value)}
                    max={endDate}
                    disabled={disabled}
                />
            </div>
            <div className="date-input-label">
                End:
                <input
                    className="date-input"
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    min={startDate}
                    disabled={disabled}
                />
            </div>
        </div>
    );
};

export default DatePicker;
