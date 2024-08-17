import { formatDate, getTime, formatCountdown, getTimeDifference, updateCountdown, convertToBase64 } from '../services/utils';

describe('Utils Functions', () => {

    describe('formatDate', () => {
        it('should format the date correctly in French locale', () => {
            const date = '2024-08-10';
            const formattedDate = formatDate(date);
            expect(formattedDate).toBe('10 août 2024');
        });

        it('should handle different date formats correctly', () => {
            const dateISO = '2024-08-10T14:30:00Z';
            const formattedDate = formatDate(dateISO);
            expect(formattedDate).toBe('10 août 2024');
        });

        it('should handle invalid dates gracefully', () => {
            const invalidDate = 'invalid-date';
            const formattedDate = formatDate(invalidDate);
            expect(formattedDate).toBe('Invalid Date');
        });
    });

    describe('getTime', () => {
        it('should return the correct time in the format "HHhMM"', () => {
            const date = '2024-08-10T14:30:00';
            const time = getTime(date);
            expect(time).toBe('14h30');
        });

        it('should correctly handle midnight', () => {
            const date = '2024-08-10T00:00:00';
            const time = getTime(date);
            expect(time).toBe('0h00');
        });
    });

    describe('formatCountdown', () => {
        it('should correctly format a time difference in milliseconds', () => {
            const timeDifference = 90061000; // 1 day, 1 hour, 1 minute, and 1 second
            const countdown = formatCountdown(timeDifference);
            expect(countdown).toEqual({
                days: '1',
                hours: '1',
                minutes: '1',
                seconds: '1'
            });
        });

        it('should return "0" for all fields when the time difference is 0', () => {
            const timeDifference = 0;
            const countdown = formatCountdown(timeDifference);
            expect(countdown).toEqual({
                days: '0',
                hours: '0',
                minutes: '0',
                seconds: '0'
            });
        });
    });

    describe('updateCountdown', () => {
        it('should return the correct countdown given an ending time', () => {
            // Freeze the current date
            const mockCurrentDate = new Date('2024-08-10T12:00:00Z');
            
            // Create a mock function for Date
            const originalDate = global.Date; // Keep a reference to the real Date
    
            function MockDate(date) {
                if (date) {
                    return new originalDate(date); // Use the real Date for endingTime
                }
                return mockCurrentDate; // Use the mocked date by default
            }
            MockDate.now = () => mockCurrentDate.getTime(); // Mock Date.now()
    
            // Replace global.Date with MockDate
            global.Date = MockDate;
    
            const endingTime = '2024-08-11T13:01:01Z'; // 1 day, 1 hour, 1 minute, 1 second later
            const countdown = updateCountdown(endingTime);
    
            expect(countdown).toEqual({
                days: '1',
                hours: '1',
                minutes: '1',
                seconds: '1'
            });
    
            // Restore the original implementation
            global.Date = originalDate;
        });
    });
    
    describe('convertToBase64', () => {
        it('should correctly convert a byte array to a base64 string', () => {
            const byteArray = [72, 101, 108, 108, 111]; // "Hello" in ASCII
            const base64String = convertToBase64(byteArray);
            expect(base64String).toBe('data:image/jpeg;base64,SGVsbG8=');
        });

        it('should return an empty base64 string for an empty byte array', () => {
            const byteArray = [];
            const base64String = convertToBase64(byteArray);
            expect(base64String).toBe('data:image/jpeg;base64,');
        });
    });

});
