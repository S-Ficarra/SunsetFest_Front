import { convertToBase64 } from '../../../services/utils';


function ThirdDay ({performances}) {


    const sundayPerfs = performances.filter(performance => {
        const startingTime = new Date(performance._timeFrame._startingTime);
        return startingTime.getDay() === 0;
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
                {sundayPerfs
                    .filter(performance => performance._stage._name === "roxy")
                    .map(performance => {
                        const time =  new Date (performance._timeFrame._startingTime)
                        const hour = time.getHours()
                        return (
                            <div key={performance._id} className={`row-${hour} PerformanceContainer`}>
                                <img src={convertToBase64(performance._band._thumbnailImage.data)} alt="" />
                                <div className="BlackFilter"></div>
                                <p>{performance._band._name}</p>
                            </div>)
                    })}
            </div>
            <div className="StageContainer">
                <h1 className="top-row">SCENE<br/>RAINBOW</h1>
                {sundayPerfs
                    .filter(performance => performance._stage._name === "rainbow")
                    .map(performance => {
                        const time =  new Date (performance._timeFrame._startingTime)
                        const hour = time.getHours()
                        return (
                            <div key={performance._id} className={`row-${hour} PerformanceContainer`}>
                                <img src={convertToBase64(performance._band._thumbnailImage.data)} alt="" />
                                <div className="BlackFilter"></div>
                                <p>{performance._band._name}</p>
                            </div>)
                    })}
            </div>
            <div className="StageContainer column3">
                <h1 className="top-row">SCENE<br/>WHISKEY</h1>
                {sundayPerfs
                    .filter(performance => performance._stage._name === "whiskey")
                    .map(performance => {
                        const time =  new Date (performance._timeFrame._startingTime)
                        const hour = time.getHours()
                        return (
                            <div key={performance._id} className={`row-${hour} PerformanceContainer`}>
                                <img src={convertToBase64(performance._band._thumbnailImage.data)} alt="" />
                                <div className="BlackFilter"></div>
                                <p>{performance._band._name}</p>
                            </div>)
                    })}
            </div>
            <div className="StageContainer">
                <h1 className="top-row">SCENE<br/>VIPER</h1>
                {sundayPerfs
                    .filter(performance => performance._stage._name === "viper")
                    .map(performance => {
                        const time =  new Date (performance._timeFrame._startingTime)
                        const hour = time.getHours()
                        return (
                            <div key={performance._id} className={`row-${hour} PerformanceContainer`}>
                                <img src={convertToBase64(performance._band._thumbnailImage.data)} alt="" />
                                <div className="BlackFilter"></div>
                                <p>{performance._band._name}</p>
                            </div>)
                    })}
            </div>
        </div>
    )

}
export default ThirdDay;