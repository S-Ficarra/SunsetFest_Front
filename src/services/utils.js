import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('fr-FR', options);
  };


export function getTimeDifference (endingTime) {
    return new Date(endingTime) - new Date () 
}

export function formatCountdown (timeDifference) {
    let timeDifferenceSeconds = timeDifference / 1000;
    let timeDifferenceMinutes = timeDifferenceSeconds / 60;
    let timeDifferenceHours = timeDifferenceMinutes / 60;
    let timeDifferenceDays = timeDifferenceHours / 24;

    let days = Math.floor(timeDifferenceDays).toString();
    let hours = Math.floor(timeDifferenceHours  %24).toString();
    let minutes = Math.floor(timeDifferenceMinutes %60).toString();
    let seconds = Math.floor(timeDifferenceSeconds %60).toString();

    return {days: days, hours: hours, minutes: minutes, seconds: seconds};
};

export function updateCountdown (endingTime) {
    let timeDifference = getTimeDifference(endingTime);
    return formatCountdown(timeDifference);
}; 
