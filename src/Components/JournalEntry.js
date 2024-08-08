import '../style/JournalEntry.css'

function JournalEntry(props) {
    const dateStart = props.entry.dateStart
    const dateEnd = props.entry.dateEnd
    const dateStartStr = dateStart.getDate() + " " + dateStart.toLocaleString('default', {month: 'long'}) + ", " + dateStart.getFullYear()
    const dateEndStr = dateEnd.getDate() + " " + dateEnd.toLocaleString('default', {month: 'long'}) + ", " + dateEnd.getFullYear()
    return (
        <div className="entry">
            <img className="img" src={require(`../images/${props.entry.img}`)} alt=""/>
            <div className="entry--info">
                <div className="entry--location-info">
                    <h3 className="entry--location-name"><i className="fa fa-map-marker"></i> {props.entry.location}</h3>
                    <a className="entry--location-googlemaps" href={props.entry.googleMaps}>View on Google Maps</a>
                </div>
                <h1 className="entry--name">{props.entry.name}</h1>
                <h3 className="entry--date">{dateStartStr} - {dateEndStr}</h3>
                <p>{props.entry.description}</p>
            </div>
        </div>
    )
}

export default JournalEntry;