import { BASE_URL } from '../../../App';


function SecondDay ({performances}) {


    const saturdayPerfs = performances.filter(performance => {
        const startingTime = new Date(performance._timeFrame._startingTime.slice(0, -1));
        return startingTime.getDay() === 6;
    });


    return (
        <div className="AllStageContainer">
            <div className="TimeListContainer">
                <h2 className="row-14">14H</h2>
                <h2 className="row-16">16H</h2>
                <h2 className="row-18">18H</h2>
                <h2 className="row-20">20H</h2>
                <h2 className="row-22">22H</h2>
            </div>
            <div className="StageContainer column1">
                <h1 className="top-row">SCENE<br/>ROXY</h1>
                {saturdayPerfs
                    .filter(performance => String(performance._stage._id) === '1')
                    .map(performance => {
                        const time =  new Date (performance._timeFrame._startingTime.slice(0, -1))
                        const hour = time.getHours()
                        return (
                            <div key={performance._id} className={`row-${hour} PerformanceContainer`}>
                                <img src={`${BASE_URL}${performance._band._thumbnailImage}`} alt={performance._band._name} />
                                <div className="BlackFilter"></div>
                                <p>{performance._band._name}</p>
                            </div>)
                    })}
            </div>
            <div className="StageContainer">
                <h1 className="top-row">SCENE<br/>RAINBOW</h1>
                {saturdayPerfs
                    .filter(performance => String(performance._stage._id) === '2')
                    .map(performance => {
                        const time =  new Date (performance._timeFrame._startingTime.slice(0, -1))
                        const hour = time.getHours()
                        return (
                            <div key={performance._id} className={`row-${hour} PerformanceContainer`}>
                                <img src={`${BASE_URL}${performance._band._thumbnailImage}`} alt={performance._band._name} />
                                <div className="BlackFilter"></div>
                                <p>{performance._band._name}</p>
                            </div>)
                    })}
            </div>
            <div className="StageContainer column3">
                <h1 className="top-row">SCENE<br/>WHISKEY</h1>
                {saturdayPerfs
                    .filter(performance => String(performance._stage._id) === '3')
                    .map(performance => {
                        const time =  new Date (performance._timeFrame._startingTime.slice(0, -1))
                        const hour = time.getHours()
                        return (
                            <div key={performance._id} className={`row-${hour} PerformanceContainer`}>
                                <img src={`${BASE_URL}${performance._band._thumbnailImage}`} alt={performance._band._name} />
                                <div className="BlackFilter"></div>
                                <p>{performance._band._name}</p>
                            </div>)
                    })}
            </div>
            <div className="StageContainer">
                <h1 className="top-row">SCENE<br/>VIPER</h1>
                {saturdayPerfs
                    .filter(performance => String(performance._stage._id) === '4')
                    .map(performance => {
                        const time =  new Date (performance._timeFrame._startingTime.slice(0, -1))
                        const hour = time.getHours()
                        return (
                            <div key={performance._id} className={`row-${hour} PerformanceContainer`}>
                                <img src={`${BASE_URL}${performance._band._thumbnailImage}`} alt={performance._band._name} />
                                <div className="BlackFilter"></div>
                                <p>{performance._band._name}</p>
                            </div>)
                    })}
            </div>
        </div>
    )

}
export default SecondDay;