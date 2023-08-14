import "./CopyRights.css";

function CopyRights(): JSX.Element {
    const year = new Date().getFullYear();
    return (
        <div className="CopyRights">
            <p>ll right reserved to otterly useless systems &copy; {year} </p>
        </div>
    );
}

export default CopyRights;
