import '../style/JournalEntry.css'

function JournalEntry(props) {
    const dateStart = props.entry.dateStart
    const dateEnd = props.entry.dateEnd
    const dateStartStr = dateStart.getDate() + " " + dateStart.toLocaleString('default', {month: 'long'}) + ", " + dateStart.getFullYear()
    const dateEndStr = dateEnd.getDate() + " " + dateEnd.toLocaleString('default', {month: 'long'}) + ", " + dateEnd.getFullYear()
    return (
        <div className="entry">
            <img className="img" src={require(`../images/${props.entry.img}`)} alt=""/>
            <div className="entries--info">
                <h3><i className="fa fa-map-marker"></i>{props.entry.location}</h3>
                <a href="https://googlemaps.com">View on Google Maps</a>
                <h1>{props.entry.name}</h1>
                <h3>{dateStartStr} - {dateEndStr}</h3>
                <p>{props.entry.description}</p>
            </div>
        </div>
    )
}

export default JournalEntry;