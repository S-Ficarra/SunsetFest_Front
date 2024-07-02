import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function useScrollToTop() {
    
    useLocation()

    useEffect(() => {
    window.scrollTo(0, 0);
    });
}

export default useScrollToTop;